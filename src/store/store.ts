import {ActionCreator, Reducer} from "redux";
import {IJoke, SaveJokeAction} from "./action";

export type RootState = {
    jokes: IJoke
}

const initialState: RootState = {
    jokes: {
        data: [
            {
                id: '',
                value: ''
            }
        ]
    }
}

type MyAction = SaveJokeAction

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_JOKE":
            return {
                ...state,
                jokes: action.data
            }
        default:
            return state
    }
}
