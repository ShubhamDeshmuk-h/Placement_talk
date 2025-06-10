import React from 'react';
import ArticleContent from './article-content';
import Articles from '../components/articles'; // fixed casing

const Articleslisting = () => {
  return (
    <div className='mb-20'>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        Articles
      </h1>
      <div className='container py-4 mx-auto'>
        <div className='flex flex-wrap -m-4'>
          <Articles articles={ArticleContent} />
        </div>
      </div>
    </div>
  );
};

export default Articleslisting;
