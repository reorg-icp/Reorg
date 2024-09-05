export interface Article {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    readTime: number;
  }
  
  export interface BlogSectionProps {
    articles: Article[];
  }

export const articless:Article[] = [
    {
      id: 1,
      title: "Our first office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      readTime: 2
    },
    {
      id: 2,
      title: "Our first office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      readTime: 2
    },
    {
      id: 3,
      title: "Our first office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      readTime: 2
    },
    {
      id: 4,
      title: "Our first office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      readTime: 2
    },
    {
      id: 5,
      title: "Our first office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      readTime: 2
    },
    {
      id: 6,
      title: "Our first office",
      content: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      imageUrl: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      readTime: 2
    },
    // ... add more articles here
  ];
