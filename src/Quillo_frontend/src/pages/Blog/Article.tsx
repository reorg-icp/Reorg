import React from "react";
import {
  Container,
  Typography,
  CardContent,
  Box,
  CircularProgress,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { HttpAgent } from "@dfinity/agent";
import { createActor, Quillo_backend } from "../../../../declarations/Quillo_backend";
import { styled } from "@mui/system";


const links = [""];

const routes = {
  home: "learn",
  about: "contribute",
  contribute: "",
  collection: "",
  faq: "faq",
  popular: "popular",
  features: "features",
  promo: "promotion",
  footer: "footer",
};

const Links = Object.values(routes).map((r) => r);

function Header() {
  return (
    <header className="sticky w-full mt-2 py-4 px-1 min-h-16 row items-center justify-between gap-2">
      <div className="row items-center gap-2">
       
        <div className="ml-24 hidden lg:flex flex-row flex-wrap gap-8">
          {links.map((li, i) => (
            <a key={i} href={`${Links[i]}`} className={`uppercase font-redzone`}>
              {li}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

const ArticleCard = styled('div')(({ }) => ({
  width: '100%',

 


  color: '#ffffff',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
 
}));

const ArticleComponent: React.FC = () => {
  const { slug } = useParams();
  const [dust, setDust] = React.useState<any>();
  const [loading, setLoading] = React.useState<boolean>(true);

  let actor = Quillo_backend;
  const agent: any = new HttpAgent();
  actor = createActor("ircua-hiaaa-aaaap-qhkvq-cai", { agent });

  async function fetchDust() {
    let dust = await actor.get_single_article(
      parseInt(slug as string) as unknown as bigint
    );
    return dust;
  }

  React.useEffect(() => {
    async function fetchData() {
      const fetchedDust: any = await fetchDust();
      setDust(fetchedDust?.Ok);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Header />
      {loading ? (
        <Box display="flex" justifyContent="center" sx={{ mt: 4 }}>
          <CircularProgress color="primary" />
        </Box>
      ) : (
        <ArticleCard>
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ color: "#bb86fc", fontWeight: "bold" }}
            >
              {dust?.title}
            </Typography>
            <Box mt={2}>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                {dust?.content}
              </Typography>
            </Box>
          </CardContent>
        </ArticleCard>
      )}
    </Container>
  );
};

export default ArticleComponent;
