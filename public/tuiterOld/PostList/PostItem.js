const PostItem = (post) => {

    //check
    const isEmpty = !post.title && !post.content && !post.source;
    // const link = !post.source;

    return(`
<li class="list-group-item">
    <div class="row">
        <div class="col-2">
            <img src=${post.avatarIcon} class="wd-follow-image">
        </div>
        <div class="col-10">
            <div>
                <b>${post.userName}</b>
                <i class="fa-solid fa-circle-check"></i>
                <span class="wd-color-gray">@${post.handle} · ${post.time}</span>
                <i class="fa-solid fa-ellipsis float-end"></i>
            </div>
            <div class="mb-2">
                ${post.review}
            </div>
            <ul class="list-group wd-cut rounded-4">
                <li class="list-group-item p-0 wd-border-bold">
                    <img src=${post.image} width="100%">
                </li>
                <li class="list-group-item wd-border-bold ${isEmpty ? 'd-none' : ''}">
                    <div>
                        ${post.title}
                    </div>
                    <div class="wd-color-gray">
                        ${post.content}
                    </div>
                    <div class="wd-color-gray">
                        <i class="fa-solid fa-link"></i>
                        <span>${post.source}</span>
                    </div>
                </li>
            </ul>
            <div class="row wd-color-gray mt-2">
                <div class="col-3">
                    <i class="fa-solid fa-comment"></i>
                    <span>  ${post.comments}</span>
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-retweet"></i>
                    <span>  ${post.retweet}</span>
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-heart"></i>
                    <span>  ${post.likes}</span>
                </div>
                <div class="col-3">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
            </div>
        </div>
    </div>
</li>
    `);
}

export default PostItem;