import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   email: "",
   password: "",
   firstName: "",
   lastName: "",
   userName: "",
   log: false
}

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setProfil: (state, {payload}) => {
            state.email = payload
            state.password = payload
            state.firstName = payload
            state.lastName = payload
            state.userName = payload
        }
    }
})

export const {setProfil} = profilSlice.actions;
export default profilSlice.reducer;