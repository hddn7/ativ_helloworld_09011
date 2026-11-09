import './App.css'

function App() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="Página inicial">
          s<span>.</span>
        </a>
        <span className="edition">HELLO WORLD / 2026</span>
      </header>

      <section className="hero" aria-labelledby="greeting">
        <p className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          PRIMEIRO PROJETO REACT
        </p>

        <div className="hero-copy">
          <span className="index-mark" aria-hidden="true">01</span>
          <div className="hero-text">
            <p className="intro">Tudo começa com uma linha de código.</p>
            <div className="headline">
              <h1 id="greeting">Hello World, Henry Nomura</h1>
            </div>
            <p className="subtext">Meu primeiro projeto com React.</p>
          </div>
        </div>

        <footer className="hero-footer">
          <span>CRIADO COM REACT</span>
          <span className="footer-line" aria-hidden="true" />
          <span>FEITO PARA A WEB</span>
        </footer>
      </section>
    </main>
  )
}

export default App
