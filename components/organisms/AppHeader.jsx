import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';

const AppHeader = ({ title, description }) => {
  const { isRTL } = useLanguage();

  const getTitleColor = () => {
    if (!title || title.length === 0) return { first: '', last: '' };
    const first = title.charAt(0);
    const rest = title.slice(1);
    return { first, rest };
  };

  const { first, rest } = getTitleColor();

  return (
    <div className="text-center py-16">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
        <span className="gradient-text">{first}</span>
        <span className="text-light">{rest}</span>
      </h1>
      <p className={`text-muted text-lg max-w-2xl mx-auto leading-relaxed ${isRTL ? 'rtl:text-right' : ''}`}>
        {description}
      </p>
    </div>
  );
};

AppHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

AppHeader.defaultProps = {
  title: 'AppHeader Title',
  description: 'AppHeader description',
};

export default AppHeader;