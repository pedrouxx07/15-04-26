function Footer() {
  return (
    <footer id="footer" className="footer-custom pt-5 pb-3">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5>Sobre o Blog</h5>
            <p>
              Um portal dedicado aos apaixonados por música, cultura sonora, artistas e tendências.
            </p>
          </div>

          <div className="col-md-4">
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#artigos">Artigos</a></li>
              <li><a href="#footer">Contato</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h5>Redes Sociais</h5>
            <p>Instagram | Twitter | YouTube | Spotify</p>
          </div>
        </div>

        <hr className="footer-line" />
        <p className="text-center mb-0">© 2026 MusicBlog - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;