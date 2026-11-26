import React from 'react';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="pt-28 pb-16 max-w-3xl mx-auto px-4 sm:px-6 text-left">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="mb-6">Last updated: 26th November, 2026</p>

      <p className="mb-8">
        StarVoniq (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you share when visiting our website or contacting us regarding our services.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <p className="mb-2">
          We may collect personal information that you voluntarily provide when you contact us through our website forms, request a consultation, or communicate with us directly, such as your name, email address, phone or WhatsApp number, service of interest, estimated budget, and project details or messages.
        </p>
        <p>
          We may also collect general technical and usage data, such as browser type, device information, pages visited, and performance metrics, to maintain and improve our website performance.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p>
          We use your information to respond to inquiries, prepare project proposals, deliver and improve our web, software, IoT, AI, security, creative, and branding services, communicate with you, and comply with legal obligations. We do not sell, rent, or trade your personal data to third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures, including access controls, encryption, and infrastructure safeguards, to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>
          Our website may use cookies and similar browser technologies to enhance your browsing experience and support site functionality. You can choose to disable cookies through your browser settings, though this may affect certain features or the functionality of our site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. External Links</h2>
        <p>
          Our website contains links to external websites and services (such as YouTube, LinkedIn, X, Instagram, GitHub, and Google Fonts). We are not responsible for the privacy practices or content of these external sites.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how StarVoniq handles your personal information, please contact us at{' '}
          <a href="mailto:starvoniq@gmail.com" className="underline">
            starvoniq@gmail.com
          </a>{' '}
          or by phone at{' '}
          <a href="tel:+254719688799" className="underline">
            +254719688799
          </a>
          .
        </p>
      </section>

      <section>
        <h2 id="delete-account" className="text-xl font-semibold mb-2 scroll-mt-28">
          <a href="#delete-account" className="hover:underline">
            7. Account and Data Deletion
          </a>
        </h2>
        <p className="mb-2">
          Users of <strong>BiasharaSmart</strong> can request the permanent deletion of their account and associated data at any time. To request deletion, please send an email to{' '}
          <a href="mailto:starvoniq@gmail.com?subject=Delete%20Account" className="underline">
            starvoniq@gmail.com
          </a>{' '}
          from your registered email address with the subject <strong>&ldquo;Delete Account&rdquo;</strong>.
        </p>
        <p>
          Upon verification, we will permanently delete your account profile (name, email address, user ID) and associated shop/POS data within <strong>14 days</strong>. No personal data is retained after deletion is completed.
        </p>
      </section>
    </main>
  );
};
