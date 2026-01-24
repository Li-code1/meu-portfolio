import PropTypes from 'prop-types';

export const ProjectCard = ({ title, description, techs, link }) => {
  return (
    <article className="card">
      <h3>{title}</h3>
      <p className="description-text">{description}</p>
      <div className="tech-tags">
        {techs.map((tech) => (
          <span key={`${title}-${tech}`}>{tech}</span> 
        ))}
      </div>
      <button 
        type="button" 
        className="card-button"
        onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
      >
        Acessar Projeto
      </button>
    </article>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string.isRequired,
};