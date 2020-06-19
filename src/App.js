import React from 'react';
import PostForm from './pages/PostForm'
import AllPost from './pages/AllPost'

const  App = () => {

  return (
    <div>
      <h1>Redux CRUD</h1>
      <PostForm />
      <AllPost />
    </div>
  );
}

export default App;
