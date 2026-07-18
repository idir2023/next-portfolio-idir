import Link from 'next/link';
import AppShell from '../components/templates/AppShell';
import AppHeader from '../components/organisms/AppHeader';
import AppSection from '../components/molecules/AppSection';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const articles = USER.blog || [];

  const categories = [...new Set(articles.map((a) => a.category))];

  return (
    <AppShell
      title={`Idir Lahcen | ${t('blog.title')}`}
      description={t('blog.description')}
      keyword="blog, laravel, php, web development, technical articles"
    >
      <AppHeader
        title={t('blog.title')}
        description={t('blog.description')}
        badge={t('blog.badge')}
      />
      <div className="mb-10">
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <span key={cat} className="px-4 py-2 rounded-full bg-surface/30 border border-white/10 text-xs font-medium text-muted">
              {cat}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="glass-premium rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-medium">
                    {article.category}
                  </span>
                  <span className="text-[11px] text-muted/50">{article.readTime} {t('blog.readTime')}</span>
                </div>
                <h3 className="text-lg font-semibold text-light mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted/70 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-surface/50 text-muted/60 border border-white/5">
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-xs text-muted/50">{article.date}</span>
                  <span className="text-xs text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t('blog.readMore')} <i className="fas fa-arrow-right text-[10px]" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default Blog;
