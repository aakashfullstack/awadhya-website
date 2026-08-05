export const metadata = {
  title: 'Returns & Refunds | Awadhya',
  description: 'Our policy on returns, exchanges, and refunds.',
};

export default function ReturnsPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24 prose prose-neutral dark:prose-invert">
      <h1 className="font-display text-4xl text-[var(--text-primary)] mb-8">Returns & Refunds</h1>
      
      <div className="space-y-6 font-body text-[var(--text-secondary)]">
        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">7-Day Return Policy</h2>
          <p>We accept returns within 7 days of delivery. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Non-Returnable Items</h2>
          <p>For hygiene reasons, earrings and nose pins cannot be returned or exchanged unless they arrive damaged or defective. Customized pieces are also non-returnable.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Process for Returns</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Contact our support team at returns@awadhya.com with your order number.</li>
            <li>Once approved, we will arrange a reverse pickup (a ₹100 reverse pickup fee applies).</li>
            <li>Upon receiving and inspecting the item, we will process your refund within 5-7 business days.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[var(--text-primary)] mb-2">Refunds</h2>
          <p>For prepaid orders, refunds will be credited to the original payment method. For COD orders, a payout link will be sent to your registered email/phone number.</p>
        </section>
      </div>
    </div>
  );
}
