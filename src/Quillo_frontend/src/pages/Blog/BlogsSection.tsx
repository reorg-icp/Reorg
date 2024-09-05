import { Article, BlogSectionProps } from "./types";



export const ArticleCard: React.FC<Article> = ({ title, imageUrl, content,readTime,id }) => (
    <article className="max-w-sm group">
    <a href={`/singleblog/${id}`} className="block mb-5 overflow-hidden rounded-lg">
      <img 
        src={imageUrl} 
        className="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110" 
        alt={title} 
      />
    </a>
    <h2 className="mb-2 text-xl font-bold leading-tight text-white transition-colors group-hover:text-cyan-400">
      <a href={`/singleblog/${id}`}>{title}</a>
    </h2>
    <p className="mb-4 font-leagueSpartan text-gray-300">{content}</p>
    <span 
    
      className="inline-flex items-center font-medium underline underline-offset-4 text-purple-600 hover:text-purple-800 transition-all duration-300 ease-in-out group-hover:translate-x-2 "
    >
      Read in {readTime} minutes
    </span>
  </article>
);

const BlogSection: React.FC<BlogSectionProps> = ({ articles }) => {
  return (
    <div aria-label="articles" className="py-4 ">
      <div className="flex items-center  flex-col justify-center px-4 mx-auto max-w-screen-xl">
      <h2 className="mb-8 text-3xl text-center text-wrap-no-wrap font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-500">
          Multichain Insights: Latest in Token Ecosystems
        </h2>
        <div className="grid lg:gap-12 gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4">
          { articles && Array.isArray(articles) && articles.map(([_,article]:any) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;