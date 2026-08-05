export const metadata = {
  title: 'Shipping Policy | Awadhya',
  description: 'Information about Awadhya shipping, delivery times, and costs.',
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-neutral dark:prose-invert">
      <h1 className="font-display text-4xl text-[var(--text-primary)] mb-8">Shipping Policy</h1>
      
      <div className="space-y-6 font-body text-[var(--text-secondary)]">
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Processing Time</h2>
          <p>All our jewelry is handcrafted. Orders are typically processed and dispatched within 2-3 business days. During festival seasons, please allow up to 5 business days for processing.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Shipping Rates</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Standard Shipping:</strong> Flat ₹49 for all orders below ₹599.</li>
            <li><strong>Free Shipping:</strong> Available on all prepaid and COD orders above ₹599.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Delivery Time</h2>
          <p>Once dispatched, standard delivery takes 3-7 business days depending on your location within India. Metro cities usually receive orders within 3-4 days.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Cash on Delivery (COD)</h2>
          <p>Cash on Delivery is available across most pin codes in India. A nominal convenience fee may apply to COD orders, which will be calculated at checkout.</p>
        </section>
      </div>
    </div>
  );
}
