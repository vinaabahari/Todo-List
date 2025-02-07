import React, { Component } from 'react';

function PostDataComponent() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log('Success:',   
   data))
        .catch((error) => console.error('Error:', error));
    };
  
    return (
        <form onSubmit={handleSubmit}>   
    
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}   
    
          ></textarea>
          <button   
     type="submit">Submit</button>
        </form>
      );
    }
    
    export default PostDataComponent;
  