import React from "react";

function Article({ info }) {
  return (
    <article>
      <a href={info.link}>
        <header>
          <h2>{info.title}</h2>
          <img src={info.media} alt={info.title} />
        </header>
      </a>
      <main>
        <section>{info.summary}</section>
      </main>
    </article>
  );
}

export default Article;
