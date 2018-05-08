import React from 'react';
import PropTypes from 'prop-types';

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

BlogPostDetails.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string
};

export default BlogPostDetails;
