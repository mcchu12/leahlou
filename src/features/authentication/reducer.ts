import { combineReducers, Reducer } from "redux";
import { signInActions } from "./action";

const initialState = {
  isSigningIn: false,
};

const signIn: Reducer<SignInState, SignInActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case signInActions.request:
      return { isSigningIn: true };

    default:
      return state;
  }
};

export default combineReducers({
  signIn,
});
