import React from 'react';

interface ICardProps {
  post: {
    title: string;
    description: string;
    src: string;
  };
}

const Card: React.FC<ICardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-xl w-full">
      <a href={post.src} className="block flex flex-col h-full">
        <div className="relative h-64 sm:h-80 lg:h-96">
          <img
            alt=""
            src={post.src}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl lg:text-2xl text-center">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-700 text-sm sm:text-base lg:text-lg text-center">
            {post.description}
          </p>
        </div>
      </a>
    </article>
  );
};

export default Card;
