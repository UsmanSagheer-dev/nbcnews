import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Instance from "../../utility/Instance";

export interface SearchState {
  searchResults: SearchResponse[] | null;
  isLoading: boolean;
  isError: string | null;
}
const initialState: SearchState = {
  searchResults: null,
  isLoading: false,
  isError: "",
};
export interface SearchResponse {
  _id: string;
  multimedia: { url: string }[];
  headline: { main: string };
  abstract: string;
  pub_date: string;
  byline: { original: string };
  error: string;
}
export const fetchSearchResults = createAsyncThunk<SearchResponse[], string>(
  "search/fetchSearchResults",
  async (searchQuery: string) => {
    try {
      const responseData: AxiosResponse<{
        response: { docs: SearchResponse[] };
      }> = await Instance.get("/svc/search/v2/articlesearch.json", {
        params: {
          q: searchQuery,
        },
      });
      const docs = responseData.data.response.docs?.map((doc) => {
        return {
          ...doc,
          multimedia: doc.multimedia?.map((media) => ({
            url: media.url.startsWith("http")
              ? media.url
              : `https://www.nytimes.com/${media.url}`,
          })),
        };
      });
      return docs;
    } catch (error: any) {
      throw new Error(error?.message || "Something went wrong");
    }
  }
);
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.searchResults = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message || "Something went wrong";
      });
  },
});
export default searchSlice.reducer;
