import axios from "axios";
import {
    POST_SIGN_UP_REQUEST,
    POST_SIGN_UP_SUCCESS,
    POST_SIGN_UP_FAILURE,
    POST_SIGN_IN_REQUEST,
    POST_SIGN_IN_SUCCESS,
    POST_SIGN_IN_FAILURE
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

    // console.log("data:", data);

    axios
        .post(`https://fitnessb-backend.onrender.com/users/register`, data)
        .then((res) => {
            console.log(res.data.message);
            dispatch({ type: POST_SIGN_UP_SUCCESS, payload1: res.data.message });
        })
        .catch((err) => {
            console.log(err.response.data.message)
            dispatch({ type: POST_SIGN_UP_FAILURE, payload1: err.response.data.message });
        });
};



export const Login = (data: RegisterData) => (dispatch: Dispatch<RegisterAction>) => {
    dispatch({ type: POST_SIGN_IN_REQUEST });
    console.log("data:", data);
    axios
        .post(`https://fitnessb-backend.onrender.com/users/login`, data)
        .then((res) => {
            console.log(res)
            console.log(res.data.token);
            localStorage.setItem("LoginToken", JSON.stringify(res.data.token))
            dispatch({ type: POST_SIGN_IN_SUCCESS, payload2: res.data.token });
        })
        .catch((err) => {

            dispatch({ type: POST_SIGN_IN_FAILURE, payload2: err.response.data.message });
        });
};


