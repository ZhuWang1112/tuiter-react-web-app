const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-lg-2 col-xl-2 col-xxl-2 d-flex align-items-center">
                    <img src=${who.avatarIcon} class="wd-follow-image">
                </div>
                <div class="col-lg-6 col-xl-7 col-xxl-7">
                    <div class="d-flex align-items-center">
                        <b class="wd-nowrap">${who.userName}&nbsp;</b> <i class="fa-solid fa-circle-check"></i>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-lg-4 col-xl-3 col-xxl-3 d-flex align-items-center">
                    <form>
                        <button type="submit" class="btn btn-primary wd-btn-tweet">Follow</button>
                    </form>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;