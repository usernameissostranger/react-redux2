import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  function GetShortValue(word, id) {
    if (word.length > 20) {
      return (
        <>
          {word.substr(0, 20)} <Link to={`/posts/${id}`}>More...</Link>
        </>
      );
    } else {
      return word;
    }
  }

  return (
    <div className='posts'>
      {posts.length !== 0 ? posts.map((item) => {
        return (
          <div className='post' key={item.id}>
            <strong>{item.id}</strong>
            <h1>{item.title}</h1>
            <p>{GetShortValue(item.body, item.id)}</p>
            <Link to={`/posts/${item.id}`}><button>Details</button></Link>
          </div>
        );
      }) : ''}
    </div>
  );
}

export default Main;
