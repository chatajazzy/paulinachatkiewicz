import React, { Component } from 'react';
import BlogPostDetails from './BlogPostDetails';

export default class BlogPostPage extends Component {
  state = {
    postTitle: '',
    postContent: ''
  };
  componentDidMount() {
    const postSlug = this.props.match.params.id;
    const postApi = `http://testwordpress.test//wp-json/wp/v2/posts?slug=${postSlug}`;
    fetch(postApi)
      .then(response => response.json())
      .then(response => {
        console.log('responseBlogPostPage', response);

        this.setState({
          postTitle: response[0].title.rendered,
          postContent: response[0].content.rendered
        });
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }

  render() {
    return (
      <section className="blog-post-page">
        <BlogPostDetails
          title={this.state.postTitle}
          content={this.state.postContent}
        />
      </section>
    );
  }
}
