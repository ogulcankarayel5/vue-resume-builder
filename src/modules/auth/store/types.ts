export enum ActionTypes {
  REGISTER = "register",
  LOGIN_WITH_GOOGLE = "loginWithGoogle",
  LOGIN = "login",
  LOGOUT = "logout",
  INIT = "init"
}

export enum MutationTypes {
  AUTH_START = "AUTH_START",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_LOGOUT="AUTH_LOGOUT",
  SET_USER_LOGOUT = "SET_USER_LOGOUT",
}

export interface AuthState  {
  user: any | null;
  loading: boolean;
};
