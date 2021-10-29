export type NotificationTypes = "error" | "success";

export interface Notification {
  id: any;
  type: NotificationTypes;
  message: string;
}

export interface NotificationState {
  notifications: Array<Notification>;
}

export enum ActionTypes {
  PUSH_NOTIFICATION = "pushNotification",
  REMOVE_NOTIFICATION = "removeNotication",
}

export enum MutationTypes {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION",
}
