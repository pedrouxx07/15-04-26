function Hero() {
  return (
    <header className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="badge hero-badge mb-3">Portal musical moderno</span>
            <h1 className="display-4 fw-bold mb-3">
              O ritmo da sua <span className="text-gradient">informação</span>
            </h1>
            <p className="lead mb-4">
              Explore tendências, histórias, álbuns icônicos e os lançamentos mais marcantes do universo da música.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#artigos" className="btn btn-main btn-lg">Ver artigos</a>
              <a href="#footer" className="btn btn-outline-light btn-lg">Explorar blog</a>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80"
              alt="Show musical"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;