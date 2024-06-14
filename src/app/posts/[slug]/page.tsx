"use client";
import { useParams } from 'next/navigation'

import React, {useState, useEffect} from 'react';

export default function Page() {
    const params = useParams<{ slug: string; }>()

    type Post = {
        title: string;
        description: string;
        slug: string;
        content: string;
    };

    const [post, setPost] = useState<Post>();
    useEffect(() => {
    fetch('/api/v1/posts/' + params.slug)
        .then(response => response.json())
        .then(json => setPost(json))
        .catch(error => console.error(error));
    }, []);
  
    return (
        <>
            <main id="conteudo">
                <article className="post">
                    <header>
                        <h1>{post?.title}</h1>
                        <h2>{post?.description}</h2>
                    </header>
                    <section>
                        <p>{post?.content}</p>
                    </section>
                </article>
            </main>
         </>
    );
}
