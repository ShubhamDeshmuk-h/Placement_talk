import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArticleContent from './article-content'; // Static article list
import Articles from '../components/articles';
import Commentslist from '../components/Commentslist';
import AddCommentForm from '../components/addcommentform';
import Pagenotfound from './pagenotfound';

const Article = () => {
  const { name } = useParams();
  const article = ArticleContent.find(article => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(`/api/article/${name}`);
        if (!result.ok) {
          throw new Error(`HTTP error! Status: ${result.status}`);
        }
        const body = await result.json();
        console.log("Fetched article info:", body);
        setArticleInfo(body);
      } catch (err) {
        console.error("Error fetching article info:", err);
      }
    };
    fetchData();
  }, [name]);

  if (!article) return <Pagenotfound />;

  const otherarticles = ArticleContent.filter(article => article.name !== name);

  return (
    <>
      <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
        {article.title}
      </h1>

      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ))}

      <Commentslist comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />

      <h1 className='sm:text-2xl text-xl font-bold my-4 text-gray-900'>Other Articles</h1>
      <div className='flex flex-wrap -m-4'>
        <Articles articles={otherarticles} />
      </div>
    </>
  );
};

export default Article;
