const PostSummaryItem = (post) => {
    return(`
<li class="list-group-item" style="display: flex; align-items: center;">
    <div style="flex: 1;">
        <div class="wd-color-gray">${post.topic}</div>
        <div>
            <b>${post.userName}</b>
            <i class="fa-solid fa-circle-check"></i>
            <span class="wd-color-gray"> - ${post.time}</span>
        </div>
        <div>
            <b>${post.title}</b>
        </div>
    </div>
    <div>
        <img src=${post.image} class="wd-post-image">
    </div>
</li>
    `);
}

export default PostSummaryItem;