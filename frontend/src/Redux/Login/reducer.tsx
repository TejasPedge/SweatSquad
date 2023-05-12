import {
    POST_SIGN_UP_REQUEST,
    POST_SIGN_UP_SUCCESS,
    POST_SIGN_UP_FAILURE,
    POST_SIGN_IN_REQUEST,
    POST_SIGN_IN_SUCCESS,
    POST_SIGN_IN_FAILURE,
} from "./actionTypes";

export interface ProductState {
    isLoading: boolean;
    isError: boolean;
    result: string;
    token: string,

}

interface Action {
    type: string;
    payload1: any;
    payload2: any;
}

const initialState: ProductState = {
    isLoading: false,
    isError: false,
    result: "",
    token: "",

};

export const reducer = (
    state: ProductState = initialState,
    action: Action
): ProductState => {
    const { type, payload1, payload2 } = action;
    switch (type) {
        case POST_SIGN_UP_REQUEST:
            return { ...state, isLoading: true };
        case POST_SIGN_UP_SUCCESS:
            return { ...state, isLoading: false, result: payload1 };

        case POST_SIGN_IN_REQUEST:
            return { ...state, isLoading: true };
        case POST_SIGN_IN_SUCCESS:
            return { ...state, isLoading: false, token: payload2 };

        case POST_SIGN_IN_FAILURE:
            return { ...state, isLoading: false, isError: true, result: payload2 };
        case POST_SIGN_UP_FAILURE:
            return { ...state, isLoading: false, isError: true, result: payload1 };
        default:
            return state;
    }
};
