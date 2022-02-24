export type NotificationTypes = "error" | "success";

export interface INotification {
  id: any;
  type: NotificationTypes;
  message: string;
}

export interface UIState {
  notifications: Array<INotification>;
  isNavOpen: boolean;
}

export enum ActionTypes {
  PUSH_NOTIFICATION = "pushNotification",
  REMOVE_NOTIFICATION = "removeNotication",

  TOGGLE_NAV = "toggleNav",
}

export enum MutationTypes {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION",

  TOGGLE_NAV = "TOGGLE_NAV",
}
