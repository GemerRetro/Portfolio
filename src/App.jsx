import './index.css'

const projects = [
  {
    title: 'Void Prop Pack',
    category: 'Props & Objets',
    description: 'Collection de props futuristes, détaillés et prêts pour des environnements sci-fi.',
  },
  {
    title: 'Nebula Rifle',
    category: 'Armes & Équipements',
    description: 'Modèle d’arme stylisée pour un univers spatial, pensée pour le jeu et la présentation.',
  },
  {
    title: 'Cryptic Creature',
    category: 'Créatures',
    description: 'Créature originale à l’ambiance sombre et organique, conçue pour des environnements immersifs.',
  },
  {
    title: 'Deep Space Station',
    category: 'Environnements',
    description: 'Décor de station spatiale avec un rendu atmosphérique et une lisibilité de gameplay.',
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
  return (
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
              <a className="btn primary" href="#portfolio">Voir le portfolio</a>
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
}

export default App
