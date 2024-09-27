import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
          <form class="mb-2">
             <div class="row">
                       <!-- search field and cog -->
                <div class="col-11 d-flex align-items-center">
                    <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Twitter">
                    <i class="fas fa-search position-absolute ms-3" ></i>
                </div>
                <div class="col-1 d-flex align-items-center ml-auto">
                    <a href="#">
                        <i class="fas fa-cog wd-settings-link fs-5"></i>
                    </a>
                </div>
            </div>
         </form>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <ul class="list-group">
                <li class="list-group-item p-0">
                    <img src="../../images/Starship.png" width="100%">
                    <span class="position-absolute bottom-0 start-0 p-2 wd-bottom-left">SpaceX's Starship</span>
                </li>
           </ul>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
