import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./store";

export const SAVE_JOKE = 'SAVE_JOKE'

export interface IJoke {
    data: [
        {
            id: string,
            value: string
        }
    ]
}

export type SaveJokeAction = {
    type: typeof SAVE_JOKE
    data: IJoke
}

export const saveJokeAction: ActionCreator<SaveJokeAction> = (data: IJoke) => ({
    type: SAVE_JOKE,
    data,
})
export const FAVORITE_JOKE = 'FAVORITE_JOKE'

export interface IFavoriteJoke {
    data: [
        {
            id: string,
            value: string
        }
    ]
}

export type FavoriteJokeAction = {
    type: typeof FAVORITE_JOKE
    data: IFavoriteJoke
}

export const saveFavoriteJokeAction: ActionCreator<FavoriteJokeAction> = (data: IFavoriteJoke) => ({
    type: FAVORITE_JOKE,
    data,
})

export const DELETE_FAVORITE_JOKE = 'DELETE_FAVORITE_JOKE'

export interface IDeleteFavoriteJoke {
    joke: any,
}

export type DeleteFavoriteJokeAction = {
    type: typeof DELETE_FAVORITE_JOKE
    data: IDeleteFavoriteJoke
}

export const deleteFavoriteJokeAction: ActionCreator<DeleteFavoriteJokeAction> = (data: IDeleteFavoriteJoke) => ({
    type: DELETE_FAVORITE_JOKE,
    data,
})


export const CLEAR_FAVORITES = 'CLEAR_FAVORITES'

export type ClearFavorites = {
    type: typeof CLEAR_FAVORITES
}

export const clearFavorites: ActionCreator<ClearFavorites> = () => ({
    type: CLEAR_FAVORITES
})


export const getJoke = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => dispatch(saveJokeAction([data])))
        .catch((error) => {
            console.log('error getJoke: ', error)
        })
}
