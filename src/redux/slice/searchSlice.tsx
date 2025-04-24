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
  multimedia: MultimediaItem[];
  headline: { main: string };
  abstract: string;
  pub_date: string;
  byline: { original: string };
  error?: string;
}

interface MultimediaItem {
  url?: string;
  type?: string;
}

interface ApiDoc {
  _id: string;
  multimedia:
    | {
        default?: { url: string };
        thumbnail?: { url: string };
      }
    | MultimediaItem[];
  headline: { main: string };
  abstract: string;
  pub_date: string;
  byline: { original: string };
}

export const fetchSearchResults = createAsyncThunk<SearchResponse[], string>(
  "search/fetchSearchResults",
  async (searchQuery: string) => {
    try {
      const responseData: AxiosResponse<{
        response: { docs: ApiDoc[] };
      }> = await Instance.get("/svc/search/v2/articlesearch.json", {
        params: {
          q: searchQuery,
        },
      });

      const docs = responseData.data.response.docs.map((doc) => {
        let imageUrl = "";

        if ("default" in doc.multimedia && doc.multimedia.default?.url) {
          imageUrl = doc.multimedia.default.url;
        } else if (
          "thumbnail" in doc.multimedia &&
          doc.multimedia.thumbnail?.url
        ) {
          imageUrl = doc.multimedia.thumbnail.url;
        } else if (
          Array.isArray(doc.multimedia) &&
          doc.multimedia.length > 0 &&
          doc.multimedia[0]?.url
        ) {
          imageUrl = doc.multimedia[0].url;
        }

        return {
          ...doc,
          multimedia: [{ url: imageUrl }],
        } as SearchResponse;
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
