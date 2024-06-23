"use client";

import Link from "next/link"
import React, {useState, useEffect} from "react";

export default function Home() {

  type Post = {
    title: string;
    description: string;
    slug: string;
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/api/v1/posts/all')
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <>
      <main id="conteudo">
        <article id="sobre-mim">
          <header>
              <h1>Posts</h1>
          </header>
          {
            posts.map((post: Post) => {
              return (
                <section className="post-card" key={post.slug}>
                  <h1><Link href={{pathname: `/posts/${post.slug}`}}>{post.title}</Link></h1>
                  <p>{post.description}</p>
                </section>
              )
            })
          }
        </article>
      </main>
    </>
  );
}
