import { jwtDecode } from "jwt-decode";

export const verifyToken = (accesstoken: string) => {
  return jwtDecode(accesstoken);
};
