import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
//import productsReducer from '../features/products/Products';
import charactersReducer from '../features/characters/Characters';
import favoritesReducer from '../features/favorites/Favorites';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    favorites: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
