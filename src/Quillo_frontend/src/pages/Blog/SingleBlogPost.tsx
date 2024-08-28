import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
const BlogPost: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real application, you'd fetch this content from an API or file
    const markdown = `
# What Is Tokenomics and Why Is It Important?

The crypto community uses a **set of overlapping and interrelated terms** such as **cryptoeconomics**, **cryptogovernance**, **token economics**, or **token engineering** to describe the discipline of designing token systems. In this post, we will outline the historic development of all these terms and explain how they are related to each other.

## The Origin of "Cryptoeconomics"

The term **cryptoeconomics** was casually coined within the Ethereum developer community, years after the Bitcoin whitepaper was first published and the Bitcoin network, along with similar blockchain networks, were deployed. This term is generally attributed to **Vitalik Buterin**. The earliest recorded citation is from a talk by **Vlad Zamfir**, which was later loosely formalized in blog posts and talks by Buterin. Although the term has gained traction in the broader developer and academic communities, it remains under-defined, possibly because it is used in so many different contexts.

Cryptoeconomics is **interdisciplinary by design** and requires a deep understanding of cryptography, economics, P2P computer networks, and—often overlooked—**political science**. It refers to the study of economic interactions in **untrusted environments**, where every actor could potentially be corrupt.

## Evolution of Cryptoeconomic Mechanisms

Since the emergence of Bitcoin's Proof-of-Work (PoW), many variations of PoW have been developed, as well as alternative cryptoeconomic mechanisms such as **Proof-of-Stake (PoS)** and its variations. These mechanisms were developed to provide a **security equilibrium** for blockchain networks, making them fault-tolerant and resistant to attack and collusion in the absence of trusted intermediaries.

However, the security of these networks depends on the resilience of the assumptions made about how anonymous network actors will react to economic incentives. The study of **how people react to incentives** has long been a field of economics, particularly **behavioral economics**, which has received too little recognition in the crypto space.

## The Role of Tokenomics

The term **token economics** or **tokenomics** is much more loosely defined. It emerged within the broader Web3 community, especially after the Ethereum network and similar blockchain networks made it possible for anyone to create tokens with just a few lines of code, without having to build their own blockchain network.

**Token economics** emerged from colloquial usage on social media and is used by many to describe the **economic design patterns** of different types of application tokens—from simple asset tokens to more complex tokens that govern decentralized organizations. Whether voting rights are included in this economic design seems to depend on the people using the term.

It is safe to say that the term **token economics** is less rigidly defined than **cryptoeconomics**, as it does not necessarily imply collusion-resistant mechanisms in a P2P network of untrusted actors.

### Our Perspective on Token Economics

We believe that the term **token economics** is **reductionist**, as it focuses on the economic part of the design while neglecting other relevant disciplines critical to the design of a token system. The design process of Web3 networks needs to account for not just economic incentives, but also **non-economic incentives** such as reputation and intrinsic motivation, as well as **political incentives** such as information rights, voting rights, executive rights, or arbitration rights.

Since Web3 provides a governance layer for the Internet, the process of designing **DAOs** and their tokens could also be referred to as **cryptogovernance**. However, many people currently use this term to describe the process of who gets to decide on protocol upgrades and how voting rights are distributed among network participants.

## Governance and Token Engineering

In theory, **governance** is a political science term that describes the general politics of a community, including their economic interactions—not just their political voting rights. Economic design is always a result of a **political worldview**. The type of economic system one wishes to create is a political decision.

There is no such thing as a completely free and unregulated market, much less in crypto-economic networks. Every blockchain/Web3/DAO network is governed by **rigid market rules** about who can transact, under what conditions, and how much tokenized rewards they can earn. These rules are **hard-coded** into their protocols. One might even say that Web3 networks are **planned economies on steroids**.

While the term **governance** should theoretically encompass questions of market design, voting rights, legislative rights, information rights, and executive rights, we are not fans of the term **cryptogovernance** because its interpretation varies widely and is often reduced to voting rights alone.

### Token Engineering

**Token Engineering** is a more interdisciplinary approach. It was first popularized by **Trent McConaghy** in his article, *Towards a Practice of Token Engineering*, where he defined token engineering as "the theory, practice, and tools to analyze, design, and verify tokenized ecosystems." Due to the **mission-critical** nature of Web3 networks, he decided to use the term **engineering** in a broader sense, arguing that "engineering is also a discipline of responsibility: being ethically and professionally accountable to the machines that you build..."

![Token Engineering Process](https://via.placeholder.com/600x300)

Trent emphasized that the design of token systems should become a field of **rigorous analysis, design, and verification** guided by a sense of responsibility. He drew parallels between creating token mechanisms and other disciplines that rely heavily on **mathematics** for optimization and decision-making, listing relevant scientific fields such as:

- Electrical Engineering
- Swarm Robotics
- Operations Research
- Software Engineering
- Civil Engineering
- Aerospace Engineering
- Complex Systems Design
- Public Policy Design
- Economics
- Robotics
- Machine Learning
- AI


We prefer the term **token engineering** over all other terms because it includes the principles of **accountability** and **safety** in the systems we build. Token engineering is a more **neutral term** than cryptoeconomics or cryptogovernance, while still implying rigorous principles and practices of **engineering ethics**.


## Conclusion

Regardless of the term used, or which term withstands the test of time, a **holistic approach** is required when designing token systems. From a practical perspective, the range of disciplines relevant for the design of token systems might seem broad and overwhelming.

To simplify, we suggest grouping the relevant fields into four subgroups:  

1. **Technical Engineering**
2. **Political Engineering**
3. **Economic Engineering**
4. **Legal Engineering**



 `;

    setContent(markdown);
    setLoading(false);
  }, []);

  const components = {
    h1: (props: any) => (
      <h1
        className="md:text-4xl  text-xl text-center font-bold my-4 mt-2 text-purple-600"
        {...props}
      />
    ),
    h2: (props: any) => (
      <h2 className="md:text-3xl text-lg text-center lg:text-left w-full font-bold md:my-3 my-1 text-indigo-400" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="md:text-2xl text-base text-center lg:text-left font-bold md:my-2  text-indigo-400" {...props} />
    ),
    p: (props: any) => (
      <p
        className="my-4  font-light text-sm md:text-lg text-gray-100 font-leagueSpartan"
        {...props}
      />
    ),
    img: (props: any) => (
      <div className="flex justify-center my-4">
        <img
          className="rounded md:w-[400px] w-full h-auto"
          {...props}
          style={{ maxWidth: "100%" }}
        />
      </div>
    ),
    ul: (props: any) => (
      <ul className="list-disc list-inside my-4 text-gray-200" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal list-inside my-4 text-gray-200" {...props} />
    ),
    li: (props: any) => <li className="my-2" {...props} />,
    strong: (props: any) => (
      <strong className="font-medium text-yellow-300" {...props} />
    ),
    em: (props: any) => <em className="italic text-blue-300" {...props} />,
    a: (props: any) => (
      <a className="text-cyan-500 hover:text-cyan-300 underline" {...props} />
    ),
  };
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div className="mt-24 mb-24  w-full h-full px-2 max-h-screen">
      <div className="mt-12  max-w-4xl mx-auto  font-jozi bg-[#1A2240]  border border-indigo-500 border-l-4 rounded-md py-4 px-6">
        <ReactMarkdown
          components={components}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
      <div className='rounded border border-indigo-500 max-w-4xl mx-auto bg-[#1A2240] text-gray-200 py-4 my-12 mb-64 flex flex-col items-center justify-center'>
  <span className='py-2 text-center text-lg font-semibold'>Enjoyed the read? Let's stay connected!</span>
  <span className='py-1 text-sm  font-leagueSpartan text-purple-700'>Share your thoughts or spread to your friends.</span>
  <div className='flex space-x-4 py-2'>
    <button className='bg-[#1414] border-blue-200 ring-[1px] ring-blue-200  ring-opacity-50 hover:bg-indigo-500 rounded-md text-center text-white py-1 px-4 rounded flex items-center space-x-2'>
      <i className='fas fa-share-alt'></i>
      <span>Share</span>
    </button>
    <button className='border border-indigo-600 hover:border-indigo-300 rounded-md text-center text-white py-1 px-4 rounded flex items-center space-x-2'>
      <i className='fas fa-comment'></i>
      <span>Comment</span>
    </button>
  </div>
</div>

    </div>
  );
};

export default BlogPost;
