import { useState, useEffect } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [error, setError] = useState(""); // State to store errors

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Fetch data from the API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // Check if the response is OK
        if (!response.ok) {
          throw new Error("Failed to fetch posts. Please try again later.");
        }

        // Parse the JSON data
        const data = await response.json();
        setPosts(data); // Update the posts state
      } catch (error) {
        setError(error.message); // Update the error state
      }
    };

    fetchPosts(); // Call the fetch function
  }, []);

  // Render error message if there's an error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render the list of posts
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.id}. {post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;