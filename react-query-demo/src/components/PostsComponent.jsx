import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query to fetch data with advanced options
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['posts'], // Unique key for caching
    queryFn: fetchPosts, // Function to fetch data
    cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
    staleTime: 1000 * 60 * 1, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when the window regains focus
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch} style={{ marginBottom: '20px' }}>
        {isFetching ? 'Refreshing...' : 'Refresh Posts'}
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id} style={{ marginBottom: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;