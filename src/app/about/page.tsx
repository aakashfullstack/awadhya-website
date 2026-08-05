import Image from 'next/image';

export const metadata = {
  title: 'About Awadhya | Our Story',
  description: 'The story behind Awadhya, our Lucknow heritage, and handcrafted ornaments.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-6xl text-[var(--text-primary)] mb-8 text-center">Our Story</h1>
      
      <div className="space-y-8 font-body text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        <p>
          Awadhya was born in the heart of Lucknow, a city where art, culture, and craftsmanship breathe in every corner. 
          The word "Awadhya" in Sanskrit translates to "unconquerable" or "one who cannot be broken." 
          It perfectly encapsulates the spirit of the people we design for — resilient, unapologetic, and true to themselves.
        </p>
        
        <div className="bg-[var(--bg-elevated)] p-8 rounded-2xl border border-[var(--border)] my-12 relative overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          <div className="absolute inset-0 chikankari-overlay opacity-10 pointer-events-none" />
          <div className="relative z-10 md:w-1/2">
            <h2 className="font-display text-2xl text-[var(--text-primary)] mb-4">A Mother's Craft</h2>
            <p>
              What started as our founder, Sunaina Devi, hand-making rakhis and festive ornaments for family and friends 
              soon blossomed into something much larger. We realized that jewelry shouldn't just be an accessory; 
              it should be an extension of your identity, a reminder of your strength, and a celebration of your bonds.
            </p>
          </div>
          <div className="relative z-10 md:w-1/2 w-full">
            <div className="relative aspect-video md:aspect-square w-full rounded-xl overflow-hidden border border-[var(--border)] shadow-md">
              <Image 
                src="/founder-crafting.jpg" 
                alt="Founder hand-making intricate ornaments"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <p>
          Every piece in our collection — whether it's a statement ear cuff from our Ruchi line, a protective 
          motif from Kavach, or a sacred thread for Rakshabandhan — is handcrafted with intent. 
        </p>

        <p className="text-center text-xl md:text-2xl font-display text-[var(--accent-primary)] pt-8">
          Stand for something. Wear it.
        </p>
      </div>
    </div>
  );
}
