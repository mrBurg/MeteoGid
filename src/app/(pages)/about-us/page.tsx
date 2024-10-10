'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}?q=Odesa&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const { main } = await data.json();

      setPosts(main);
    };

    fetchPosts();
  }, []);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {Object.entries(posts).map((post) => (
        <li key={post[0]}>
          {post[0]}
          &nbsp;
          {post[1]}
        </li>
      ))}
    </ul>
  );
}
