import './MainContent.css'
function MainContent() {
  return (
    <main className="main-content">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>
          This is a dummy website built to practice React components, layouts,
          and styling.
        </p>
        <button>Learn More</button>
      </section>

      <section className="cards">
        <div className="card">
          <h2>Web Development</h2>
          <p>
            Build modern, responsive websites using HTML, CSS, JavaScript, and
            React.
          </p>
        </div>

        <div className="card">
          <h2>UI Design</h2>
          <p>
            Create beautiful and user-friendly interfaces with clean layouts
            and engaging colors.
          </p>
        </div>

        <div className="card">
          <h2>Projects</h2>
          <p>
            Practice by building real-world applications and improving your
            frontend skills.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;