import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Person} from '../../types/Person';

type FavoritesState = {
  favorites: Person[];
  loading: boolean;
  error: string;
};

const initialState: FavoritesState = {
  favorites: [],
  loading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action: PayloadAction<Person[]>) => {
      state.favorites = action.payload;
    },
    add: (state, action: PayloadAction<Person>) => {
      state.favorites.push(action.payload);
    },
    remove: (state, action: PayloadAction<Person>) => {
      state.favorites = state.favorites.filter(
        character => character.name !== action.payload.name,
      );
    },
    clear: state => {
      state.favorites = [];
    },
  },
});

export default productsSlice.reducer;
export const {actions} = productsSlice;
