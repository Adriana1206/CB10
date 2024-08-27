import React from 'react';

interface ICardProps {
  post: {
    title: string;
    description: string;
  };
}

const Card: React.FC<ICardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
      <a href="#" className="block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="object-cover w-full h-64 sm:h-80 lg:h-96"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {post.title}
          </h3>
          <p className="mt-2 text-gray-700">
            {post.description}
          </p>
        </div>
      </a>
    </article>
  );
};

export default Card;
