import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.css';

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch(error => console.error('Error fetching post details:', error));
  }, [id]);

  return (
    <div className='post-details'>
      {post.id ?
        <div>
          <Link to='/'>Back</Link>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        : <p>Loading...</p>
      }
    </div>
  );
};

export default PostDetails;
