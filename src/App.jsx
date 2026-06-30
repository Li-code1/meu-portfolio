import './App.css';
import { Projects } from './sections/Projects';
import { ScrollToTop } from './components/ScrollToTop';
import minhaFoto from './assets/minha-foto.png.jpeg';

function App() {
  const habilidades = [
    "Python", 
    "FastAPI", 
    "React.js", 
    "JavaScript", 
    "HTML5", 
    "CSS3", 
    "SASS", 
    "Tailwind CSS", 
    "Next.js", 
    "Docker", 
    "Kubernetes", 
    "Redis", 
    "Pytest", 
    "ELK Stack", 
    "Git / GitHub", 
    "Metodologias Ágeis"
  ];

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <a href="#sobre">Sobre Mim</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <main className="main-content">
        <section id="sobre" className="hero-section">
          <div className="hero-grid">
            <img src={minhaFoto} alt="Li-code1" className="profile-img" />
            <div className="hero-text">
              <span className="badge">Liliane Lima - Full Stack Developer</span>
              <h1>Codificando <span className="gradient-text">experiências</span></h1>
              <p>Desenvolvedora em transição de carreira com sólida bagagem administrativa e foco atual em tecnologias Full Stack.
Atualmente graduanda em Análise e Desenvolvimento de Sistemas, possuo pós-graduação em Liderança e Trabalho em Equipe, o que me confere uma visão diferenciada sobre processos, prazos e colaboração em times de alta performance. Minha trajetória na área administrativa e bancária me permitiu desenvolver uma comunicação assertiva e um olhar crítico voltado para a resolução de problemas reais de negócio.</p>
              <div className="social-group">
                <a href="https://github.com/Li-code1" target="_blank" rel="noreferrer" className="btn-social github">GitHub</a>
                <a href="https://www.linkedin.com/in/liliane-lima-ti/" target="_blank" rel="noreferrer" className="btn-social linkedin">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section id="habilidades">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-container">
            {habilidades.map(s => <div key={s} className="skill-item">{s}</div>)}
          </div>
        </section>

        <section id="contato">
          <h2 className="section-title">Vamos conversar?</h2>
          <div className="contact-wrapper">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value="70ce1932-823e-418a-984e-3c088afa0b44" />
              <input type="text" name="name" placeholder="Seu Nome" required />
              <input type="email" name="email" placeholder="Seu E-mail" required />
              <textarea name="message" placeholder="Sua Mensagem" rows="4" required></textarea>
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <button type="submit">Enviar Mensagem</button>
            </form>
          </div>
        </section>
      </main>

      {/* Botão flutuante adicionado aqui */}
      <ScrollToTop />
    </div>
  );
}

export default App;
