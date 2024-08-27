import Card from "@/components/Card";

export interface IPost {
  title: string;
  description: string; 
}

const blogposts: IPost[] = [
  {
    title: "Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    title: "Second Post Title.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    title: "Third Post Title.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    title: "Fourth Post Title.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    title: "Fifth Post Title.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
  {
    title: "Sixth Post Title.",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">The Art Post Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {blogposts.map((post, index) => (
          <Card key={index} post={post} />
        ))}
      </div>
    </main>
  );
}
