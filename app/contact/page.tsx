import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — STAX',
  description: 'Get in touch about staxgame.com',
};

export default function ContactPage() {
  return (
    <div className="app legal">
      <header className="legal-header">
        <Link href="/" className="legal-back">← back to game</Link>
        <h1>Contact</h1>
        <p className="legal-updated">We read every email.</p>
      </header>

      <main className="legal-body">
        <p>
          Found a bug? Have feedback on a puzzle? Want to say hi? Email us at{' '}
          <a href="mailto:mylesthegreat33@gmail.com">mylesthegreat33@gmail.com</a>.
        </p>

        <p>
          When reporting a bug, it helps to include:
        </p>
        <ul>
          <li>the puzzle number and difficulty (shown in the result modal),</li>
          <li>your browser and device,</li>
          <li>a screenshot if the issue is visual.</li>
        </ul>

        <p>
          For privacy questions, see our <Link href="/privacy">Privacy Policy</Link>. For
          terms of use, see our <Link href="/terms">Terms of Service</Link>.
        </p>
      </main>
    </div>
  );
}
