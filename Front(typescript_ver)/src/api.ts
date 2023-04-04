import Cookie from "js-cookie";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
  withCredentials: true,
});

export const getMe = () =>
  instance.get(`users/me`).then((response) => response.data);

export const logOut = () =>
  instance
    .post(`users/log-out`, null, {
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IEmailLoginVariables {
  email: string;
  password: string;
}
export interface IEmailLoginSuccess {
  ok: string;
}
export interface IEmailLoginError {
  error: string;
}

export const emailLogIn = ({ email, password }: IEmailLoginVariables) =>
  instance
    .post(
      `users/log-in`,
      { email, password },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export interface IUserSignUp {
  email: string;
  password: string;
  nickname: string;
}

export const userSignUp = ({ email, password, nickname }: IUserSignUp) =>
  instance
    .post(
      `users/`,
      { email, password, nickname },
      {
        headers: {
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);

export interface IModifyProfile {
  // email: string;
  // password: string;
  nickname: string;
  gender: string;
  height: number;
  weight: number;
  avator: any;
}

export const modifyUser = (variables: IModifyProfile) =>
  instance
    .put(`users/me`, variables, {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-CSRFToken": Cookie.get("csrftoken") || "",
      },
    })
    .then((response) => response.data);

export interface IAnalysis {
  video: any;
}

export const videoUpload = (video: IAnalysis) =>
  instance
    .post(
      `analyses/`,
      { video },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRFToken": Cookie.get("csrftoken") || "",
        },
      }
    )
    .then((response) => response.data);
