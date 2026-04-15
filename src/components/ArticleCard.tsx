type Article = {
  id: number;
  category: string;
  title: string;
  text: string;
  image: string;
};

type ArticleCardProps = {
  article: Article;
};

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card article-card h-100">
        <img src={article.image} className="card-img-top" alt={article.title} />
        <div className="card-body">
          <span className="article-tag">{article.category}</span>
          <h5 className="card-title mt-3">{article.title}</h5>
          <p className="card-text">{article.text}</p>
          <button className="btn btn-card">Ler mais</button>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;