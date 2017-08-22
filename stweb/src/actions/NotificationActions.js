import { notification } from "antd";

export function showNotification(type, title, description) {
  notification[type]({
    message: title,
    description: description
  });
}
