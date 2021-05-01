import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TPayload = {
    page: number;
};

const initialState = {
    page: 1
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState: initialState,
    reducers: {
        changePage: (state, { payload }: PayloadAction<TPayload>) => {
            state.page = payload.page;
        }
    }
});

export const paginationReducer = paginationSlice.reducer;
export const { changePage } = paginationSlice.actions;