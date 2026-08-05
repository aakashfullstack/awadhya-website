import { HandCoins, ShieldCheck, RefreshCw, Truck } from 'lucide-react';

export default function TrustStrip() {
  const items = [
    {
      icon: HandCoins,
      label: 'Handmade in India',
      sublabel: 'Artisan crafted in Lucknow'
    },
    {
      icon: ShieldCheck,
      label: 'Secure Payments',
      sublabel: 'Razorpay protected'
    },
    {
      icon: RefreshCw,
      label: 'Easy Returns',
      sublabel: '7-day return policy'
    },
    {
      icon: Truck,
      label: 'Free Shipping',
      sublabel: 'On orders above ₹599'
    }
  ];

  return (
    <section className="py-12 bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 text-[var(--accent-primary)] bg-[var(--bg-secondary)] p-4 rounded-full">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-medium text-[var(--text-primary)] mb-1 font-body">
                  {item.label}
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-body">
                  {item.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
