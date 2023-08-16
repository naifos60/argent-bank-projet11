import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   email: "",
   password: "",
   firstName: "",
   lastName: "",
   userName: "",
}

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setProfil: (state, {payload}) => {
            state.profil = payload
        }
    }
})

export const {setProfil} = profilSlice.actions;
export default profilSlice.reducer;