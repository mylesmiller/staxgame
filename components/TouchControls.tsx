'use client';

interface Props {
  onLeft: () => void;
  onRight: () => void;
  onRotate: () => void;
  onSoftDrop: () => void;
  onHardDrop: () => void;
}

export default function TouchControls({
  onLeft,
  onRight,
  onRotate,
  onSoftDrop,
  onHardDrop,
}: Props) {
  return (
    <div className="touch-controls">
      <button className="tc-btn" aria-label="left" onPointerDown={(e) => { e.preventDefault(); onLeft(); }}>←</button>
      <button className="tc-btn" aria-label="rotate" onPointerDown={(e) => { e.preventDefault(); onRotate(); }}>⟳</button>
      <button className="tc-btn" aria-label="soft drop" onPointerDown={(e) => { e.preventDefault(); onSoftDrop(); }}>↓</button>
      <button className="tc-btn drop" aria-label="hard drop" onPointerDown={(e) => { e.preventDefault(); onHardDrop(); }}>⤓</button>
      <button className="tc-btn" aria-label="right" onPointerDown={(e) => { e.preventDefault(); onRight(); }}>→</button>
    </div>
  );
}
