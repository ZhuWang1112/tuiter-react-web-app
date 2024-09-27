import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./post.js";

const PostSummaryList = () => {
    return(`
        <ul class="list-group">
            ${
                posts.map(post => {
                    return (PostSummaryItem(post))
                }).join('')
            }
        </ul>
    `);
}

//test in index.html
function test() {
    $('#wd-test').append(PostSummaryList);
}
$(test);

export default PostSummaryList;