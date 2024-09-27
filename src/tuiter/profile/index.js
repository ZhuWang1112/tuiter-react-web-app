import {useSelector} from "react-redux";
import "../index.css";
import {Link} from "react-router-dom";
const ProfileComponent = () => {

    const profile = useSelector(state => state.profile);
    return (
        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center">
                    <Link to="/tuiter/explore" className="bi bi-arrow-left text-dark"></Link>
                </div>
                <div className="col-11">
                    <div>
                        <h4>{profile.firstName} {profile.lastName}</h4>
                        <div className="wd-color-gray">6,114 tweets</div>
                    </div>
                </div>
            </div>
            <div className="position-relative mt-2">
                <img src={`/images/${profile.bannerPicture}`} className="w-100" style={{height: '250px', objectFit:'cover'}}/>
                <img src={`/images/${profile.profilePicture}`} className="position-absolute wd-nudge-down wd-profile-image"/>
                <Link to="/tuiter/edit-profile" className="btn btn-outline-dark float-end mt-3 me-3 rounded-pill">Edit profile</Link>
            </div>
            <div className="wd-blank"></div>
            <div >
                <h4>{profile.firstName} {profile.lastName}</h4>
                <div className="wd-color-gray">{profile.handle}</div>
                <div className="mt-3 mb-3">{profile.bio}</div>
                <div className="wd-color-gray">
                    <i className="bi bi-geo-alt"></i>
                    <span> {profile.location}</span>
                    <i className="bi bi-balloon ms-3"></i>
                    <span> Born {profile.dateOfBirth}</span>
                    <i className="bi bi-calendar3 ms-3"></i>
                    <span> Joined {profile.dateJoined}</span>
                </div>
                <div className="mt-3">
                    <b>{profile.followingCount}</b>
                    <span className="wd-color-gray ms-1 me-3">Following</span>
                    <b>{profile.followersCount}</b>
                    <span className="wd-color-gray ms-1">Followers</span>
                </div>
            </div>

        </>
    );
}
export default ProfileComponent;