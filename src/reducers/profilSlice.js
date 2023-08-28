import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { logUser } from "../services";


const initialState = {
   user: null,
   error: false,
   isLoading: false,
   token: null,
}

export const logIn = createAsyncThunk(
    'profil/logIn',
    async (identify) => {
      const result = await logUser(identify).then(data => {
        const token = data.body?.token;
        if(identify.checked){
        localStorage.setItem('token', token);
        }
        console.log(identify.checked);
        sessionStorage.setItem('token', token);
        return data
        
    })
    return result;
});

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setProfil: (state, {payload}) => {
            state.user = payload
        },
        setError: (state, {payload}) => {
            state.error = payload
        },
        setIsLoading: (state, {payload}) => {
            state.isLoading = payload
        },
        setToken: (state, {payload}) => {
            state.token = payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, (state) => {
          state.isLoading = true;
          state.user = null;
          state.error = false;
        })
        builder.addCase(logIn.fulfilled, (state, {payload}) => {
          console.log(payload)
          state.isLoading = false;
          state.token = payload.body?.token;
          state.error = false;
        })
        builder.addCase(logIn.rejected, (state) => {
          state.isLoading = false;
          state.user = null;
          state.error = true;
        })
      }
})

export const {setProfil, setError, setIsLoading, setToken} = profilSlice.actions;
export default profilSlice.reducer;