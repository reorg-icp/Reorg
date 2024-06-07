
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../components/ui/card";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonials */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg"></CardTitle>
            <CardDescription>Founder,POK</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          "Reorg revolutionized our fundraising process. With their platform, we were able to tokenize our ownership and raise over $1 million in funding within weeks. Highly recommend!"
        </CardContent>
      </Card>

      {/* Team Members */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="https://i.pravatar.cc/150?img=58"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Amschel</CardTitle>
          <CardDescription className="font-normal text-primary">
            Blockchain Expert
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center pb-2">
          <p>
            "As a blockchain developer, I've seen the potential of Reorg to disrupt traditional fundraising models. Their platform provides a seamless experience for startups and investors alike."
          </p>
        </CardContent>
        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/amschel99"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
          </div>
        </CardFooter>
      </Card>

    
    
    </div>
  );
};
