import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeUserName,logUser } from "../services";


const initialState = {
   user: null,
   userName: null,
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
    if(result.status === 200){
      return result;
    }
    else{
      throw new Error(result.message);
    }
    
});

export const changeTheUserName = createAsyncThunk(
  'profil/changeTheUserName',
  async (userName) => {
    const result = await changeUserName(userName);
    return result;
  }
)

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setProfil: (state, {payload}) => {
            state.user = payload
        },
        setTheUserName: (state, {payload}) => {
          state.userName = payload
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
        builder.addCase(changeTheUserName.pending, (state) => {
          state.isLoading = true;
          state.user = null;
          state.error = false;
        })
        builder.addCase(changeTheUserName.fulfilled, (state, {payload}) => {
          console.log(payload)
          state.isLoading = false;
          state.userName = payload.body?.userName;
          state.error = false;
        })
        builder.addCase(changeTheUserName.rejected, (state) => {
          state.isLoading = false;
          state.user = null;
          state.error = true;
        })
      }
})

export const {setProfil, setError, setIsLoading, setToken, setTheUserName} = profilSlice.actions;
export default profilSlice.reducer;