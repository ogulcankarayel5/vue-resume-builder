export type NotificationTypes = "error" | "success";

export interface INotification {
  id: any;
  type: NotificationTypes;
  message: string;
}

export interface NotificationState {
  notifications: Array<INotification>;
}

export enum ActionTypes {
  PUSH_NOTIFICATION = "pushNotification",
  REMOVE_NOTIFICATION = "removeNotication",
}

export enum MutationTypes {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION",
}
