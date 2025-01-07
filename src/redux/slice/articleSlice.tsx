import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Instance from "../../utility/Instance";

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

export interface ArticleState {
  data: Article[] | null;
  isLoading: boolean;
  isError: string | null;
}

const initialState: ArticleState = {
  data: null,
  isLoading: false,
  isError: null,
};

export const fetchArticles = createAsyncThunk(
  "article/fetchArticles",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ results: Article[] }> = await Instance.get(
        "/svc/mostpopular/v2/emailed/30.json"
      );
      return response.data.results;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
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

export default articleSlice.reducer;
