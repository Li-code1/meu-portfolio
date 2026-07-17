export const translations = {
  pt: {
    nav: {
      sobre: "Sobre Mim",
      projetos: "Projetos",
      habilidades: "Habilidades",
      formacao: "Formação",
      contato: "Contato",
    },
    hero: {
      badge: "Liliane Lima · Full Stack Developer",
      availability: "🟢 Aberta a oportunidades — Full Stack Jr",
      title1: "Codificando ",
      titleGradient: "experiências",
      bioIntro:
        "Desenvolvedora Full Stack em transição de carreira, unindo 7 anos de vivência em ambiente bancário a uma base sólida em desenvolvimento web moderno.",
      bioPoints: [
        "🎓 Cursando Análise e Desenvolvimento de Sistemas (Faculdade Imes)",
        "🐍 Full Stack Python — EBAC",
        "💼 7 anos em atendimento bancário no Itaú Unibanco, com pós-graduação em Liderança e Trabalho em Equipe",
        "🎯 Foco em vagas de Full Stack, Front-end ou Back-end Jr",
      ],
      resumeButton: "Baixar Currículo",
      githubButton: "GitHub",
      linkedinButton: "LinkedIn",
    },
    projects: {
      title: "Projetos em Destaque",
      accessButton: "Acessar Projeto",
      demoCredentialsLabel: "Credenciais de teste:",
      items: [
        {
          title: "SmartFinance | Consumer Insight Intelligence",
          description:
            "Dashboard de finanças pessoais com visualização de dados em tempo real. Implementei geração de relatórios em PDF (jsPDF + html2canvas) e gráficos interativos com Recharts para transformar transações brutas em insights sobre padrões de consumo. Estado global gerenciado via Context API.",
          demoCredentials: "admin@admin.com / 123",
        },
        {
          title: "🐾 Pet&Style",
          description:
            "E-commerce fictício de produtos pet construído para treinar fundamentos sólidos: HTML semântico, grid responsivo com Tailwind CSS, componentização de cards de produto e microinterações — sem dependência de frameworks JS além de vanilla.",
          demoCredentials: null,
        },
        {
          title: "✈️ Portal de Viagens",
          description:
            "Portal turístico moderno construído com Next.js 14, aplicando roteamento dinâmico, layouts reutilizáveis e estilização isolada com CSS Modules.",
          demoCredentials: null,
        },
        {
          title: "SmartMart Pro",
          description:
            "Dashboard Full Stack de gestão de vendas e estoque. Back-end em FastAPI expondo endpoints REST para métricas de lucro; front-end em React consumindo a API para renderizar gráficos e tabelas de desempenho.",
          demoCredentials: null,
        },
        {
          title: "PokeFast API",
          description:
            "API RESTful assíncrona e paginada, construída com FastAPI para consumir a PokéAPI original. Endpoints padronizados, cache com Redis, persistência híbrida em SQLite, testes unitários automatizados com cobertura de código, containerização com Docker e pipeline de CI/CD via GitHub Actions.",
          demoCredentials: null,
        },
      ],
    },
    skills: {
      title: "Habilidades",
      groups: [
        {
          label: "Frontend",
          items: [
            "React.js",
            "TypeScript",
            "Next.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "SASS",
            "Bootstrap",
            "Tailwind CSS",
          ],
        },
        {
          label: "Backend",
          items: [
            "Python",
            "FastAPI",
            "ORM com SQLAlchemy",
            "SQLite",
            "Redis",
            "Celery",
            "Pytest",
          ],
        },
        {
          label: "DevOps & Ferramentas",
          items: [
            "Docker",
            "Kubernetes",
            "ELK Stack",
            "Git / GitHub",
            "Scrum",
            "Kanban",
          ],
        },
      ],
    },
    education: {
      title: "Formação & Trajetória",
      items: [
        {
          period: "12/2025 — 06/2026",
          title: "Full Stack Python",
          place: "EBAC — Escola Britânica de Artes Criativas e Tecnologia",
          description: "Formação intensiva em Python, FastAPI, Redis, Celery, bancos de dados relacionais e desenvolvimento back-end.",
        },
        {
          period: "03/2025 — 07/2027 (em andamento)",
          title: "Análise e Desenvolvimento de Sistemas",
          place: "Faculdade Imes (EAD)",
          description: "Graduação em andamento, com foco em arquitetura de software e boas práticas de engenharia.",
        },
        {
          period: "03/2012 — 06/2013",
          title: "Pós-graduação em Liderança e Trabalho em Equipe",
          place: "UNIBR Faculdade de São Vicente",
          description: "Base em gestão de processos, prazos e colaboração em times de alta performance.",
        },
        {
          period: "03/2007 — 12/2011",
          title: "Graduação em Administração de Empresas",
          place: "UNIBR Faculdade de São Vicente",
          description: "Concluída em paralelo à atuação no Itaú Unibanco.",
        },
        {
          period: "08/2007 — 12/2014",
          title: "Caixa Bancário / Atendimento Bancário e Financeiro",
          place: "Itaú Unibanco (Praia Grande/SP)",
          description: "7 anos em atendimento ao cliente e venda de serviços bancários (empréstimos, seguros, cartões, previdência), desenvolvendo comunicação assertiva e resolução de problemas reais de negócio.",
        },
      ],
      complementaryTitle: "Cursos complementares",
      complementary: [
        "Front-End React — EBAC (2026)",
        "Especialização em DevOps e DevSecOps — Programa Hackers do Bem (Softex, SENAI, RNP e Ministério da Ciência) (2026)",
        "Fundamentos de IA Generativa — Dio.me (2025)",
        "Versionamento de Código com Git e GitHub — Dio.me (2025)",
        "Cibersegurança — Dio.me (2025)",
      ],
    },
    contact: {
      title: "Vamos conversar?",
      namePlaceholder: "Seu Nome",
      emailPlaceholder: "Seu E-mail",
      messagePlaceholder: "Sua Mensagem",
      submitButton: "Enviar Mensagem",
    },
  },

  en: {
    nav: {
      sobre: "About",
      projetos: "Projects",
      habilidades: "Skills",
      formacao: "Background",
      contato: "Contact",
    },
    hero: {
      badge: "Liliane Lima · Full Stack Developer",
      availability: "🟢 Open to work — Full Stack Jr",
      title1: "Coding ",
      titleGradient: "experiences",
      bioIntro:
        "Full Stack developer transitioning careers, combining 7 years in banking with a solid foundation in modern web development.",
      bioPoints: [
        "🎓 Studying Systems Analysis and Development (Faculdade Imes)",
        "🐍 Full Stack Python — EBAC",
        "💼 7 years in banking customer service at Itaú Unibanco, plus a postgraduate degree in Leadership and Teamwork",
        "🎯 Targeting Full Stack, Front-end or Back-end Jr roles",
      ],
      resumeButton: "Download Resume",
      githubButton: "GitHub",
      linkedinButton: "LinkedIn",
    },
    projects: {
      title: "Featured Projects",
      accessButton: "View Project",
      demoCredentialsLabel: "Demo credentials:",
      items: [
        {
          title: "SmartFinance | Consumer Insight Intelligence",
          description:
            "Personal finance dashboard with real-time data visualization. Built PDF report generation (jsPDF + html2canvas) and interactive charts with Recharts to turn raw transactions into spending-pattern insights. Global state managed with Context API.",
          demoCredentials: "admin@admin.com / 123",
        },
        {
          title: "🐾 Pet&Style",
          description:
            "Fictional pet-product e-commerce built to practice solid fundamentals: semantic HTML, responsive grid with Tailwind CSS, reusable product-card components and hover micro-interactions — no JS framework beyond vanilla.",
          demoCredentials: null,
        },
        {
          title: "✈️ Portal de Viagens",
          description:
            "Modern travel portal built with Next.js 14, applying dynamic routing, reusable layouts and isolated styling with CSS Modules.",
          demoCredentials: null,
        },
        {
          title: "SmartMart Pro",
          description:
            "Full Stack sales and inventory dashboard. FastAPI backend exposing REST endpoints for profit metrics; React frontend consuming the API to render performance charts and tables.",
          demoCredentials: null,
        },
        {
          title: "PokeFast API",
          description:
            "Asynchronous, paginated RESTful API built with FastAPI to consume the original PokéAPI. Standardized endpoints, Redis caching, hybrid persistence in SQLite, automated unit tests with code coverage, Docker containerization and a CI/CD pipeline via GitHub Actions.",
          demoCredentials: null,
        },
      ],
    },
    skills: {
      title: "Skills",
      groups: [
        {
          label: "Frontend",
          items: [
            "React.js",
            "TypeScript",
            "Next.js",
            "JavaScript",
            "HTML5",
            "CSS3",
            "SASS",
            "Bootstrap",
            "Tailwind CSS",
          ],
        },
        {
          label: "Backend",
          items: [
            "Python",
            "FastAPI",
            "SQLAlchemy ORM",
            "SQLite",
            "Redis",
            "Celery",
            "Pytest",
          ],
        },
        {
          label: "DevOps & Tools",
          items: [
            "Docker",
            "Kubernetes",
            "ELK Stack",
            "Git / GitHub",
            "Scrum",
            "Kanban",
          ],
        },
      ],
    },
    education: {
      title: "Background",
      items: [
        {
          period: "12/2025 — 06/2026",
          title: "Full Stack Python",
          place: "EBAC — British School of Creative Arts and Technology",
          description: "Intensive program covering Python, FastAPI, Redis, Celery, relational databases and back-end development.",
        },
        {
          period: "03/2025 — 07/2027 (ongoing)",
          title: "Systems Analysis and Development",
          place: "Faculdade Imes (distance learning)",
          description: "Ongoing degree focused on software architecture and engineering best practices.",
        },
        {
          period: "03/2012 — 06/2013",
          title: "Postgraduate Degree in Leadership and Teamwork",
          place: "UNIBR Faculdade de São Vicente",
          description: "Foundation in process management, deadlines and collaboration in high-performance teams.",
        },
        {
          period: "03/2007 — 12/2011",
          title: "Bachelor's Degree in Business Administration",
          place: "UNIBR Faculdade de São Vicente",
          description: "Completed while working at Itaú Unibanco.",
        },
        {
          period: "08/2007 — 12/2014",
          title: "Bank Teller / Banking & Financial Customer Service",
          place: "Itaú Unibanco (Praia Grande/SP)",
          description: "7 years in customer service and banking product sales (loans, insurance, credit cards, pension plans), building assertive communication and real-world business problem-solving skills.",
        },
      ],
      complementaryTitle: "Additional courses",
      complementary: [
        "Front-End React — EBAC (2026)",
        "DevOps & DevSecOps Specialization — Hackers do Bem Program (Softex, SENAI, RNP and Ministry of Science) (2026)",
        "Generative AI Fundamentals — Dio.me (2025)",
        "Git & GitHub Version Control — Dio.me (2025)",
        "Cybersecurity — Dio.me (2025)",
      ],
    },
    contact: {
      title: "Let's talk?",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      submitButton: "Send Message",
    },
  },
};
