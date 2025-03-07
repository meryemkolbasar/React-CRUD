import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Kullanıcıları backend'den alırken
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

// Kullanıcıyı silerken
export const deleteUser = createAsyncThunk(
  'users/deleteUser', 
  async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    return id;  // Silinen kullanıcının ID'si döndürülür
  }
);

// Kullanıcıyı eklerken (addUser işlemi API'ye veri ekler)
export const addUser = createAsyncThunk(
  'users/addUser',
  async (newUser) => {
    // Yeni kullanıcıyı backend API'ye gönder
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
    return response.data; // Yeni eklenen kullanıcıyı döndür
  }
);

// Kullanıcıyı güncellerken (update işlemi)
export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (updatedUser) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser);
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    // addUser reducer'ı
    addUserDirect: (state, action) => {
      state.users.push(action.payload);  // Doğrudan local state'e ekler
    },
    // Kullanıcı güncelleme reducer'ı
    updateUserDirect: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload; // Güncellenmiş kullanıcıyı listeye ekle
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.error = 'Failed to load users.';
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        // Silinen kullanıcıyı listeden çıkar
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        // Güncellenmiş kullanıcıyı listeye ekle
        const index = state.users.findIndex(user => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // API'ye eklenen kullanıcıyı state'e ekle
        state.users.push(action.payload);
      });
  },
});

export const { addUserDirect, updateUserDirect } = userSlice.actions;
export default userSlice.reducer;
