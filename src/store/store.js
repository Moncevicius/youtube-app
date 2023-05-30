import { configureStore } from "@reduxjs/toolkit";
import searchSliceReducer from "./slices/searchSlice.js";
import { api } from "./slices/apiSlice.js";

export default configureStore({
    reducer: {
        search: searchSliceReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (gDM) => gDM().concat(api.middleware),
});