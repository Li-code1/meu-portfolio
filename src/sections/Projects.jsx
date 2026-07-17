import PropTypes from 'prop-types';
import { ProjectCard } from '../components/ProjectCard';

// Metadados técnicos que não mudam com o idioma
const projectsMeta = [
  {
    techs: ["Recharts", "html2canvas", "JavaScript", "jsPDF", "Context API", "Lucide React"],
    link: "https://smart-finance-teal-six.vercel.app/",
    githubLink: "https://github.com/Li-code1/smart-finance.git",
  },
  {
    techs: ["HTML5", "Tailwind CSS", "JavaScript"],
    link: "https://li-code1.github.io/petstyle-loja-virtual/",
    githubLink: "https://github.com/Li-code1/petstyle-loja-virtual",
  },
  {
    techs: ["Next.js 14", "CSS Modules", "React"],
    link: "https://portal-viagens-mocha.vercel.app/",
    githubLink: "https://github.com/Li-code1/portal-viagens.git",
  },
  {
    techs: ["React", "FastAPI", "Python"],
    link: "https://drive.google.com/file/d/19wNRsY1oGGSxFcqjQPVsw5kI16BupTla/view?usp=drive_link",
    githubLink: "https://github.com/Li-code1/desafio-smartmart.git",
  },
  {
    techs: ["FastAPI", "Python", "Redis", "Celery", "SQLite", "Pytest", "Docker", "GitHub Actions"],
    link: "https://pokefast-api-ebac.onrender.com/docs",
    githubLink: "https://github.com/Li-code1/pokefast-api.git",
  },
];

export function Projects({ content }) {
  return (
    <section id="projetos">
      <h2 className="section-title">{content.title}</h2>
      <div className="projects-grid">
        {content.items.map((proj, index) => (
          <ProjectCard
            key={proj.title}
            title={proj.title}
            description={proj.description}
            demoCredentials={proj.demoCredentials}
            demoCredentialsLabel={content.demoCredentialsLabel}
            accessButtonLabel={content.accessButton}
            {...projectsMeta[index]}
          />
        ))}
      </div>
    </section>
  );
}

Projects.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    accessButton: PropTypes.string.isRequired,
    demoCredentialsLabel: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        demoCredentials: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};
