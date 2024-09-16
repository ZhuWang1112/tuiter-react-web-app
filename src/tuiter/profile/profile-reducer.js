import {createSlice} from "@reduxjs/toolkit";
import profile from './profile.json'

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        updateProfile: (state,action) => {
            for (var key in action.payload) {
                state[key] = action.payload[key];
            }
        }
    }
})

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;