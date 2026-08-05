'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function NewsletterCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Backend integration would go here
    }
  };

  return (
    <section className="bg-[var(--bg-secondary)] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl text-[var(--text-primary)] mb-3">
            Stay in the loop
          </h2>
          <p className="font-body text-[var(--text-secondary)] mb-8">
            New drops, festival collections, and stories — straight to your inbox.
          </p>
          
          {isSubmitted ? (
            <div className="bg-[var(--bg-primary)] p-6 rounded-2xl border border-[var(--border)] flex flex-col items-center animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-12 h-12 text-[var(--rating)] mb-3" />
              <h3 className="font-display text-xl text-[var(--text-primary)] mb-1">Thank you!</h3>
              <p className="font-body text-sm text-[var(--text-secondary)]">
                You've successfully joined our community.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full mb-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com" 
                required
                className="flex-grow bg-[var(--bg-primary)] border border-[var(--border)] sm:rounded-r-none rounded-full sm:rounded-l-full px-6 py-3 font-body text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors w-full"
              />
              <button 
                type="submit" 
                className="bg-[var(--accent-primary)] text-[var(--bg-primary)] sm:rounded-l-none rounded-full sm:rounded-r-full px-6 py-3 font-semibold hover:bg-[var(--accent-primary-hover)] transition-colors whitespace-nowrap w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          )}
          
          <div className="mt-6 text-sm text-[var(--text-secondary)]">
            <span>Or </span>
            <a 
              href="https://wa.me/91XXXXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#25D366] hover:underline font-medium inline-flex items-center gap-1"
            >
              DM us on WhatsApp
            </a>
            <span> for updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
