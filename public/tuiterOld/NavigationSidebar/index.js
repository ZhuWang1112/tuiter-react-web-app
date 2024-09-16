const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action" id="btnHome">
                <i class="fa fa-home"></i><span class="d-none d-xl-inline"> Home</span></a>
     <a href="../ExploreScreen/index.html" class="list-group-item list-group-item-action" id="btnExplore">
        <i class="fa fa-hashtag"></i> <span class="d-none d-xl-inline"> Explore</span></a>
     <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span></a>
     <a href="#" class="list-group-item list-group-item-action">
        <i class="fa fa-envelope"></i><span class="d-none d-xl-inline"> Messages</span></a>
     <a href="#" class="list-group-item list-group-item-action ">
        <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span></a>
     <a href="#" class="list-group-item list-group-item-action ">
        <i class="fa fa-list"></i><span class="d-none d-xl-inline"> Lists</span></a>
     <a href="#" class="list-group-item list-group-item-action ">
        <i class="fa fa-user"></i><span class="d-none d-xl-inline"> Profile</span></a>
     <a href="#" class="list-group-item list-group-item-action ">
        <i class="fa-solid fa-circle"></i><span class="d-none d-xl-inline"> More</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}

// just for test in index.html
function testNavBar() {
    $('#wd-navbar').append(NavigationSidebar);
}
$(testNavBar);




export default NavigationSidebar;
