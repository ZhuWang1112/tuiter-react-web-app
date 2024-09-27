import {createSlice} from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../../services/tuits-thunks";

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "disliked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
}

const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true;
                state.tuits = [];
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits = payload;
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false;
                state.error = action.error;
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false;
                state.tuits = state.tuits.filter(t => t._id !== payload);
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                state.tuits.push({...templateTuit, ...payload});
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false;
                const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                };
            }

    },
    reducers: {
        likeThisTuit: (state, action) => {
            const tuit = state.find((tuit) => tuit._id === action.payload._id)
            tuit.liked = !tuit.liked;
            if (tuit.liked) {
                tuit.likes++;
            } else {
                tuit.likes--;
            }
        },
        createTuit: (state, action) => {
            state.unshift({
                ...templateTuit,
                ...action.payload,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit: (state, action) => {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index, 1);
        }
    }
});

export default tuitsSlice.reducer;
export const {likeThisTuit, createTuit, deleteTuit} = tuitsSlice.actions
