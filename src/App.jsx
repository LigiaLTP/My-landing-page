import "./App.css";

function App() {
  return (
    <div className="app">
      <section className="hero">
        <div className="overlay"></div>

        <div className="content">
          <p className="eyebrow">Frontend Developer Portfolio</p>

          <h1>
            Hi, I'm <span>Ligia</span> 👋
          </h1>

          <p className="subtitle">
            Aspiring Frontend Developer passionate about building modern,
            responsive and user-friendly web applications with React,
            JavaScript and clean UI design.
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

      <section className="about">
        <div className="container">
          <h2>About Me</h2>

          <p>
            I'm a Software Engineer currently transitioning into Frontend
            Development, with a strong interest in creating modern interfaces
            that are intuitive, responsive and visually polished.
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

      <section className="skills">
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
            <div className="project-card">
              <h3>Personal Portfolio Website</h3>
              <p>
                Responsive portfolio website built with React featuring reusable
                components, modern layout and smooth navigation across sections.
              </p>
            </div>

            <div className="project-card">
              <h3>Weather App</h3>
              <p>
                Interactive weather dashboard consuming REST API data and
                displaying live weather conditions with clean UI components.
              </p>
            </div>

            <div className="project-card">
              <h3>Task Management App</h3>
              <p>
                To-do application developed using JavaScript with task creation,
                filtering and local storage persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Let's Connect</h2>

          <p>
            Open to Frontend Internship opportunities, collaborations and
            exciting projects where I can learn, contribute and grow as a
            developer.
          </p>

          <p>Email: a32099404@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default App;