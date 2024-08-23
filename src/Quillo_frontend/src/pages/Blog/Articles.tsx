import React from "react";
import {
  Container,
  Typography,
  Grid,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import { HttpAgent } from "@dfinity/agent";
import { createActor, Quillo_backend } from "../../declarations/Quillo_backend";

const ArticleCard = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '15px 0',
  border: `2px solid ${theme.palette.divider}`,
  padding: '16px',
  background: '#263238',
  borderRadius: '15px',
  boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
  color: '#ffffff',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 20px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.15)',
  },
}));

const BlogCardsComponent: React.FC = () => {
  const [articles, setArticles] = React.useState<any>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  let actor = Quillo_backend;
  const agent: any = new HttpAgent();
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", { agent });

  async function fetchArticles() {
    let articles = await actor.get_articles();
    return articles;
  }

  React.useEffect(() => {
    async function fetchData() {
      const fetchedArticles = await fetchArticles();
      setArticles(fetchedArticles);
      setLoading(false); // Stop loading when articles are fetched
    }
    fetchData();
  }, []);

  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Typography variant="h4" gutterBottom align="center" color="white">
        Articles
      </Typography>

      {loading ? (
        // Show loading spinner while articles are being fetched
        <Grid container justifyContent="center" sx={{ mt: 4 }}>
          <CircularProgress color="primary" />
        </Grid>
      ) : articles.length === 0 ? (
        // Show message if no articles are available
        <Typography variant="h5" align="center" sx={{ color: "white", mt: 4 }}>
          No articles
        </Typography>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {articles.map(([_, post]: any, id: number) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <Link to={`/blog/${id}`} style={{ textDecoration: "none" }}>
                <ArticleCard>
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {post.title}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      {post.content?.slice(0, 100) + "..."}
                    </Typography>
                  </CardContent>
                </ArticleCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default BlogCardsComponent;
