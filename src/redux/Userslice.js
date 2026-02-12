import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        admin_mamber: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAdminMember: (state, action) => {
            state.admin_mamber = action.payload;
        }

    }
})

export const {setUser, setAdminMember} = userSlice.actions;
export default userSlice.reducer;