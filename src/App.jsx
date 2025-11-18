export const App = () => {
  return (
    <>
      <main>
        {/* HERO */}
        <section>
          <p>Hi there, I'm</p>
          <h1>Sandra Hagevall</h1>
          <div className="hero-images">
            <div className="hero-img hero-img-left" aria-hidden="true"></div>
            <div className="hero-img hero-img-main" role="img" aria-label="Portrait of Sandra Hagevall"></div>
            <div className="hero-img hero-img-right" aria-hidden="true"></div>
          </div>
          <h2>Analytical Frontend Developer with a Background in Industrial Engineering and IT Strategy</h2>
          <p>I am a Frontend Developer skilled at creating logical, structured, and accessible applications. I excel at solving complex problems and delivering efficient solutions. My analytical skills and drive to produce precise, high-quality code make me a valuable asset in any project.</p>
        </section>

        {/* TECH */}
        <section>
          <h2>Tech</h2>
          <p>HTML, CSS, Flexbox, JavaScript ES6, TypeScript, JSX, React, React Hooks, Node.js,  Mongo DB, Web Accessibility, APIs, mob-programming, pair-programming, GitHub.</p>
        </section>

        {/* FEATURED PROJECTS */}
        <section>
          <h2>Featured Projects</h2>
          <article>
            <h3>Business site</h3>
            <p>This is a project for a fictional company, built with responsive design using Flexbox and Grid, featuring a mobile menu and contact form. It was designed to practice clean structure, interactivity, and enhance the user experience.</p>
          </article>
          <article>
            <h3>Recipe library</h3>
            <p>This is a web app built using the Spoonacular API, designed to practice fetching specific data and using local storage to enhance the user experience, with JavaScript animations for added interactivity.</p>
          </article>
          <article>
            <h3>Weather app</h3>
            <p>This weather app is a group project built using the SMHI API and TypeScript. It displays accurate weather data for different locations, includes dynamic icons, and was designed to practice API integration, asynchronous data handling, and collaborative development.</p>
          </article>
          <article>
            <h3>Accessibility site</h3>
            <p>This fictional event site is a group project, created with accessbility in focus. It includes a modal with trapped focus, a high-contrast mode toggle, and text customization settings. The project was designed to practice building accessible and user-friendly interfaces while implementing interactive features that enhance usability for all users.</p>
          </article>
        </section>

        {/* SKILLS */}
        <section>
          <h2>Skills</h2>
          <div className="type-of-skill">
            <h3>Code</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>TypeScript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="type-of-skill">
            <h3>Toolbox</h3>
            <ul>
              <li>Visual Studio Code</li>
              <li>Figma</li>
              <li>Slack</li>
              <li>Chrome DevTools</li>
            </ul>
          </div>
          <div className="type-of-skill">
            <h3>Upcoming</h3>
            <ul>
              <li>Node.js</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="type-of-skill">
            <h3>More</h3>
            <ul>
              <li>Strategy</li>
              <li>Process Design</li>
              <li>Concept Development</li>
              <li>Project Management</li>
              <li>Agile Methodology</li>
            </ul>
          </div>
        </section>

        {/* MY WORDS */}
        <section>
          <h2>My Words</h2>
          <p className="date">Nov 12th</p>
          <article>
            <h3>Career change: My journey into programming</h3>
            <p>After studying at university for four and a half years, I had no plans to return to school. I was done with that chapter of my life.</p>
          </article>
        </section>
      </main>

      <footer>
        <section>
          <h2>Let's Talk</h2>
          <div className="contact-info">
            <p>Sandra Hagevall</p>
            <p>+46(0)703 15 53 85</p>
            <p>sandrahagevall@hotmail.com</p>
          </div>
          <div className="social-links">

          </div>
        </section>
      </footer>
    </>
  )
}
