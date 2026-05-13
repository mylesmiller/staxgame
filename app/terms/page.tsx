import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — STAX',
  description: 'Terms of service for staxgame.com',
};

export default function TermsPage() {
  return (
    <div className="app legal">
      <header className="legal-header">
        <Link href="/" className="legal-back">← back to game</Link>
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: May 12, 2026</p>
      </header>

      <main className="legal-body">
        <p>
          By using staxgame.com (&quot;Stax&quot;), you agree to these terms. If you do not agree,
          please do not use the site.
        </p>

        <h2>The service</h2>
        <p>
          Stax is a free daily puzzle game provided as-is. We may add, change, or remove
          features, puzzles, or the site itself at any time without notice.
        </p>

        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>attempt to disrupt, attack, or reverse-engineer the service;</li>
          <li>use automated means to scrape, mirror, or replay puzzles in a way that
            interferes with normal play;</li>
          <li>use the service in violation of any applicable law.</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          The Stax name, logo, design, code, and puzzle content are owned by us. You may
          share your own puzzle results (scores, emoji grids) freely. You may not copy or
          redistribute the site or its content without permission.
        </p>

        <h2>No warranty</h2>
        <p>
          Stax is provided &quot;as is&quot; without warranty of any kind, express or implied,
          including warranties of merchantability, fitness for a particular purpose, and
          non-infringement. We do not guarantee that the service will be uninterrupted,
          error-free, or available at any particular time.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the maximum extent permitted by law, we are not liable for any indirect,
          incidental, consequential, or punitive damages arising out of or relating to your
          use of the service.
        </p>

        <h2>Third-party services</h2>
        <p>
          Stax displays ads via Google AdSense and may link to third-party sites. We are
          not responsible for the content or practices of third parties. See our{' '}
          <Link href="/privacy">Privacy Policy</Link> for details on data handling.
        </p>

        <h2>Changes</h2>
        <p>
          We may revise these terms from time to time. Continued use of the site after
          changes means you accept the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Email{' '}
          <a href="mailto:mylesthegreat33@gmail.com">mylesthegreat33@gmail.com</a>.
        </p>
      </main>
    </div>
  );
}
