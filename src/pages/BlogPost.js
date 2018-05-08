import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogPost = props => {
  const { date, excerpt, slug } = props.postInfo;
  return (
    <article className="blog-post">
      <a href="#" className="blog-post__category">
        programowanie
      </a>
      <header className="blog-post__header">
        <h3>
          <Link to={`/blog/${slug}`} className="blog-post__heading">
            {props.postInfo.title.rendered}
          </Link>
        </h3>
      </header>
      <p className="blog-post__paragraph">{props.postInfo.excerpt.rendered}</p>
      <p className="blog-post__post-time">{date}</p>
      <Link to={`/blog/${slug}`} className="btn blog-post__btn">
        Więcej
      </Link>
    </article>
  );
};

BlogPost.propTypes = {
  postInfo: PropTypes.obj
};

export default BlogPost;
