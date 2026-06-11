import PropTypes from 'prop-types';

const AppSection = ({ title, subtitle, children, noSeparator, id, className }) => {
  const getTitleGradient = () => {
    const words = title.split(' ');
    if (words.length > 1) {
      const lastWord = words.pop();
      return { first: words.join(' '), last: lastWord };
    }
    return { first: '', last: title };
  };

  const { first, last } = getTitleGradient();

  return (
    <section id={id} className={`py-20 ${!noSeparator ? 'border-b border-white/[0.04]' : ''} ${className || ''}`}>
      <div className="text-center mb-14">
        <div className="inline-block">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {first && <span className="text-light">{first} </span>}
            <span className="gradient-text">{last}</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary via-secondary to-accent rounded-full mx-auto mt-4" />
        </div>
        {subtitle && (
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {children}
    </section>
  );
};

AppSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  noSeparator: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

AppSection.defaultProps = {
  title: '',
  subtitle: '',
  noSeparator: false,
  id: '',
  className: '',
};

export default AppSection;
