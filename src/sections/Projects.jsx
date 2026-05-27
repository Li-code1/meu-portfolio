import { ProjectCard } from '../components/ProjectCard';

const meusProjetos = [
  { 
    title: "SmartFinance | Consumer Insight Intelligence", 
    description: "Plataforma de inteligência financeira desenvolvida para transformar a gestão de gastos pessoais em uma experiência analítica e estratégica, auxiliando usuários a identificar padrões de consumo e estabelecer metas de economia inteligentes. Para testar, use o e-mail: admin@admin.com e senha: 123",
    techs: ["Recharts", "html2canvas", "JavaScript", "jsPDF", "Context API", ' Lucide React'], 
    link: "https://smart-finance-teal-six.vercel.app/",
    githubLink: "https://github.com/Li-code1/smart-finance.git"
  },
  { 
    title: "🐾 Pet&Style", 
    description: "E-commerce fictício focado em UI moderna para produtos pet.", 
    techs: ["HTML5", "Tailwind CSS", "JavaScript"], 
    link: "https://li-code1.github.io/petstyle-loja-virtual/",
    githubLink: "https://github.com/Li-code1/petstyle-loja-virtual"
  },
  { 
    title: "SmartMart Pro", 
    description: "Dashboard Full Stack para monitoramento de vendas e análise de lucros.", 
    techs: ["React", "FastAPI", "Python"], 
    link: "https://drive.google.com/file/d/19wNRsY1oGGSxFcqjQPVsw5kI16BupTla/view?usp=drive_link", 
    githubLink: "https://github.com/Li-code1/desafio-smartmart.git"
  },
];

export function Projects() {
  return (
    <section id="projetos">
      <h2 className="section-title">Projetos em Destaque</h2>
      <div className="projects-grid">
        {meusProjetos.map((proj) => (
          <ProjectCard key={proj.title} {...proj} />
        ))}
      </div>
    </section>
  );
}