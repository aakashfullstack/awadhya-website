export const metadata = {
  title: 'Track Order | Awadhya',
  description: 'Track the status of your Awadhya order.',
};

export default function TrackOrderPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-6 text-center">Track Your Order</h1>
      <p className="font-body text-[var(--text-secondary)] text-center mb-12">
        Enter your order number and email address below to see the current status of your shipment.
      </p>

      <form className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-8 shadow-sm space-y-6">
        <div>
          <label htmlFor="orderId" className="block font-body text-sm font-medium text-[var(--text-primary)] mb-2">Order Number</label>
          <input type="text" id="orderId" className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" placeholder="e.g. AWD-12345" />
        </div>
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-[var(--text-primary)] mb-2">Email Address</label>
          <input type="email" id="email" className="w-full bg-[var(--bg-primary)] border border-[var(--border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" placeholder="Email used at checkout" />
        </div>
        
        <button type="button" className="w-full bg-[var(--text-primary)] text-[var(--bg-primary)] py-4 rounded-full font-medium hover:opacity-90 transition-opacity mt-4">
          Track Order
        </button>
      </form>
    </div>
  );
}
