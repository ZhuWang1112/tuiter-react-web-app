import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faComment, faHeart, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {likeThisTuit} from "./tuits-reducer";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row wd-color-gray mt-2">
            <div className="col-3">
                <FontAwesomeIcon icon={faComment}/>
                <span>  {tuit.replies}</span>
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faRetweet}/>
                <span>  {tuit.retuits}</span>
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faHeart} color={tuit.liked ? "red" : "inherit"} onClick={() => dispatch(likeThisTuit(tuit))}/>
                <span>  {tuit.likes}</span>
            </div>
            <div className="col-3">
                <FontAwesomeIcon icon={faArrowUpFromBracket}/>
            </div>
        </div>
    );
}

export default TuitStats;