import Link from 'next/link';

export const metadata = {
  title: 'Journal | Awadhya',
  description: 'Read about our stories, craftsmanship, and the inspiration behind our collections.',
};

const posts = [
  {
    id: 1,
    title: 'The Art of Chikankari: Weaving Stories in Thread',
    excerpt: 'Explore the history of Lucknow\'s most famous embroidery style and how it inspires our jewelry designs.',
    date: 'August 1, 2026',
    category: 'Craftsmanship'
  },
  {
    id: 2,
    title: 'Why We Chose "Awadhya" as Our Name',
    excerpt: 'The word translates to "unconquerable". Here\'s why that spirit defines every piece we create.',
    date: 'July 15, 2026',
    category: 'Brand Story'
  },
  {
    id: 3,
    title: 'Styling the Kavach Collection for Everyday Wear',
    excerpt: 'Bold armor-inspired pieces don\'t have to be saved for special occasions. Here\'s how to wear them daily.',
    date: 'June 28, 2026',
    category: 'Style Guide'
  }
];

export default function JournalPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
      <h1 className="font-display text-4xl md:text-5xl text-[var(--text-primary)] mb-12 text-center">The Journal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <article key={post.id} className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
            <span className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider mb-2">{post.category}</span>
            <h2 className="font-display text-2xl text-[var(--text-primary)] mb-3">{post.title}</h2>
            <p className="font-body text-[var(--text-secondary)] mb-6 flex-grow">{post.excerpt}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--border)]">
              <span className="text-sm text-[var(--text-muted)]">{post.date}</span>
              <Link href="#" className="text-sm font-medium text-[var(--accent-primary)] hover:underline">Read More &rarr;</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
