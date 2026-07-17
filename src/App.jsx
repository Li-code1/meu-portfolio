import { useState } from 'react';
import './App.css';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageToggle } from './components/LanguageToggle';
import { translations } from './i18n/translations';
import minhaFoto from './assets/minha-foto.png.jpeg';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

function App() {
  const [language, setLanguage] = useState('pt');
  const t = translations[language];

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <a href="#sobre">{t.nav.sobre}</a>
          <a href="#projetos">{t.nav.projetos}</a>
          <a href="#habilidades">{t.nav.habilidades}</a>
          <a href="#formacao">{t.nav.formacao}</a>
          <a href="#contato">{t.nav.contato}</a>
          <LanguageToggle language={language} onToggle={toggleLanguage} />
        </div>
      </nav>

      <main className="main-content">
        <section id="sobre" className="hero-section">
          <div className="hero-grid">
            <img src={minhaFoto} alt="Liliane Lima" className="profile-img" />
            <div className="hero-text">
              <span className="badge">{t.hero.badge}</span>
              <span className="availability-badge">{t.hero.availability}</span>
              <h1>
                {t.hero.title1}
                <span className="gradient-text">{t.hero.titleGradient}</span>
              </h1>
              <p className="bio-intro">{t.hero.bioIntro}</p>
              <ul className="bio-points">
                {t.hero.bioPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="social-group">
                <a
                  href="/cv-liliane-lima.pdf"
                  download
                  className="btn-social resume"
                >
                  {t.hero.resumeButton}
                </a>
                <a href="https://github.com/Li-code1" target="_blank" rel="noreferrer" className="btn-social github">
                  {t.hero.githubButton}
                </a>
                <a href="https://www.linkedin.com/in/liliane-lima-ti/" target="_blank" rel="noreferrer" className="btn-social linkedin">
                  {t.hero.linkedinButton}
                </a>
              </div>
            </div>
          </div>
        </section>

        <Projects content={t.projects} />

        <section id="habilidades">
          <h2 className="section-title">{t.skills.title}</h2>
          <div className="skills-groups">
            {t.skills.groups.map((group) => (
              <div className="skills-group" key={group.label}>
                <h3 className="skills-group-title">{group.label}</h3>
                <div className="skills-container">
                  {group.items.map((s) => (
                    <div key={s} className="skill-item">{s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Education content={t.education} />

        <section id="contato">
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="contact-wrapper">
            <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input type="text" name="name" placeholder={t.contact.namePlaceholder} required />
              <input type="email" name="email" placeholder={t.contact.emailPlaceholder} required />
              <textarea name="message" placeholder={t.contact.messagePlaceholder} rows="4" required></textarea>
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <button type="submit">{t.contact.submitButton}</button>
            </form>
          </div>
        </section>
      </main>

      <ScrollToTop />
    </div>
  );
}

export default App;
