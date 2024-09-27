import React from "react";
import { faHome, faHashtag, faBell, faEnvelope, faBookmark, faList, faUser, faCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faHome}/><span className="d-none d-xl-inline"> Home</span></Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faHashtag}/><span className="d-none d-xl-inline"> Explore</span></Link>
            <Link to="/" className="list-group-item"> Labs</Link>
            <Link className={`list-group-item ${active === 'notifications' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faBell}/><span className="d-none d-xl-inline"> Notifications</span></Link>
            <Link className={`list-group-item ${active === 'messages' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faEnvelope}/><span className="d-none d-xl-inline"> Messages</span></Link>
            <Link className={`list-group-item ${active === 'bookmarks' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faBookmark}/><span className="d-none d-xl-inline"> Bookmarks</span></Link>
            <Link className={`list-group-item ${active === 'lists' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faList}/><span className="d-none d-xl-inline"> Lists</span></Link>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faUser}/><span className="d-none d-xl-inline"> Profile</span></Link>
            <Link className={`list-group-item ${active === 'more' ? 'active' : ''} list-group-item-action`}>
                <FontAwesomeIcon icon={faCircle}/><span className="d-none d-xl-inline"> More</span></Link>
        </div>
    )
};
export default NavigationSidebar;