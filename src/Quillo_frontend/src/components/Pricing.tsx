import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

enum PopularPlanType {
  NO = 0,
  YES = 1,
}

interface PricingProps {
  title: string;
  popular: PopularPlanType;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const pricingList: PricingProps[] = [
  {
    title: "Startup Tokenization Application",
    popular: 0,
    price: 100,
    description:
      "Startups need to pay 100 Tefro tokens to submit an application for tokenizing their ownership into NFTs. This fee covers the initial review and setup process.",
    buttonText: "Learn more",
    benefitList: [
      "1 Team member",
      "2 GB Storage",
      "Upto 4 pages",
      "Community support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Trading Ownership Tokens",
    popular: 1,
    price: 5,
    description:
      "When trading ownership tokens on secondary markets, a transaction fee of 1% of the transaction value (in Tefro tokens) is charged. This fee supports the maintenance and development of the platform.",
    buttonText: "Learn more",
    benefitList: [
      "4 Team member",
      "4 GB Storage",
      "Upto 6 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
  {
    title: "Premium Listing",
    popular: 0,
    price: 500,
    description:
      "Startups can opt for a premium listing on the Tefro platform for increased visibility. This service costs 500 Tefro tokens per month and includes featured placement and promotional support.",
    buttonText: "Contact US",
    benefitList: [
      "10 Team member",
      "8 GB Storage",
      "Upto 10 pages",
      "Priority support",
      "lorem ipsum dolor",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Fees
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Guide{" "}
        </span>
      </h2>
      <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Required Tefro Tokens for Platform Activities
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingList.map((pricing: PricingProps) => (
          <Card
            key={pricing.title}
            className={
              pricing.popular === PopularPlanType.YES
                ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10"
                : ""
            }
          >
            <CardHeader>
              <CardTitle className="flex item-center justify-between">
                {pricing.title}
                {/* {pricing.popular === PopularPlanType.YES ? (
                  <Badge variant="secondary" className="text-sm text-primary">
                    Most popular
                  </Badge>
                ) : null} */}
              </CardTitle>
              <div>
                <span className="text-3xl font-bold">{pricing.price}</span>
                <span className="text-muted-foreground"> TFT</span>
              </div>

              <CardDescription>{pricing.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <Button className="w-full">{pricing.buttonText}</Button>
            </CardContent>

            <hr className="w-4/5 m-auto mb-4" />

            {/* <CardFooter className="flex">
              <div className="space-y-4">
                {pricing.benefitList.map((benefit: string) => (
                  <span key={benefit} className="flex">
                    <Check className="text-green-500" />{" "}
                    <h3 className="ml-2">{benefit}</h3>
                  </span>
                ))}
              </div>
            </CardFooter> */}
          </Card>
        ))}
      </div>
    </section>
  );
};
