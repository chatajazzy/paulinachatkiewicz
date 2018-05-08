import React from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax } from 'gsap';

import BlogPost from './BlogPost';

class Blog extends React.Component {
  state = {
    posts: []
  };
  componentDidMount = () => {
    const targetObject1 = document.querySelector('.main__content-title');
    const targetObject2 = document.querySelector('.blog__posts');

    const stagingTimeline = new TimelineMax();

    stagingTimeline
      .from(targetObject1, 1, { y: 30, opacity: 0 })
      .from(targetObject2, 1, { y: 60, opacity: 0 });

    stagingTimeline.play();

    const postsApi = 'http://testwordpress.test//wp-json/wp/v2/posts';

    fetch(postsApi)
      .then(response => response.json())
      .then(response => {
        console.log('responseBlog', response);
        this.setState({
          posts: response
        });
      })
      .catch(error => {
        console.log('error: ', error);
      });
  };

  render() {
    let posts = this.state.posts.map(post => {
      return <BlogPost key={post.id} postInfo={post} />;
    });
    return (
      <div>
        <div className="main__wrapper">
          <section className="main__content">
            <header className="main__content-header">
              <h2 className="main__content-title">Blog</h2>
            </header>
            <section className="blog__posts">{posts}</section>
          </section>
        </div>
      </div>
    );
  }
}

export default Blog;
