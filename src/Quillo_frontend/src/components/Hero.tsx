import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { ListBulletIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
           Unlock New Capital
            </span>{" "}
       
          </h2>{" "}
      
          <h3 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Turn Your Startup into a Tokenized DAO 
            </span>{" "}
          </h3>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        We empower startups to raise funds like never before. Our secure DAO platform allows you to tokenize your company ownership into NFTs, attracting a wider pool of investors. These NFTs offer fractional ownership, making investment accessible and providing increased liquidity for your supporters.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3"> Launch your DAO today</Button>

          <a
            rel="noreferrer noopener"
            href=""
      
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
       Learn how it works
            <ListBulletIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
