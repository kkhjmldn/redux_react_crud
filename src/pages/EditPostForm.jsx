import React, { useState } from 'react';
import {connect} from 'react-redux'

const EditPostForm = (props) => {
    const [title,setTitle] = useState(props.post.title)
    const [post,setPost] = useState(props.post.post)

    const handleUpdate = () => {
        const data = {
            newTitle: title,
            newPost: post,
        }


        props.dispatch({
            type : 'UPDATE_POST',id: props.post.id ,data: data
        })

        setTitle(props.post.title)
        setPost(props.post.post)
    }

    return (
        <div>
            <div>
                <input required type="text" placeholder="Enter Post Title" onChange={(e) => setTitle(e.target.value)} value={title} /><br /><br />
                <textarea required rows="5" cols="28" placeholder="Enter Post" onChange={(e) => setPost(e.target.value)}  value={post} /><br /><br />
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );

}
export default connect()(EditPostForm);