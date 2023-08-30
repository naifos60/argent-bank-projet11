import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeUserName,getUserInfo,logUser } from "../services";


const initialState = {
   firstName: null,
   lastName: null,
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
    if(result.status === 200){
      return result;
    }
    else{
      throw new Error(result.message);
    }
});

export const getUser = createAsyncThunk(
  'profil/getUser',
  async () => {
    const result = await getUserInfo()
    if(result.status === 200){
      return result;
    }
    throw new Error(result.message);
});

const profilSlice = createSlice({
    name: 'profil',
    initialState,
    reducers: {
        setFirstName: (state, {payload}) => {
            state.firstName = payload
        },
        setLastName: (state, {payload}) => {
          state.lastName = payload
      },
        setUserName: (state, {payload}) => {
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
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = false;
        })
        builder.addCase(logIn.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.token = payload.body?.token;
          state.error = false;
        })
        builder.addCase(logIn.rejected, (state) => {
          state.isLoading = false;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = true;
        })
        builder.addCase(changeTheUserName.pending, (state) => {
          state.isLoading = true;
          state.userName = null;
          state.error = false;
        })
        builder.addCase(changeTheUserName.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.userName = payload.body?.userName;
          state.error = false;
        })
        builder.addCase(changeTheUserName.rejected, (state) => {
          state.isLoading = false;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = true;
        })
        builder.addCase(getUser.pending, (state) => {
          state.isLoading = true;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = false;
        })
        builder.addCase(getUser.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.firstName = payload.body?.firstName;
          state.lastName = payload.body?.lastName;
          state.userName = payload.body?.userName;
          state.error = false;
        })
        builder.addCase(getUser.rejected, (state, {payload}) => {
          state.isLoading = false;
          state.firstName = null;
          state.lastName = null;
          state.userName = null;
          state.error = payload;
        })
      }
})

export const {setFirstName,setLastName, setError, setIsLoading, setToken, setUserName} = profilSlice.actions;
export default profilSlice.reducer;