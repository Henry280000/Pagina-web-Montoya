import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductFilters {
  category: string[];
  priceRange: {
    min: number;
    max: number;
  };
  sizes: string[];
  colors: string[];
  sortBy: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest';
  searchQuery: string;
}

const initialState: ProductFilters = {
  category: [],
  priceRange: {
    min: 0,
    max: 10000,
  },
  sizes: [],
  colors: [],
  sortBy: 'newest',
  searchQuery: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setPriceRange: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.priceRange = action.payload;
    },
    setSizes: (state, action: PayloadAction<string[]>) => {
      state.sizes = action.payload;
    },
    setColors: (state, action: PayloadAction<string[]>) => {
      state.colors = action.payload;
    },
    setSortBy: (state, action: PayloadAction<ProductFilters['sortBy']>) => {
      state.sortBy = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setPriceRange,
  setSizes,
  setColors,
  setSortBy,
  setSearchQuery,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
