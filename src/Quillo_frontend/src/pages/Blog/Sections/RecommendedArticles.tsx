import { useState, useEffect } from "react";
import { ArticleCard } from "../BlogsSection";

const RecommendedArticles = ({ articles, readArticleId }) => {
  const [recommendedArticles, setRecommendedArticles] = useState([]);
console.log({readArticleId});
  useEffect(() => {
    // Filter articles to exclude the one  already read
    const unreadArticles = articles.filter(([_,article ])=> article.id !== readArticleId);
    
    // Select only the first 3 unread articles
    setRecommendedArticles(unreadArticles.slice(0, 3));
  }, [articles, readArticleId]);
console.log({recommendedArticles})
  return (
    <div className="mt-4 flex items-center flex-col justify-center px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-12 text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
        Others Read This Too..
      </h2>
      <div className="grid lg:gap-12 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 mb-8">
        {recommendedArticles.map(([_,article]) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <button
        className="mt-4 px-4 py-2  border border-emerald-800 hover:border-amber-400  focus:ring-1 focus:ring-border-emerald-400 text-white"
        onClick={() => window.location.href = '/blogposts'}
      >
        View More Articles
      </button>
    </div>
  );
};

export default RecommendedArticles;
