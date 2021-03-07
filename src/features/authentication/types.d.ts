type SignInActions =
  | { type: string; payload: boolean }
  | { type: string; payload: string };

interface SignInState {
  isSigningIn: boolean;
}
