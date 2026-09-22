import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help and support for the Mindful Eating iOS app.',
};

export default function SupportPage() {
  return (
    <LegalPage
      eyebrow="Support"
      title="How can we help?"
      summary="Mindful Eating is intentionally simple and private. These answers cover the most common questions about entries and local storage."
    >
      <section>
        <h2>Contact support</h2>
        <p>Email <a href="mailto:andrew@cantrelldigital.dev?subject=Mindful%20Eating%20Support">andrew@cantrelldigital.dev</a>. Please describe what happened, your iPhone model, iOS version, and app version. Do not email private weight or fullness entries.</p>
      </section>

      <section>
        <h2>Where is my data stored?</h2>
        <p>All profile, weight, meal, and fullness information is stored inside the app’s protected container on your iPhone. There is no Mindful Eating account or server, and your entries are excluded from iCloud and device backups.</p>
      </section>

      <section>
        <h2>How do I delete my data?</h2>
        <p>Open Mindful Eating, go to Settings, select “Erase all app data,” and confirm. You can also remove the app from your iPhone. Either method permanently removes the app’s local records.</p>
      </section>

      <section>
        <h2>Can support restore my entries?</h2>
        <p>No. Cantrell Digital never receives your entries and cannot retrieve deleted data, restore it to another phone, or reset a password. The app has no password or account.</p>
      </section>

      <section>
        <h2>How often should I record weight?</h2>
        <p>The app is designed around an optional weekly weight entry, but you choose whether and when to record it. Mindful Eating does not provide weight targets or medical recommendations.</p>
      </section>

      <section>
        <h2>Is this medical advice?</h2>
        <p>No. Mindful Eating is a personal self-reflection tool. Speak with a qualified healthcare professional if fullness tracking, weight, or eating patterns cause concern or distress.</p>
      </section>

      <section>
        <h2>Privacy and terms</h2>
        <p>Read the <a href="/mindful-eating/privacy">Privacy Policy</a> and <a href="/mindful-eating/terms">Terms & Wellness Disclaimer</a> for more information.</p>
      </section>
    </LegalPage>
  );
}
