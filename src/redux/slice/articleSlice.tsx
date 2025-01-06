import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Instance from "../../utility/Instance";

// Article data interface
export interface Article {
  id: number;
  byline: string;
  title: string;
  section: string;
  abstract: string;
  published_date: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
}

// Article state interface
export interface ArticleState {
  data: Article[] | null;
  isLoading: boolean;
  isError: string | null;
  searchQuery: string;
}

// Initial state
const initialState: ArticleState = {
  data: null,
  isLoading: false,
  isError: null,
  searchQuery: "",
};

// Thunk to fetch articles
export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (searchQuery: string, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ results: Article[] }> = await Instance.get(
        "/svc/mostpopular/v2/emailed/30.json",
        // {
        //   params: {
        //     query: searchQuery, // Ensure searchQuery is passed
        //   },
        // }
      );
      return response.data.results;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);


// Article slice
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export const { setSearchQuery } = articleSlice.actions;
export default articleSlice.reducer;
