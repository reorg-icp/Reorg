import BlogSection from "./BlogsSection";
import { createActor, Quillo_backend } from "../../../../declarations/Quillo_backend";
import { useEffect, useState } from "react";
import { HttpAgent } from "@dfinity/agent";
import BlogFooter from "./Sections/BlogFooter";
import { useArticles } from "../../store";


function BlogsPosts() {
  const {articles, setArticles} = useArticles();
  const [loading, setLoading] = useState<boolean>(true);

  let actor = Quillo_backend;
  const agent: any = new HttpAgent();
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", { agent });

  async function fetchArticles() {
    let articles = await actor.get_articles();
    return articles;
  }

  useEffect(() => {
    async function fetchData() {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      setLoading(false); // Stop loading when articles are fetched
    }
    fetchData();
  }, []);
   
  return (
    <div className="bg-[#1414] rounded border border-transparent w-full mt-24 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center  mb-4">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blogs
          </h2>
          <p className="font-light  sm:text-xl font-leagueSpartan text-gray-300  text-center">
          Explore our latest articles covering all aspects of token lifecycles. From secure launches and efficient trading to scaling across multiple blockchains, our expert-backed content provides valuable insights for your token journey.
          </p>
        </div>
      </div>


      {loading ? (
          // Loading state
          <div className="flex flex-col items-center justify-center h-96">
            <i className="fas fa-spinner text-6xl text-gray-300 animate-spin mb-4"></i>
            <p className="text-xl text-gray-300">Loading...</p>
          </div>
        )  :  (articles && Array.isArray(articles) && articles.length === 0) || !articles ? (
          // No articles available
          <div className="flex flex-col items-center justify-center h-96 border-2 border-emerald-800 border-dashed rounded-lg">
            <i className="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
            <p className="text-xl text-gray-300 font-leagueSpartan">! Currently no articles available !!</p>
          </div>
        ): (
          // Display BlogSection component when articles are available
          <BlogSection articles={articles} />
        )}
<BlogFooter/>
    </div>
  );
}

export default BlogsPosts;
