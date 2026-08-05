export const metadata = {
  title: 'Terms & Conditions | Awadhya',
  description: 'Terms of service for using the Awadhya website.',
};

export default function TermsPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-neutral dark:prose-invert">
      <h1 className="font-display text-4xl text-[var(--text-primary)] mb-8">Terms & Conditions</h1>
      
      <div className="space-y-6 font-body text-[var(--text-secondary)]">
        <p>Last updated: August 2026</p>
        
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">1. Introduction</h2>
          <p>Welcome to Awadhya. By accessing our website and purchasing our products, you agree to be bound by these Terms & Conditions.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">2. Products & Pricing</h2>
          <p>All our products are handcrafted, which means slight variations may occur between the product image and the actual item. Prices are subject to change without notice.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">3. Intellectual Property</h2>
          <p>All content on this website, including designs, text, graphics, and logos, is the property of Awadhya and is protected by copyright laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">4. User Conduct</h2>
          <p>You agree not to use our website for any unlawful purpose or in any way that could damage, disable, or impair our servers or networks.</p>
        </section>
      </div>
    </div>
  );
}
