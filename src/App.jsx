import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a href="#home" className="logo">
          Ligia<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <section id="home" className="hero">
        <div className="overlay"></div>

        <div className="content">
          <p className="eyebrow">Frontend Developer Portfolio</p>

          <h1>
            Hi, I'm <span>Ligia</span> 👋
          </h1>

          <p className="subtitle">
            Aspiring Frontend Developer passionate about building modern,
            responsive and user-friendly web applications with React, JavaScript
            and clean UI design.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>

          <p>
            I am currently learning Frontend Development and building projects
            with React, JavaScript and responsive UI design.
          </p>

          <p>
            I enjoy turning ideas into interactive digital experiences using
            HTML, CSS, JavaScript and React. I’m focused on writing clean code,
            learning best practices and continuously improving both design and
            development skills.
          </p>

          <p>
            Currently I’m building personal projects to strengthen my frontend
            portfolio while preparing for Frontend Developer Internship
            opportunities.
          </p>
        </div>
      </section>

      <section id="skills" className="skills">
        <div className="container">
          <h2>Tech Stack</h2>

          <div className="cards">
            <div className="card">HTML5</div>
            <div className="card">CSS3</div>
            <div className="card">JavaScript</div>
            <div className="card">React</div>
            <div className="card">Responsive Design</div>
            <div className="card">Git & GitHub</div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="container">
          <h2>Featured Projects</h2>

          <div className="project-grid">
            {/* Personal portfolio App */}
            <div className="project-card">
              <h3>Premier Motors - Mazda ARAD</h3>

              <p>
                Modern and responsive website developed for Premier Motors Mazda Arad,
    built with React and Vite. The project focuses on creating a clean,
    user-friendly experience and presenting automotive content in an
    engaging and accessible way.
              </p>

              <div className="project-tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
                <span>Responsive Design</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/LigiaLTP/Premier-Motors---Mazda-Arad"
                  target="_blank"
                >
                  GitHub
                </a>

                <a href="https://premier-motors-mazda-arad.netlify.app/" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>

            {/* Add to Cart App */}
            <div className="project-card">
              <h3>Add To Cart App</h3>

              <p>
                Simple shopping cart project built to practice JavaScript logic,
                product cards, cart updates and basic user interaction.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/LigiaLTP/AddToCart.git"
                  target="_blank"
                >
                  GitHub
                </a>

                <a href="https://ligiaaddtocart.netlify.app/" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>

            {/* Dating App*/}
            <div className="project-card">
              <h3>Cute Dating App</h3>

              <p>
                Modern and responsive dating website designed to provide an engaging and user-friendly experience. Built with a focus on clean UI, responsive design and intuitive navigation.
               </p>

              <div className="project-tags">
                <span>React</span>
                <span>Vite</span>
                <span>CSS</span>
                <span>Responsive Design</span>
              </div>

              <div className="project-links">
                {/* <a
                  href="https://github.com/LigiaLTP/Room-Booking-App.git"
                  target="_blank"
                >
                  GitHub
                </a> */}

                <a href="https://cutedatingsite.netlify.app/" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>

              {/* Landing page - Kagaya Beach*/}
            <div className="project-card">
              <h3>Kagaya Beach</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, repellat.
              </p>

              <div className="project-tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/LigiaLTP/Kagaya-Beach.git"
                  target="_blank"
                >
                  GitHub
                </a>

                <a href="https://kagayabeach.netlify.app/" target="_blank">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>

          <p>
            Open to Frontend Internship opportunities, collaborations and
            projects where I can learn, contribute and grow as a developer.
          </p>

          <div className="contact-links">
            <a href="mailto:a32099404@gmail.com" className="contact-link">
              Email
            </a>

            <a
              href="https://github.com/LigiaLTP"
              target="_blank"
              className="contact-link"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="contact-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
