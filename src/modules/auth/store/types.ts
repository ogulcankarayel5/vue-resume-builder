export enum ActionTypes {
  REGISTER = "register",
  LOGIN = "login",
  LOGOUT = "logout",
}

export enum MutationTypes {
  SET_USER = "SET_USER",
  SET_USER_LOGOUT = "SET_USER_LOGOUT",
}

export type AuthState = {
  user: any | null;
};
