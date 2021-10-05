import {Reducer} from "react";
import {ITokenData, SaveTokenAction} from "./actions";

export type TokenState = {
    data?: ITokenData;
}

type SaveAction = SaveTokenAction

export const saveTokenReducer: Reducer<TokenState, SaveAction> = (state, action) => {
    switch (action.type) {
        case "SAVE_TOKEN":
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}
