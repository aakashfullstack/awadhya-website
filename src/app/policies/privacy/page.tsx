export const metadata = {
  title: 'Privacy Policy | Awadhya',
  description: 'How we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-neutral dark:prose-invert">
      <h1 className="font-display text-4xl text-[var(--text-primary)] mb-8">Privacy Policy</h1>
      
      <div className="space-y-6 font-body text-[var(--text-secondary)]">
        <p>Last updated: August 2026</p>
        
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create an account, place an order, or subscribe to our newsletter. This includes your name, email address, shipping address, and payment information.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">2. How We Use Your Information</h2>
          <p>We use the information we collect to process your orders, communicate with you about your orders and our products, and improve our website and services.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">3. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information. Your payment information is securely processed by our payment partners and is not stored on our servers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">4. Cookies</h2>
          <p>We use cookies to improve your browsing experience, remember your preferences, and understand how you interact with our website.</p>
        </section>
      </div>
    </div>
  );
}
