import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpFromBracket, faComment, faHeart, faRetweet} from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {likeThisTuit} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return (
        <div className="row wd-color-gray mt-2">
            <div className="col-3">
                <i className="bi bi-chat me-1"></i>
                <span>{tuit.replies}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-repeat me-1"></i>
                <span>{tuit.retuits}</span>
            </div>
            <div className="col-3">
                <i className="bi bi-heart-fill me-1" style={{ color: tuit.liked ? 'red' : 'inherit' }} onClick={() => {
                    dispatch(updateTuitThunk({...tuit, likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1, liked: !tuit.liked}));
                }}/>
                <span>{tuit.likes}</span>
            </div>
            <div className="col-2">
                <i className="bi bi-hand-thumbs-down-fill me-1" style={{ color: tuit.disliked ? 'black' : 'lightgray' }} onClick={() => {
                    dispatch(updateTuitThunk({...tuit, dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1, disliked: !tuit.disliked}));
                }}/>
                <span>{tuit.dislikes}</span>
            </div>
            <div className="col-1">
                <i className="bi bi-box-arrow-up"></i>
            </div>
        </div>
    );
}

export default TuitStats;