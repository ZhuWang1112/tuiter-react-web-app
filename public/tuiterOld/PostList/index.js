import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return(`
    <ul class="list-group">
            ${
        posts.map(post => {
            return (PostItem(post))
        }).join('')
    }
    </ul>
    `);
}

//test in index.html

function test() {
    $('#wd-test').append(PostList);
}
$(test);

export default PostList;