import Image from 'next/image';
import Link from 'next/link';
import AppShell from '../components/templates/AppShell';
import AppHeader from '../components/organisms/AppHeader';
import USER from '../data/user.json';
import { useLanguage } from '../context/LanguageContext';

const servicesIcons = [
  '/images/service-website.svg',
  '/images/service-webapps.svg',
  '/images/service-rwd.svg',
  '/images/service-performance.svg',
  '/images/service-performance.svg',
  '/images/service-webapps.svg',
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <AppShell
      title={`Idir Lahcen | ${t('services_page.title')}`}
      description={t('services_page.description')}
      keyword="services, laravel development, php development, web development, REST API, SaaS, ERP"
    >
      <AppHeader
        title={t('services_page.title')}
        description={t('services_page.description')}
        badge={t('services_page.badge')}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {USER.services.map((item, index) => (
          <div
            key={item.id}
            className="glass-premium rounded-2xl p-8 animate-slide-up group hover:border-primary/30 transition-all duration-500"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5 shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-300">
              <Image src={servicesIcons[index] || '/images/service-webapps.svg'} alt={t(`services.${index}.name`)} width={34} height={34} />
            </div>
            <h3 className="text-xl font-semibold text-light mb-3 group-hover:text-primary transition-colors">
              {t(`services.${index}.name`)}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-5">
              {t(`services.${index}.desc`)}
            </p>
            <ul className="space-y-2.5">
              {item.features.slice(0, 5).map((feature, fi) => (
                <li key={fi} className="flex items-center gap-2 text-xs text-muted">
                  <i className="fas fa-check-circle text-primary text-xs flex-shrink-0" />
                  <span>{t(`services.${index}.features.${fi}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full btn-gold text-dark font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40"
        >
          <i className="fas fa-paper-plane text-xs" />
          {t('services_page.cta')}
        </Link>
      </div>
    </AppShell>
  );
};

export default Services;
