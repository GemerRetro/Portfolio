import React, { useState } from 'react'
import './index.css'

const projects = [
  {
    id: 1,
    title: 'Void Prop Pack',
    category: 'Props & Objets',
    description: 'Collection de props futuristes, détaillés et prêts pour des environnements sci-fi.',
    year: '2026',
    summary:
      'Une série de props conçus pour des environnements futuristes immersifs, pensés pour être lisibles, détaillés et cohérents visuellement dans un univers sci-fi sombre.',
    challenge:
      'Créer des objets de gameplay et de décor qui restaient lisibles à distance tout en offrant un niveau de détail suffisant pour le rendu et l’immersion visuelle.',
    results: [
      'Modularité visuelle pour des environnements de jeu',
      'Palette sombre et technologique cohérente',
      'Assets prêts à intégrer dans un univers narratif futuriste',
    ],
    tools: ['Blender', 'Substance', 'Marmoset', 'Unity'],
    mood: 'Sombre • Technique • Futuriste',
  },
  {
    id: 2,
    title: 'Nebula Rifle',
    category: 'Armes & Équipements',
    description: 'Modèle d’arme stylisée pour un univers spatial, pensée pour le jeu et la présentation.',
    year: '2025',
    summary:
      'Une arme de poing à l’esthétique avancée, conçue pour un univers à forte identité visuelle, avec un design agressif, technique et lisible en gameplay.',
    challenge:
      'Équilibrer la personnalité visuelle de l’arme avec une silhouette claire pour la perception du joueur et la cohérence de l’univers.',
    results: [
      'Forme distinctive et mémorable',
      'Mise en valeur des pièces mécaniques et de la silhouette',
      'Design compatible avec un univers spatial immersif',
    ],
    tools: ['Blender', 'ZBrush', 'Substance', 'Unreal'],
    mood: 'Agressif • Sleek • Spatial',
  },
  {
    id: 3,
    title: 'Cryptic Creature',
    category: 'Créatures',
    description: 'Créature originale à l’ambiance sombre et organique, conçue pour des environnements immersifs.',
    year: '2026',
    summary:
      'Une créature inspirée de formes organiques et mécaniques hésitant entre biologie et mythologie, pensée pour intégrer des univers sombres et mystérieux.',
    challenge:
      'Créer une silhouette forte qui fonctionne à la fois en gros plan et à distance, tout en gardant un rendu organique et crédible.',
    results: [
      'Silhouette claire et mémorable',
      'Mise en scène très immersive',
      'Personnalité visuelle forte et originale',
    ],
    tools: ['Blender', 'Photoshop', 'ZBrush'],
    mood: 'Mystique • Organique • Sombre',
  },
  {
    id: 4,
    title: 'Deep Space Station',
    category: 'Environnements',
    description: 'Décor de station spatiale avec un rendu atmosphérique et une lisibilité de gameplay.',
    year: '2024',
    summary:
      'Une station spatiale conçue comme un lieu de jeu, avec une lecture claire de l’espace, un environnement dense et une atmosphère très immersive.',
    challenge:
      'Créer un environnement crédible, lisible et esthétiquement cohérent sans perdre la sensation de profondeur et de grandeur spatiale.',
    results: [
      'Environnement lisible et géométrique',
      'Atmosphère immersive et futuriste',
      'Très bon potentiel pour la mise en scène de gameplay',
    ],
    tools: ['Blender', 'UE5', 'Substance', 'Maya'],
    mood: 'Atmosphérique • Spatial • Industriel',
  },
]

const services = [
  'Modélisation 3D',
  'Création de props et accessoires',
  'Création d’armes et équipements',
  'Création de créatures et personnages',
  'Création d’environnements',
  'Texturing et matériaux',
  'Optimisation de modèles',
  'Assets pour jeux vidéo',
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/gemer_retro/' },
  { label: 'The Rookies', href: 'https://www.therookies.co/u/GemerRetro' },
  { label: 'Discord', href: 'https://discord.com' },
]

function App() {
  const [activeProject, setActiveProject] = useState(projects[0])
  const [showProject, setShowProject] = useState(false)

  const openProject = (project) => {
    setActiveProject(project)
    setShowProject(true)
  }

  const goBackToPortfolio = () => {
    setShowProject(false)
  }

  const renderProjectDetail = () => {
    if (!activeProject) return null

    return (
      <div className="project-page-shell">
        <header className="project-topbar detail-header">
          <div className="brand">
            <span className="brand-mark">G</span>
            <span>GemerRetro</span>
          </div>

          <button className="btn secondary back-btn" onClick={goBackToPortfolio}>
            ← Retour au portfolio
          </button>
        </header>

        <main className="project-detail-page">
          <section className="project-detail-hero">
            <div className="project-detail-visual-wrap">
              <div className={`project-visual visual-${activeProject.id}`} />
            </div>

            <div className="project-detail-copy">
              <p className="eyebrow">{activeProject.category}</p>
              <h1>{activeProject.title}</h1>
              <p className="project-mood">{activeProject.mood}</p>
              <p className="project-summary">{activeProject.summary}</p>

              <div className="project-meta-row">
                <span>{activeProject.year}</span>
                <span>Art direction</span>
                <span>3D asset creation</span>
              </div>

              <div className="project-tool-list">
                {activeProject.tools.map((tool) => (
                  <span key={tool} className="tool-pill">{tool}</span>
                ))}
              </div>
            </div>
          </section>

          <section className="project-section-grid">
            <article className="project-info-card">
              <p className="eyebrow">Défi</p>
              <p>{activeProject.challenge}</p>
            </article>

            <article className="project-info-card bright-card">
              <p className="eyebrow">Résultat</p>
              <ul>
                {activeProject.results.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </section>

          <section className="project-showcase">
            <div className="showcase-panel big-panel">
              <div className={`project-visual visual-${activeProject.id}`} />
            </div>
            <div className="showcase-panel small-panel">
              <div className={`project-visual visual-${activeProject.id}`} />
            </div>
            <div className="showcase-panel small-panel">
              <div className={`project-visual visual-${activeProject.id}`} />
            </div>
          </section>

          <section className="related-projects">
            <div className="section-heading compact-heading">
              <p className="eyebrow">Autres projets</p>
              <h2>Plus de créations</h2>
            </div>

            <div className="project-grid">
              {projects
                .filter((project) => project.id !== activeProject.id)
                .map((project) => (
                  <article key={project.id} className="project-card">
                    <div className="project-image">
                      <div className={`project-visual visual-${project.id}`} />
                    </div>
                    <div className="project-body">
                      <span className="project-tag">{project.category}</span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <button className="text-link" onClick={() => openProject(project)}>
                        Voir le projet
                      </button>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </div>
    )
  }

  const renderPortfolio = () => (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">G</span>
          <span>GemerRetro</span>
        </div>

        <nav className="nav">
          <a href="#portfolio">Portfolio</a>
          <a href="#about">À propos</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">3D Artist • Environment • Props • Weapons</p>
            <h1>Modélisation 3D immersive pour des univers futuristes.</h1>
            <p className="lead">
              Je crée des assets 3D pour jeux vidéo, environnements, props, armes et créations originales,
              avec une direction artistique sombre, spatiale et premium.
            </p>

            <div className="cta-row">
              <button className="btn primary" onClick={() => openProject(projects[0])}>
                Voir le portfolio
              </button>
              <a className="btn secondary" href="#contact">Me contacter</a>
            </div>

            <div className="social-row">
              {socials.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-large" />
            <div className="orb orb-small" />
            <div className="panel-card">
              <span>GemerRetro</span>
              <strong>3D Modelling</strong>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="section-heading">
            <p className="eyebrow">Portfolio</p>
            <h2>Créations récentes</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <div className="project-image">
                  <div className={`project-visual visual-${index + 1}`} />
                </div>
                <div className="project-body">
                  <span className="project-tag">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="text-link" onClick={() => openProject(project)}>
                    Voir le projet
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="section-heading">
            <p className="eyebrow">À propos</p>
            <h2>Créateur 3D indépendant</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Je suis GemerRetro, créateur 3D spécialisé dans la modélisation, les props, les accessoires,
                les armes, les créatures, les environnements et les assets pour des projets interactifs.
              </p>
              <p>
                Mon travail s’inspire d’un univers sombre et spatial, avec une forte attention aux détails,
                à l’optimisation et à l’immersion visuelle.
              </p>
            </div>

            <div className="stats">
              <div>
                <strong>3D</strong>
                <span>Modélisation</span>
              </div>
              <div>
                <strong>Blender</strong>
                <span>Logiciel principal</span>
              </div>
              <div>
                <strong>Unity</strong>
                <span>Integration</span>
              </div>
              <div>
                <strong>Unreal</strong>
                <span>Rendus & props</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Ce que je peux créer</h2>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <div key={service} className="service-item">
                <span className="service-dot" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="service-cta">
            <p>Pour une commande ou une collaboration, discutons directement de votre projet.</p>
            <a href="#contact" className="btn primary">Discuter d’un projet</a>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Travaillons ensemble</h2>
          </div>

          <div className="contact-box">
            <div>
              <p>Discord</p>
              <strong>gemerretro</strong>
            </div>
            <div>
              <p>Email</p>
              <strong>7nestgames@gmail.com</strong>
            </div>
            <div>
              <p>Instagram</p>
              <a href="https://www.instagram.com/gemer_retro/" target="_blank" rel="noreferrer">
                @gemer_retro
              </a>
            </div>
            <div>
              <p>The Rookies</p>
              <a href="https://www.therookies.co/u/GemerRetro" target="_blank" rel="noreferrer">
                GemerRetro
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 GemerRetro</p>
      </footer>
    </div>
  )

  return showProject ? renderProjectDetail() : renderPortfolio()
}

export default App
