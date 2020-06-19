import React from 'react';
import {connect} from 'react-redux'
import Post from './Post'
import EditPostForm from './EditPostForm'
const AllPost = (props) => {
    return (
        <div>
            <h1>All Posts</h1>
            {props.posts.map((post) => (
                <div key={post.id} >
                    {post.editing ? <EditPostForm post = {post} id={post.id} /> : <Post  post = {post} id={post.id}/> }
                </div>
            ))}

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        posts : state
    }
}

export default connect(mapStateToProps)(AllPost);