import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ContractIcon, DatabaseIcon, ChartPieIcon, CurrencyDollarIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <ContractIcon />,
    title: "Apply",
    description:
      "Startups apply by onboarding and launching a DAO. While they remain as legal entities off-chain, they fully operate as DAOs on the Reorg platform.",
  },
  {
    icon: <DatabaseIcon />,
    title: "Proof of Existence & Identity",
    description:
      "Startups undergo a rigorous proof of existence, proof of identity (KYC and KYB), and valuation evaluation process to establish their legitimacy on the Reorg platform.",
  },
  {
    icon: <ChartPieIcon />,
    title: "Tokenize Assets & Ownership",
    description:
      "Startups tokenize their assets and ownership. Each NFT represents a percentage of ownership or asset in the company, along with a corresponding number of fungible tokens.",
  },
  {
    icon: <CurrencyDollarIcon />,
    title: "Operate as DAO",
    description:
      "Startups operate using the SNS DAO framework on the Reorg platform. Investors can trade fungible tokens, propose changes, and vote in the DAO, fostering a decentralized governance model.",
  },
];

export const HowItWorks = () => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Startups onboard and tokenize their ownership with these simple steps
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="bg-muted/50">
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
