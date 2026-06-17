import Link from "next/link";
import DATA from "../../data/user.json";
import AppContainer from "../atomics/AppContainer";
import AppButton from "../atomics/AppButton";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";
import { useEffect, useRef, useState } from "react";

const statsData = [
  { value: 15, suffix: '+', key: 'hero.statsProjects' },
  { value: 4, suffix: '+', key: 'hero.statsExperience' },
  { value: 20, suffix: '+', key: 'hero.statsClients' },
  { value: 6, suffix: '+', key: 'hero.statsTechnologies' },
];

const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const step = Math.ceil(value / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="text-3xl lg:text-4xl font-bold text-light tabular-nums">
      {count}{suffix}
    </span>
  );
};

const AppHero = () => {
  const { t, isRTL } = useLanguage();

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = '/projects';
      }
    }
  };

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <AppContainer>
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-28 lg:pt-32 ${isRTL ? 'lg:grid-cols-reverse' : ''}`}>
          <div className={`text-center lg:text-left animate-fade-in-lg ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 shadow-lg shadow-primary/5">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-light/80 font-medium">{t('hero.available')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
              <span className="text-light/90">{t('hero.need')} </span>
              <br className="hidden sm:block" />
              <span className="shimmer-text">{t('hero.solution')}</span>
              <span className="text-light/90">?</span>
            </h1>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-muted mb-6">
              {t('hero.tagline')}
            </h2>

            <p className="text-muted text-base lg:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            <div className={`flex flex-wrap gap-3 justify-center items-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <AppButton
                title={t('hero.getQuote')}
                href="/contact"
                variant="gold"
                icon="fas fa-bolt"
                className="!mt-0 shadow-lg shadow-accent/20 hover:shadow-accent/40"
              />
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-light font-medium hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 !mt-0"
              >
                <i className="fas fa-folder-open text-primary/70 text-sm" />
                {t('hero.viewWork')}
              </a>
              <a
                href="/images/cv.pdf"
                download="Idir_Lahcen_CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-muted font-medium hover:border-primary/30 hover:text-primary hover:bg-primary/5 transition-all duration-300 !mt-0"
              >
                <i className="fas fa-download text-xs" />
                {t('hero.resume')}
              </a>
            </div>

            <div className={`flex items-center gap-5 mt-10 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <a href="https://github.com/idir2023" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-surface/60 border border-white/10 flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <i className="fab fa-github text-lg" />
              </a>
              <a href="https://www.linkedin.com/in/lahcen-i-99270b309/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-surface/60 border border-white/10 flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <i className="fab fa-linkedin-in text-lg" />
              </a>
              <a href="https://wa.me/+212681736149" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-surface/60 border border-white/10 flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <i className="fab fa-whatsapp text-lg" />
              </a>
              <a href="https://www.instagram.com/idir_lh/" target="_blank" rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-surface/60 border border-white/10 flex items-center justify-center text-light/60 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1">
                <i className="fab fa-instagram text-lg" />
              </a>
              <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/10">
                <span className="text-xs text-muted">{t('hero.follow')}</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center animate-fade-in-lg" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-3xl opacity-20 animate-pulse-slow" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl animate-pulse-slow" style={{ animationDuration: '6s' }} />

              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-[3px] shadow-2xl shadow-primary/30">
                  <div className="w-full h-full rounded-full bg-dark overflow-hidden">
                    <Image
                      src={DATA.image}
                      alt={DATA.name}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-3 -right-3 px-4 py-2 rounded-2xl glass-premium animate-float shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-semibold text-light">{t('hero.availableFor')}</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 px-4 py-2 rounded-2xl glass-premium animate-float shadow-xl" style={{ animationDelay: '-2.5s' }}>
                <div className="flex items-center gap-2">
                  <i className="fas fa-star text-accent text-sm" />
                  <span className="text-sm font-semibold text-light">{t('hero.topRated')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-20 py-8 border-t border-white/[0.04]">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted text-sm mt-1 font-medium">{t(stat.key)}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
            <div className="w-1 h-2 rounded-full bg-gradient-to-b from-primary to-secondary animate-pulse" />
          </div>
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHero;
