import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Mindful Eating iOS app.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy"
      title="Privacy Policy"
      summary="Mindful Eating is designed so your personal entries stay with you. The app has no account, advertising, analytics, or tracking."
    >
      <section>
        <h2>Who operates Mindful Eating</h2>
        <p>Mindful Eating is provided by Cantrell Digital. Questions about this policy can be sent to <a href="mailto:andrew@cantrelldigital.dev">andrew@cantrelldigital.dev</a>.</p>
      </section>

      <section>
        <h2>Information you enter</h2>
        <p>The app lets you record an optional preferred name, current and historical weight, fullness levels before and after meals, wake-up and bedtime fullness levels, and the dates and times associated with those entries.</p>
      </section>

      <section>
        <h2>How your information is used</h2>
        <p>Your entries are used only on your device to display your journal, calendar, trends, averages, high and low values, and other statistics you request.</p>
      </section>

      <section>
        <h2>Data collection and sharing</h2>
        <p>Mindful Eating does not transmit your entries to Cantrell Digital or any third party. The app has no user accounts, advertising, analytics, tracking technology, cloud synchronization, or third-party software development kits. We do not sell, rent, or share your app data because we do not receive it.</p>
      </section>

      <section>
        <h2>Storage, backups, and security</h2>
        <p>Your app data is stored in the app’s protected container on your device. The app’s data store is marked to be excluded from iCloud and device backups. The app also hides entry content while it is inactive to reduce exposure in app-switcher previews.</p>
        <p>No security measure can guarantee absolute protection. Protecting your device with a passcode and keeping iOS current will help protect locally stored information.</p>
      </section>

      <section>
        <h2>Retention and deletion</h2>
        <p>Entries remain on your device until you edit or delete them, use “Erase all app data” in Settings, or remove the app. Erasing all app data is permanent, and Cantrell Digital cannot retrieve or restore it.</p>
      </section>

      <section>
        <h2>Permissions and other Apple services</h2>
        <p>Mindful Eating does not currently request access to HealthKit, contacts, photos, location, advertising identifiers, or other sensitive system permissions. It does not use CloudKit or iCloud synchronization.</p>
      </section>

      <section>
        <h2>Optional external support</h2>
        <p>In eligible App Store storefronts, the app may display an optional link to a support page on cantrelldigital.dev. Opening the link is your choice. The app does not add your entries, an account identifier, or tracking parameters to the link.</p>
        <p>If you continue from our website to Buy Me a Coffee, Buy Me a Coffee and its payment processor independently handle the name, email address, message, payment details, and transaction information you choose to provide. Cantrell Digital may receive supporter contact information, messages, and transaction records through Buy Me a Coffee. That information is separate from your Mindful Eating records and is governed by Buy Me a Coffee’s policies.</p>
      </section>

      <section>
        <h2>Children’s privacy</h2>
        <p>Mindful Eating is a general wellness tool and is not directed to children under 13. We do not knowingly collect personal information from children—or from any app user—because app entries are not transmitted to us.</p>
      </section>

      <section>
        <h2>Your choices</h2>
        <p>You can use the app without entering a name, edit your entries, or erase all local app data at any time. Because Cantrell Digital cannot access your local records, privacy or deletion requests concerning those records must be completed on your device.</p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>If the app’s data practices change, this policy and the App Store privacy disclosures will be updated before the change is released. The effective date above identifies the latest version.</p>
      </section>
    </LegalPage>
  );
}
