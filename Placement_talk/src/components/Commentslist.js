import React from 'react';

const Commentslist = ({ comments }) => {
  return (
    <>
      <h3 className='sm:text-2xl text-xl font-bold my-6 text-gray-900'>
        Comments:
      </h3>
      {comments.length === 0 ? (
        <p className="text-gray-600">No comments yet.</p>
      ) : (
        comments.map((comment, index) => (
          <div key={index} className="mb-4">
            <h4 className='text-xl font-bold'>{comment.username}</h4>
            <p className='mt-1'>{comment.text}</p>
          </div>
        ))
      )}
    </>
  );
};

export default Commentslist;
