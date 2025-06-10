//creaeting reusable component so that we can display all the list to user

import React from 'react';

import {Link} from 'react-router-dom';

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((Article, index) => (
        <div key={index} className='p-4 md:w-1/2'>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
            <Link to={`/article/${Article.name}`}>
              <img
                className='lg:h-47 md:h-36 w-full object-cover object-center'
                src={Article.thumbnail}
                alt='blog'
              />
            </Link>
            <div className='p-6'>
              <Link to={`/article/${Article.name}`}>
                <h3 className='text-lg font-medium text-gray-900'>
                  {Article.title}
                </h3>
              </Link>
              <p className='leading-relaxed mb-3'>
                {Article.content[0].substring(0, 100)}...
              </p>
              <div className='flex items-center flex-wrap'>
                <Link
                  className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
                  to={`/article/${Article.name}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
