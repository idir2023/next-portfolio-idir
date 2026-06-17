import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const AppHeader = ({ title = 'AppHeader Title', description = 'AppHeader description', badge = '' }) => {
  const { isRTL } = useLanguage();

  const getTitleColor = () => {
    if (!title || title.length === 0) return { first: '', rest: '' };
    const first = title.charAt(0);
    const rest = title.slice(1);
    return { first, rest };
  };

  const { first, rest } = getTitleColor();

  return (
    <div className="text-center pt-36 lg:pt-44 pb-16">
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium mb-5">
          <i className="fas fa-sparkles text-xs" />
          {badge}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
        <span className="gradient-text">{first}</span>
        <span className="text-light">{rest}</span>
      </h1>
      <div className="h-[2px] w-16 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
      <p className={`text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${isRTL ? 'rtl:text-right' : ''}`}>
        {description}
      </p>
    </div>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  badge: PropTypes.string,
};

export default AppHeader;
