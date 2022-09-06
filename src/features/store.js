import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { apiSlice } from "./api/apiSlice";
import {createWrapper} from "next-redux-wrapper"

import persistedtedReducer from "./reducers";


const logger = createLogger()


const store = configureStore({
    reducer: persistedtedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware, logger)

})

export const wrapper = createWrapper(store, {debug: true})

export default store