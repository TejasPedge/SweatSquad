import {
    POST_SIGN_UP_REQUEST,
    POST_SIGN_UP_SUCCESS,
    POST_SIGN_UP_FAILURE,
} from "./actionTypes";

export interface ProductState {
    isLoading: boolean;
    isError: boolean;
    token: string;
}

interface Action {
    type: string;
    payload: any;
}

const initialState: ProductState = {
    isLoading: false,
    isError: false,
    token: "",
};

export const reducer = (
    state: ProductState = initialState,
    action: Action
): ProductState => {
    const { type, payload } = action;
    switch (type) {
        case POST_SIGN_UP_REQUEST:
            return { ...state, isLoading: true };
        case POST_SIGN_UP_SUCCESS:
            return { ...state, isLoading: false, token: payload };
        case POST_SIGN_UP_FAILURE:
            return { ...state, isLoading: false, isError: true };
        default:
            return state;
    }
};
