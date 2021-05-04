import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./root-reducer";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
