import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {updateProfile} from "./profile-reducer";
import {Navigate} from "react-router";


const EditProfile = () => {
    const profile = useSelector(state => state.profile);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);
    const quitEditProfile = () => {
        navigate('/tuiter/profile');
    }
    const saveProfile = () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }
        dispatch(updateProfile(data));
        navigate('/tuiter/profile');
    }
    return (
        <>
            <div className="row">
                <div className="col-1 d-flex align-items-center">
                    <i className="bi bi-x-lg float-end"
                       onClick={quitEditProfile}></i>
                </div>
                <div className="col-11">
                    <div>
                        <h4 className="float-start">Edit Profile</h4>
                        <button className="btn btn-outline-dark float-end rounded-pill" onClick={saveProfile}>Save</button>
                    </div>

                </div>
            </div>
            <div className="position-relative mt-2">
                <img src={`/images/${profile.bannerPicture}`} className="w-100" style={{height: '250px', objectFit:'cover'}}/>
                <img src={`/images/${profile.profilePicture}`} className="position-absolute wd-nudge-down wd-profile-image"/>
            </div>
            <div className="wd-blank"></div>
            <div>
                <form>
                    <div className="form-floating">
                        <input
                            type="text" className="form-control" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                        <label htmlFor="floatingInput">First Name</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="text" className="form-control" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                        <label htmlFor="floatingInput">Last Name</label>
                    </div>
                    <div className="form-floating mt-2">
                        <textarea className="form-control" value={bio} onChange={(e)=> setBio(e.target.value)}/>
                        <label htmlFor="floatingInput">Bio</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="text" className="form-control" value={location} onChange={(e)=> setLocation(e.target.value)}/>
                        <label htmlFor="floatingInput">Location</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="text" className="form-control" value={website} onChange={(e)=> setWebsite(e.target.value)}/>
                        <label htmlFor="floatingInput">Website</label>
                    </div>
                    <div className="form-floating mt-2">
                        <input
                            type="date" className="form-control" value={dateOfBirth} onChange={(e)=> setDateOfBirth(e.target.value)}/>
                        <label htmlFor="floatingInput">Birth date</label>
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditProfile;
