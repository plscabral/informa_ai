export type Article = {
  // id: string;
  author: string;
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    id: number;
    name: string;
  };
}
