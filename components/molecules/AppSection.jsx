import PropTypes from 'prop-types';

const AppSection = ({ title, children, noSeparator }) => {
  const getTitleColor = () => {
    const words = title.split(' ');
    if (words.length > 1) {
      const lastWord = words.pop();
      return { first: words.join(' '), last: lastWord };
    }
    return { first: '', last: title };
  };

  const { first, last } = getTitleColor();

  return (
    <section className={`py-16 ${!noSeparator ? 'border-b border-white/10' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        {first && <span className="text-light">{first} </span>}
        <span className="gradient-text">{last}</span>
      </h2>
      {children}
    </section>
  );
};

AppSection.propTypes = {
  title: PropTypes.string,
  noSeparator: PropTypes.bool,
};

AppSection.defaultProps = {
  title: '',
  noSeparator: false,
};

export default AppSection;