import type { Metadata } from 'next';
import LegalPage from '../components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms & Wellness Disclaimer',
  description: 'Terms and wellness disclaimer for the Mindful Eating iOS app.',
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      title="Terms & Wellness Disclaimer"
      summary="Mindful Eating supports personal reflection. It is not a medical service and should not replace care from a qualified professional."
    >
      <section>
        <h2>Agreement</h2>
        <p>By downloading or using Mindful Eating, you agree to these supplemental terms and Apple’s applicable standard end-user license agreement. If you do not agree, do not use the app.</p>
      </section>

      <section>
        <h2>Wellness tool, not medical advice</h2>
        <p>Mindful Eating is intended only for personal journaling, awareness, and general wellness. It does not provide medical, nutritional, mental-health, or other professional advice. It is not intended to diagnose, prevent, monitor, or treat any disease, eating disorder, or health condition.</p>
        <p>Do not disregard or delay professional advice because of information shown in the app. Contact a qualified healthcare professional with questions about weight, eating patterns, fullness cues, or your health. If you believe you may be experiencing an emergency, contact local emergency services.</p>
      </section>

      <section>
        <h2>Your entries and decisions</h2>
        <p>You are responsible for the entries you record and for how you interpret or use them. Graphs, averages, high and low values, and other statistics are mathematical summaries of your entries; they are not clinical measurements or recommendations.</p>
      </section>

      <section>
        <h2>Local data and data loss</h2>
        <p>Your entries are stored locally and are not available to Cantrell Digital. The data store is excluded from backups, so deleting the app, erasing its data, losing the device, or certain device failures may permanently remove your entries. Cantrell Digital cannot recover them.</p>
      </section>

      <section>
        <h2>Optional support</h2>
        <p>You may be offered an optional link to support development through Buy Me a Coffee. Support is voluntary, is not a charitable or tax-deductible donation, and does not purchase or unlock app features, content, recognition, or services.</p>
        <p>Buy Me a Coffee and its payment processor handle the transaction under their own terms and policies. Payment or refund questions should be directed to Buy Me a Coffee. Cantrell Digital does not connect support transactions to your private Mindful Eating entries.</p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You may use Mindful Eating for personal, lawful purposes. You may not attempt to disrupt the app, reverse engineer it except where applicable law permits, or use it in a way that infringes another person’s rights.</p>
      </section>

      <section>
        <h2>Availability and changes</h2>
        <p>The app may be updated, changed, suspended, or discontinued. We aim to keep it accurate and available but do not promise uninterrupted or error-free operation.</p>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>To the extent permitted by law, Mindful Eating is provided “as is” and “as available,” without warranties beyond those that cannot legally be excluded. Nothing in these terms limits rights or remedies that applicable law does not allow us to limit.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to <a href="mailto:andrew@cantrelldigital.dev">andrew@cantrelldigital.dev</a>.</p>
      </section>
    </LegalPage>
  );
}
