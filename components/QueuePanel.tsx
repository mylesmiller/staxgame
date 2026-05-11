'use client';

import { useEffect, useRef, useState } from 'react';
import { DIFFICULTIES, type Difficulty } from '@/lib/difficulty';
import { PIECES, type QueueEntry } from '@/lib/pieces';

interface Props {
  queue: QueueEntry[];
  queueIdx: number;
  difficulty: Difficulty;
}

const QUEUE_CELL = 22;

function getCssColor(varName: string): string {
  if (typeof window === 'undefined') return '#000';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
}

export default function QueuePanel({ queue, queueIdx, difficulty }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cfg = DIFFICULTIES[difficulty];
  const [horizontal, setHorizontal] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)');
    const update = () => setHorizontal(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const upcoming = queue.slice(queueIdx + 1, queueIdx + 1 + cfg.queueLookahead);
    const slotW = QUEUE_CELL * 5;
    const slotH = QUEUE_CELL * 3 + 8;

    if (horizontal) {
      canvas.width = upcoming.length * slotW;
      canvas.height = slotH;
    } else {
      canvas.width = slotW;
      canvas.height = cfg.rows * cfg.cell;
    }

    ctx.fillStyle = getCssColor('--paper');
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < upcoming.length; i++) {
      const { type } = upcoming[i];
      const shape = PIECES[type].rotations[0];
      const color = getCssColor(PIECES[type].color);
      const xs = shape.map(([x]) => x);
      const ys = shape.map(([, y]) => y);
      const minX = Math.min(...xs), maxX = Math.max(...xs);
      const minY = Math.min(...ys), maxY = Math.max(...ys);
      const w = maxX - minX + 1;
      const h = maxY - minY + 1;

      const offsetX = horizontal
        ? i * slotW + (slotW - w * QUEUE_CELL) / 2 - minX * QUEUE_CELL
        : (slotW - w * QUEUE_CELL) / 2 - minX * QUEUE_CELL;
      const offsetY = horizontal
        ? (slotH - h * QUEUE_CELL) / 2 - minY * QUEUE_CELL
        : i * slotH + (slotH - h * QUEUE_CELL) / 2 - minY * QUEUE_CELL + 8;

      for (const [sx, sy] of shape) {
        ctx.fillStyle = color;
        ctx.fillRect(offsetX + sx * QUEUE_CELL + 1, offsetY + sy * QUEUE_CELL + 1,
          QUEUE_CELL - 2, QUEUE_CELL - 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(offsetX + sx * QUEUE_CELL + 1, offsetY + sy * QUEUE_CELL + 1,
          QUEUE_CELL - 2, 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(offsetX + sx * QUEUE_CELL + 1, offsetY + sy * QUEUE_CELL + QUEUE_CELL - 3,
          QUEUE_CELL - 2, 2);
        ctx.strokeStyle = 'rgba(0,0,0,0.4)';
        ctx.lineWidth = 1;
        ctx.strokeRect(offsetX + sx * QUEUE_CELL + 0.5, offsetY + sy * QUEUE_CELL + 0.5,
          QUEUE_CELL - 1, QUEUE_CELL - 1);
      }
    }
  }, [queue, queueIdx, cfg, horizontal]);

  return (
    <div className="well-wrap">
      <div className="well-label queue">{horizontal ? 'queue' : 'queue →'}</div>
      <div className="well queue-well">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}
