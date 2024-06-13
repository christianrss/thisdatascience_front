"use client";

import Image from "next/image";
import React, {useState, useEffect} from 'react';

export default function Home() {

  type Post = {
    title: string;
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('/api/v1/posts/all')
      .then(response => response.json())
      .then(json => setPosts(json))
      .catch(error => console.error(error));
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Teste</h1>
      {
        posts.map((post: Post) => {
          return (
            <div>
              {post.title}
            </div>
          )
        })
      }
    </main>
  );
}
