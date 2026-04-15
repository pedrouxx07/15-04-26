function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          🎵 MusicBlog
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#artigos">Artigos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contato</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;