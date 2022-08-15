import { UserInfo } from './UserInfo';

export type ResponseUserInfo = {
  code?: string;
  data?: UserInfo;
  message?: string;
  timestamp?: string;
};
