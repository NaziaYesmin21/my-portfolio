import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav>
        <h2>Nazia Yesmin</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div>
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Nazia Yesmin</span>
          </h1>

          <h2>Computer Science & Engineering Student</h2>

          <p>
            I am a CSE student interested in Web Development,
            Artificial Intelligence and Machine Learning.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I am a Computer Science and Engineering student at
          International Islamic University Chittagong (IIUC).
          I am passionate about technology, programming,
          artificial intelligence and learning new skills.
        </p>
      </section>

      {/* Skills */}
      <section id="skills">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Python</div>
          <div>C++</div>
          <div>Machine Learning</div>
          <div>Git & GitHub</div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Fake News Detection</h3>
            <p>
              A machine learning and deep learning based project
              for detecting fake news from social media data.
            </p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3>Water Potability Prediction</h3>
            <p>
              A machine learning project that predicts whether
              water is suitable for drinking.
            </p>
            <a href="#">View Project</a>
          </div>

          <div className="project-card">
            <h3>Image Processing Project</h3>
            <p>
              An image processing project using different
              techniques for image analysis.
            </p>
            <a href="#">View Project</a>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <h2 className="section-title">Contact Me</h2>

        <p>Email: naziayesmin21@gmail.com</p>
        <p>GitHub: https://github.com/NaziaYesmin21</p>
        <p>LinkedIn: https://www.linkedin.com/in/naziayesminkhan</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Nazia Yesmin. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App