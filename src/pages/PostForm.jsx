import React, { useState } from 'react';
import {connect} from 'react-redux'

const PostForm = (props) => {
    const [title,setTitle] = useState('')
    const [post,setPost] = useState('')

    const handleSubmit = () => {
        const data = {
            id : new Date(),
            title: title,
            post: post,
            editing: false
        }

        //console.log(data)

        props.dispatch({
            type : 'ADD_POST', data
        })

        setTitle('')
        setPost('')
    }

    return (
        <div>
            <h1>Create Post</h1>
            <div>
                <input required type="text" placeholder="Enter Post Title" onChange={(e) => setTitle(e.target.value)} value={title} /><br /><br />
                <textarea required rows="5" cols="28" placeholder="Enter Post" onChange={(e) => setPost(e.target.value)}  value={post} /><br /><br />
                <button onClick={handleSubmit}>Post</button>
            </div>
        </div>
    );

}
export default connect()(PostForm);