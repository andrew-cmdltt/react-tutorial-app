import {ActionCreator} from "redux";

export interface ITokenData {
    token?: string;
}

export const SAVE_TOKEN = 'SAVE_TOKEN';

export type SaveTokenAction = {
    type: typeof SAVE_TOKEN;
    data?: ITokenData;
}

export const saveToken: ActionCreator<SaveTokenAction> = (data: ITokenData) => ({
    type: SAVE_TOKEN,
    data
});
