import React, { useState } from 'react';
import {connect} from 'react-redux'

const Post = (props) => {
    console.log(props)
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>{props.post.post}</p>
      <button
       onClick={() => props.dispatch({
        type: 'EDIT_POST',
        id: props.post.id
    })}
    >Edit</button>
      <button
        onClick={() => props.dispatch({
            type: 'DELETE_POST',
            id: props.post.id
        })}
      >Delete</button>
    </div>
  );
 }

export default connect()(Post);