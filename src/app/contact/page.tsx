export const metadata = {
  title: 'Contact Us | Awadhya',
  description: 'Get in touch with the Awadhya team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-6 text-center">Contact Us</h1>
      <p className="font-body text-[var(--text-secondary)] text-center mb-12">
        Have a question about a collection, a custom order, or just want to say hello? 
        Drop us a message and we'll get back to you soon.
      </p>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block font-body text-sm text-[var(--text-secondary)] mb-2">Name</label>
            <input type="text" id="name" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block font-body text-sm text-[var(--text-secondary)] mb-2">Email</label>
            <input type="email" id="email" className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" placeholder="Your email" />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block font-body text-sm text-[var(--text-secondary)] mb-2">Message</label>
          <textarea id="message" rows={6} className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-primary)]" placeholder="How can we help you?"></textarea>
        </div>
        <button type="submit" className="w-full bg-[var(--accent-primary)] text-[var(--bg-primary)] py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
          Send Message
        </button>
      </form>
    </div>
  );
}
