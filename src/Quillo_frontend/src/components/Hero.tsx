import styled from "styled-components";

export const GradientWord = styled.span`
  background: linear-gradient(360deg, #004d40 -16.67%, #00251a 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`;

export const PinkBlur = styled.div`
  filter: blur(120px);
  border-radius: 100px;
  background: linear-gradient(360deg, #004d40 -16.67%, #00251a 100%);
`;

export const VioletBlur = styled.div`
  filter: blur(150px);
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: linear-gradient(126.86deg, #00332f 0%, #001a15 100%);
`;

function HeroSection() {
  return (
    <div className="h-full relative">
      <VioletBlur className="absolute top-0 left-0 blur-xl" />
      <PinkBlur className="absolute right-0 bottom-48 h-1/6 w-1/6 opacity-50" />
      <PinkBlur className="absolute bottom-36 left-72 h-24 w-24" />
      <div className="lg:mt-24 md:mt-12 sm:mt-12 flex flex-col text-center items-center z-20">
        <div className="flex flex-col mx-auto py-4 mb-10 ">
          <h1 className="md:leading-normal sm:leading-normal lg:leading-tight lg:text-5xl md:text-4xl sm:text-4xl font-bold z-30">
            A token generation event platform on the <br />{" "}
            <GradientWord>Internet Computer</GradientWord>
            {/* Built for <span style={{ textDecoration: "line-through white" }}>
            </span><GradientWord> Circles</GradientWord> <br /> that change the
            world */}
          </h1>
          <h2 className="text-center lg:w-3/5 sm:w-4/5 md:4/5 mx-auto mt-4 text-zinc-400">
            An all in one solution that handles the complexities of token
            creation, token economics, token distribution and access to funding.
          </h2>
        </div>
        <div className="mb-12 flex flex-row gap-6 z-20">
          <a href="">
            <button
              className="
              px-8
              py-3
              rounded-xl
              text-md
              text-zinc-400
              text-bold
              bg-white
              bg-opacity-5
              hover:bg-opacity-10
              hover:text-white
              duration-700"
            >
              Launch token
            </button>
          </a>
          <a href="">
            <button
              className="
              px-8
              py-3
              rounded-xl
              text-md
              text-purple
              text-bold
              bg-purple
              bg-opacity-5
              hover:bg-opacity-25
              duration-700"
            >
              Invest in tokens
            </button>
          </a>
        </div>
        <img src="/earth.svg" className="lg:w-[50%] mx-auto" />
        <div className="absolute bottom-0 bg-gradient-to-t from-black to h-24 w-full z-60" />
      </div>
    </div>
  );
}

export default HeroSection;
