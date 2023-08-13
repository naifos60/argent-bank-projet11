import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   email: "",
   password: "",
   firstName: "",
   lastName: "",
   userName: ""
}

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setProfil: (state, action) => {
            state.email = action.payload
            state.password = action.payload
            state.firstName = action.payload
            state.lastName = action.payload
            state.userName = action.payload
        }
    }
})

export const {setProfil} = profilSlice.actions;
export default profilSlice.reducer;