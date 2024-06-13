"use client";
import { useParams } from 'next/navigation'

import React, {useState, useEffect} from 'react';

export default function Page() {
    const params = useParams<{ slug: string; }>()

    type Post = {
        title: string;
    };

    const [post, setPost] = useState<Post>();
    useEffect(() => {
    fetch('/api/v1/posts/' + params.slug)
        .then(response => response.json())
        .then(json => setPost(json))
        .catch(error => console.error(error));
    }, []);
  
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>{post?.title}</h1>
        </main>
    );
}
