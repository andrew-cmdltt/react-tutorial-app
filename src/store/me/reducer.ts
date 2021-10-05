import {IUserData, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction} from "./actions";
import {Reducer} from "react";

export type MeState = {
    loading: boolean;
    error: string;
    data: IUserData;
}

type MyAction = MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;
export const meReducer: Reducer<MeState, MyAction> = (state, action) => {
    switch (action.type) {
        case "ME_REQUEST":
            return {
                ...state,
                loading: true,
            };
        default:
            return state;
        case "ME_REQUEST_ERROR":
            return {
                ...state,
                error: action.error,
                loading: false,
            }
        case "ME_REQUEST_SUCCESS":
            return {
                ...state,
                data: action.data,
                loading: false,
            }
    }
}