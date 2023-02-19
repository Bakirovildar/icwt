import {Reducer} from "redux";
import {ClearFavorites, DeleteFavoriteJokeAction, DeleteJokeAction, FavoriteJokeAction, SaveJokeAction} from "./action";

export type RootState = {
    jokes: any,
    favorites: any
}

const initialState: RootState = {
    jokes: [],
    favorites: []
}

type MyAction = SaveJokeAction | FavoriteJokeAction | DeleteFavoriteJokeAction | ClearFavorites | DeleteJokeAction

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_JOKE":
            return {
                ...state,
                jokes: action.data
            }
        case "FAVORITE_JOKE":
            return {
                ...state,
                favorites: state.favorites.length < 10
                    ? [...state.favorites, action.data]
                    : state.favorites.map((favorite: object, idx: number) => {
                        if (idx === 0) {
                            state.favorites.splice(0, 1)
                            return state.favorites.push(action.data)
                        }
                        return favorite
                    })
            }
        case "DELETE_FAVORITE_JOKE":
            return {
                ...state,
                favorites: state.favorites.filter((item: object) => state.favorites.includes((i: object) => i !== item))
            }
        case "CLEAR_FAVORITES":
            return {
                ...state,
                favorites: state.favorites = []
            }
        case "DELETE_JOKE":
            return {
                ...state,
                favorites: state.favorites.filter((item: any) => item.value !== action.title)
            }
        default:
            return state
    }
}
