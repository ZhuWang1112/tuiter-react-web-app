import React from "react";
import postArray from "./posts.json";
import PostItem from "./post-item";


const HomeComponent = () => {
    return(
            <ul className="list-group">
                {
                    postArray.map(post => <PostItem key={post._id} post={post}/>)
                }
            </ul>
    );
}

export default HomeComponent;