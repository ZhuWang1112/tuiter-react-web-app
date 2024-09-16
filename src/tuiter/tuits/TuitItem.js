import React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEllipsis, faCircleCheck, faLink, faComment, faRetweet, faHeart, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";



const TuitItem = ({tuit}) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const review = tuit.tuit.replace(/@(\w+)/g, '<a href="/users/$1" style="text-decoration: none">@$1</a>');
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50} src={`/images/${tuit.image}`} className="wd-follow-image"/>
                </div>
                <div className="col-10">
                    <div>
                        <b>{tuit.userName} </b>
                        <FontAwesomeIcon icon={faCircleCheck} color="rgb(29, 161, 242)"/>
                        <span className="wd-color-gray"> {tuit.handle} · {tuit.time}</span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>
                    <div className="mb-2">
                        <span dangerouslySetInnerHTML={{__html: review}}></span>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
}

export default TuitItem;