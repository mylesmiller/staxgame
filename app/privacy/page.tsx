import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — STAX',
  description: 'Privacy policy for staxgame.com',
};

export default function PrivacyPage() {
  return (
    <div className="app legal">
      <header className="legal-header">
        <Link href="/" className="legal-back">← back to game</Link>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: May 12, 2026</p>
      </header>

      <main className="legal-body">
        <p>
          This Privacy Policy describes how staxgame.com (&quot;Stax&quot;, &quot;we&quot;, &quot;us&quot;) handles
          information when you use the site.
        </p>

        <h2>Information we collect</h2>
        <p>
          Stax does not require an account and does not ask you for personal information.
          Your puzzle progress (which daily puzzles you have completed, times, scores) is
          stored locally in your browser via <code>localStorage</code> and is not sent to us.
        </p>

        <h2>Cookies and third-party services</h2>
        <p>
          We use the following third-party services, which may set their own cookies or
          collect data:
        </p>
        <ul>
          <li>
            <strong>Google AdSense.</strong> We display ads served by Google. Google and its
            partners use cookies to serve ads based on your prior visits to this and other
            websites. You can opt out of personalized advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google Ads Settings
            </a>
            . You can also opt out of a third-party vendor&apos;s use of cookies for personalized
            advertising at{' '}
            <a href="https://www.aboutads.info/" target="_blank" rel="noopener noreferrer">
              aboutads.info
            </a>
            .
          </li>
          <li>
            <strong>Hosting / analytics.</strong> Our hosting provider may automatically log
            standard request data (IP address, user agent, timestamp) for security and
            operational purposes.
          </li>
        </ul>

        <h2>EU / UK / EEA visitors</h2>
        <p>
          If you are visiting from the European Economic Area, the United Kingdom, or
          Switzerland, you may be shown a consent banner asking for your choices about
          personalized advertising. Your choices are managed through that banner.
        </p>

        <h2>Children</h2>
        <p>
          Stax is intended for a general audience. We do not knowingly collect personal
          information from children under 13.
        </p>

        <h2>Your choices</h2>
        <p>
          You can clear your local game data at any time by clearing your browser&apos;s site
          data for staxgame.com. You can block or delete cookies through your browser
          settings.
        </p>

        <h2>Changes</h2>
        <p>
          We may update this policy from time to time. The &quot;Last updated&quot; date above
          reflects the latest revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Email{' '}
          <a href="mailto:mylesthegreat33@gmail.com">mylesthegreat33@gmail.com</a>.
        </p>
      </main>
    </div>
  );
}
