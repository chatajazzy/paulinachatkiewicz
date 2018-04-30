import React from 'react';

class Blog extends React.Component {
  render() {
    return (
      <div className="main__wrapper">
        <section className="main__content">
          <header className="main__content-header">
            <h2 className="main__content-title">Blog</h2>
          </header>
          <div className="blog__categories">blog-categories</div>
          <div className="blog__search">blog-search</div>
          <section className="blog__posts">
            <header className="blog__posts-header">
              <h2 className="blog__posts-heading">Najnowsze wpisy</h2>
            </header>
            <article className="blog-post">
              <a href="#" className="blog-post__category">
                programowanie
              </a>
              <header className="blog-post__header">
                <h3>
                  <a href="#" className="blog-post__heading">
                    Tytul wpisu
                  </a>
                </h3>
              </header>
              <p className="blog-post__paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                similique quos vel illo, dolorem eum veniam non ipsam beatae
                aperiam itaque voluptas incidunt? Possimus nisi sit unde
                accusamus exercitationem fuga!
              </p>
              <p className="blog-post__post-time">21 minut temu</p>
            </article>
            <article className="blog-post">
              <a href="#" className="blog-post__category">
                programowanie
              </a>
              <header className="blog-post__header">
                <h3>
                  <a href="#" className="blog-post__heading">
                    Tytul wpisu
                  </a>
                </h3>
              </header>
              <p className="blog-post__paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                similique quos vel illo, dolorem eum veniam non ipsam beatae
                aperiam itaque voluptas incidunt? Possimus nisi sit unde
                accusamus exercitationem fuga!
              </p>
              <p className="blog-post__post-time">21 minut temu</p>
            </article>
            <article className="blog-post">
              <a href="#" className="blog-post__category">
                programowanie
              </a>
              <header className="blog-post__header">
                <h3>
                  <a href="#" className="blog-post__heading">
                    Tytul wpisu
                  </a>
                </h3>
              </header>
              <p className="blog-post__paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                similique quos vel illo, dolorem eum veniam non ipsam beatae
                aperiam itaque voluptas incidunt? Possimus nisi sit unde
                accusamus exercitationem fuga!
              </p>
              <p className="blog-post__post-time">21 minut temu</p>
            </article>
            <article className="blog-post">
              <a href="#" className="blog-post__category">
                programowanie
              </a>
              <header className="blog-post__header">
                <h3>
                  <a href="#" className="blog-post__heading">
                    Tytul wpisu
                  </a>
                </h3>
              </header>
              <p className="blog-post__paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                similique quos vel illo, dolorem eum veniam non ipsam beatae
                aperiam itaque voluptas incidunt? Possimus nisi sit unde
                accusamus exercitationem fuga!
              </p>
              <p className="blog-post__post-time">21 minut temu</p>
            </article>
          </section>
        </section>
      </div>
    );
  }
}

export default Blog;
