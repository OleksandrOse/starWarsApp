import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Person} from '../../types/Person';

type CharactersState = {
  characters: Person[];
  loading: boolean;
  error: string;
};

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: '',
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    set: (state, action: PayloadAction<Person[]>) => {
      state.characters = action.payload;
    },
    add: (state, action: PayloadAction<Person>) => {
      state.characters.push(action.payload);
    },
    remove: (state, action: PayloadAction<Person>) => {
      state.characters = state.characters.filter(
        character => character !== action.payload,
      );
    },
    clear: state => {
      state.characters = [];
    },
  },
});

export default charactersSlice.reducer;
export const {actions} = charactersSlice;
