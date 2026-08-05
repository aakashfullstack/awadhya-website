import Link from 'next/link';
import Image from 'next/image';

export default function OurStoryStrip() {
  return (
    <section className="bg-[var(--bg-secondary)] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div className="aspect-square lg:aspect-[4/5] bg-[var(--bg-elevated)] rounded-2xl border border-[var(--border)] flex flex-col items-center justify-center text-[var(--text-muted)] relative overflow-hidden group">
              <Image 
                src="/founder-portrait.jpg" 
                alt="Awadhya Founder crafting a piece"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-w-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 max-w-xl">
            <p className="text-sm uppercase tracking-widest text-[var(--accent-primary)] mb-4 font-semibold">
              Our Story
            </p>
            <h2 className="font-display text-2xl lg:text-3xl text-[var(--text-primary)] mb-6 leading-tight">
              Born from a mother's craft. Rooted in Lucknow. Made to last.
            </h2>
            <div className="font-body text-[var(--text-secondary)] space-y-4 mb-8">
              <p>
                For decades, our founder, Sunaina Devi, sat by the window in our Lucknow home, threading beads and weaving love into handmade rakhis and delicate jewelry for our family. Her hands moved with a quiet grace, preserving techniques passed down through generations.
              </p>
              <p>
                Awadhya was born from a desire to share her craft with the world. We partner directly with women artisans across Lucknow, ensuring fair wages and preserving traditional Indian craftsmanship in every modern piece we create.
              </p>
              <p>
                This isn't just jewelry. It's a piece of our heritage, crafted to become part of yours.
              </p>
            </div>
            <Link 
              href="/about" 
              className="inline-block text-[var(--accent-primary)] font-medium hover:underline font-body"
            >
              Read Our Full Story &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
