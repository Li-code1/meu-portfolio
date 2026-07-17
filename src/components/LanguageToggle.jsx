import PropTypes from 'prop-types';

export function LanguageToggle({ language, onToggle }) {
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={onToggle}
      aria-label="Alternar idioma / Switch language"
    >
      <span className={language === 'pt' ? 'lang-active' : ''}>PT</span>
      <span className="lang-divider">/</span>
      <span className={language === 'en' ? 'lang-active' : ''}>EN</span>
    </button>
  );
}

LanguageToggle.propTypes = {
  language: PropTypes.oneOf(['pt', 'en']).isRequired,
  onToggle: PropTypes.func.isRequired,
};
