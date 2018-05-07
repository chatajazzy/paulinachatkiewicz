import React from 'react';

const BlogPostDetails = props => {
  return (
    <article className="blog-post-details">
      <header>
        <h1 className="blog-post-details__title">{props.title}</h1>
      </header>
      <p className="blog-post-details__paragraph">{props.content}</p>
    </article>
  );
};

export default BlogPostDetails;
