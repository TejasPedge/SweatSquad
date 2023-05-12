import axios from "axios";
import {
  POST_SIGN_UP_REQUEST,
  POST_SIGN_UP_SUCCESS,
  POST_SIGN_UP_FAILURE,
} from "./actionTypes";
import { Dispatch } from "redux";

interface RegisterData {
  name: string;
  email: string;
  password: string;
}

interface RegisterAction {
  type: string;
  payload?: any;
}

export const Register = (data: RegisterData) => (dispatch: Dispatch<RegisterAction>) => {
  dispatch({ type: POST_SIGN_UP_REQUEST });

  console.log("data:", data);

  axios
    .post(`https://fitnessb-backend.onrender.com/users/register`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_SIGN_UP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SIGN_UP_FAILURE });
    });
};
