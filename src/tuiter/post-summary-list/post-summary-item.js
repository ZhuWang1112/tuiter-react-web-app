import React from "react";
import "../index.css"

const PostSummaryItem = ({post}) => {
    return (
        <li className="list-group-item" style={{"display": "flex"}}>
            <div style={{"flex": "1"}}>
                <div className="wd-color-gray">{post.topic}</div>
                <div>
                    <b>{post.userName}</b>
                    <i className="fa-solid fa-circle-check"></i>
                    <span className="wd-color-gray"> - {post.time}</span>
                </div>
                <div>
                    <b>{post.title}</b>
                </div>
            </div>
            <div style={{"display": "flex","align-items": "center"}}>
                <img src={`/images/${post.image}`} className="wd-post-image"/>
            </div>
        </li>
    );
};

export default PostSummaryItem