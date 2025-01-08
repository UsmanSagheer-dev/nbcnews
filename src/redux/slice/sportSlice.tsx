import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import Instance from "../../utility/Instance";

export interface Sport {
  id: number;
  title: string;
  league: string;
  team: string;
  description: string;
  published_date: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
}

export interface SportState {
  data: Sport[] | null;
  isLoading: boolean;
  isError: string | null;
}

const initialState: SportState = {
  data: null,
  isLoading: false,
  isError: null,
};

export const fetchSports = createAsyncThunk(
  "sport/fetchSports",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{ results: Sport[] }> = await Instance.get(
        "/svc/topstories/v2/sports.json"
      );
      return response.data.results;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);

export const sportsSlice = createSlice({
  name: "sport",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSports.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchSports.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSports.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload as string;
      });
  },
});

export default sportsSlice.reducer;
