import Link from "next/link";
import DATA from "../../data/user.json";
import AppContainer from "../atomics/AppContainer";
import AppButton from "../atomics/AppButton";
import Image from "next/image";
import { useLanguage } from "../../context/LanguageContext";

const AppHero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      <AppContainer>
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-20 ${isRTL ? 'lg:grid-cols-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`text-center lg:text-left animate-slide-up ${isRTL ? 'lg:text-right' : 'lg:text-left'} hero-content`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm text-light">{t('home.hiIm')}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4">
              <span className="text-light">{DATA.name.split(' ')[0]}</span>
              <br />
              <span className="gradient-text">{DATA.name.split(' ')[1]}</span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#94A3B8] mb-6">
              [{t('home.status')}]
            </h2>

            <p className="text-[#94A3B8] text-base lg:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              {t('home.description')}
            </p>

            <div className={`flex flex-wrap gap-4 justify-center items-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <AppButton
                title={t('home.resume')}
                href="/images/cv.pdf"
                download="cv.pdf"
                className="!mt-0"
              />
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-light font-medium hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <i className="fas fa-folder-open text-primary text-sm group-hover:scale-110 transition-transform duration-300" />
                {t('home.projectsCompleted')}
                <i className="fas fa-arrow-right text-xs opacity-60 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Social Links */}
            <div className={`flex items-center gap-4 mt-12 justify-center ${isRTL ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <a
                href="https://github.com/idir2023"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-light hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/lahcen-idir-99270b309/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-light hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                href="https://wa.me/+212681736149"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-light hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <i className="fab fa-whatsapp" />
              </a>
              <a
                href="https://www.instagram.com/idir_lh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center text-light hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent blur-2xl opacity-30 animate-pulse" style={{ animationDuration: '4s' }} />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-[#0F172A] overflow-hidden">
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

              {/* Floating badges */}
              <div className={`absolute -top-4 ${isRTL ? 'left-4 right-auto' : 'right-4'} px-4 py-2 rounded-full glass animate-float`}>
                <span className="text-sm font-medium text-light">Next.js</span>
              </div>
              <div className={`absolute -bottom-4 ${isRTL ? 'right-4 left-auto' : 'left-4'} px-4 py-2 rounded-full glass animate-float`} style={{ animationDelay: '-2s' }}>
                <span className="text-sm font-medium text-light">React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </AppContainer>
    </header>
  );
};

export default AppHero;