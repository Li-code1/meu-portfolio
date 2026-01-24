import { ProjectCard } from '../components/ProjectCard';

const meusProjetos = [
  { 
    title: "Calculadora de Gastos Mensais", 
    description: "Aplicação intuitiva para controle financeiro com gráficos interativos e exportação em PDF.", 
    techs: ["Chart.js","JavaScript","jsPDF"], 
    link: "https://li-code1.github.io/CalculadoraDeGastosMensais/" 
  },
  { 
    title: "🐾 Pet&Style", 
    description: "E-commerce fictício focado em UI moderna para produtos pet.", 
    techs: ["HTML5", "Tailwind CSS", "JavaScript"], 
    link: "https://li-code1.github.io/petstyle-loja-virtual/" 
  },
  { 
    title: "SmartMart Pro", 
    description: "Dashboard Full Stack para monitoramento de vendas e análise de lucros.", 
    techs: ["React", "FastAPI", "Python"], 
    link: "https://drive.google.com/file/d/19wNRsY1oGGSxFcqjQPVsw5kI16BupTla/view?usp=drive_link" 
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