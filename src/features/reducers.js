import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import { apiSlice } from "./api/apiSlice"
// import authReducer from "./auth/authSlice"
import storage from "redux-persist/lib/storage"


const persistConfig = {
    key: "root",
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
    // scheduleQuery: scheduleQueryReducer
})

const persistedtedReducer = persistReducer(persistConfig, rootReducer)

export default persistedtedReducer