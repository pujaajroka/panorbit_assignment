import {createSlice} from "@reduxjs/toolkit";

const usersSlice = createSlice({
   name: "usersDetails",
   initialState:{
       users:[],
       activeUser: {}
   },
   reducers:{
       saveUsers:(state,action)=>{
           state.users = action.payload //payload is a new product
       },
       addUsers:(state,action)=>{
        state.users = [...state.users, action.payload] //payload is a new product
       },
       addActiveUser:(state, action) => {
         state.activeUser = action.payload;
       }
   }
})

export const {saveUsers, addUsers, addActiveUser} = usersSlice.actions;
export default usersSlice.reducer;