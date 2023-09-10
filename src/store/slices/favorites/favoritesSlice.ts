import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IUserSearchByNameResponse } from '../../../interfaces/userSearchByName';
import { IHistoryItem } from '../../../pages/search/components/HistoryItem';

// Define una interfaz para el estado
interface ContentSlice {
  favorites: IUserSearchByNameResponse[];
  history: IHistoryItem[];

}

// Define el estado inicial
const initialState: ContentSlice = {
  favorites: [],
  history: [],

};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<IUserSearchByNameResponse[]>) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action: PayloadAction<IUserSearchByNameResponse>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action: PayloadAction<IUserSearchByNameResponse>) => {
      state.favorites = state.favorites.filter(
        (favorite) => (favorite.ardaId !== action.payload.ardaId)
      )
    },
    setHistory: (state, action: PayloadAction<IHistoryItem[]>) => {
      state.history = action.payload;
    },
    addHistoryValue: (state, action: PayloadAction<IHistoryItem>) => {
      state.history.unshift(action.payload);

    }

  
  }
});

export const { setFavorites, addFavorite, removeFavorite, setHistory , addHistoryValue} = favoriteSlice.actions;

// Selector para acceder a los favoritos
export const selectFavorites = (state: RootState) => state.favorite.favorites;

export default favoriteSlice.reducer;