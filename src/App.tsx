import Header from "./components/Header";
import Hero from "./components/Hero";
import ArticleCard from "./components/ArticleCard";
import Footer from "./components/Footer";

function App() {
  const articles = [
    {
      id: 1,
      category: "Rock",
      title: "História do Rock",
      text: "Descubra as origens do gênero que mudou a cultura jovem e redefiniu a música moderna.",
      image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 2,
      category: "Pop",
      title: "O impacto do Pop global",
      text: "Como o pop conquistou o mundo e se tornou uma força gigantesca na indústria musical.",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 3,
      category: "Rap",
      title: "Rap: voz da resistência",
      text: "Entenda como o rap se tornou uma ferramenta de expressão, crítica social e identidade.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 4,
      category: "Jazz",
      title: "A elegância do Jazz",
      text: "Improviso, técnica e emoção: o jazz segue como um dos estilos mais sofisticados da música.",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 5,
      category: "Indie",
      title: "Por que o Indie cresceu tanto?",
      text: "O estilo indie ganhou espaço por unir autenticidade, estética forte e liberdade criativa.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 6,
      category: "Eletrônica",
      title: "A energia da música eletrônica",
      text: "Dos festivais aos fones de ouvido, a eletrônica domina pistas e playlists pelo mundo.",
      image: "https://i.pinimg.com/736x/a8/34/1d/a8341d957e5bbf5aa446c3f884eab032.jpg"
    }
  ];

  return (
    <>
      <Header />
      <Hero />

      <section id="artigos" className="py-5 articles-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Últimos Artigos</h2>
            <p className="text-light-subtle">
              Os assuntos mais quentes do universo musical reunidos em um só lugar.
            </p>
          </div>

          <div className="row g-4">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="genres-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-white">Explore por Gênero</h2>
            <p className="text-light-subtle">
              Escolha seu som e navegue pelo estilo que mais combina com você.
            </p>
          </div>

          <div className="row g-4 text-center">
            {["Rock", "Pop", "Rap", "Jazz", "Indie", "Eletrônica"].map((genre) => (
              <div className="col-md-2 col-6" key={genre}>
                <div className="genre-box">{genre}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;