import {useEffect, useMemo, useReducer, useState} from "react";
import {IFavoriteIcon} from "../../types/interface";
import {useDispatch, useSelector} from "react-redux";
import {deleteFavoriteJokeAction, saveFavoriteJokeAction} from "../../store/action";
import {RootState} from "../../store/store";

export const FavoriteIcon = ({joke}: IFavoriteIcon) => {
    const [isActive, setIsActive] = useReducer(isActive => !isActive, false)
    const [preJoke, setPreJoke] = useState({})
    const favorites: any = useSelector<RootState>(state => state.favorites)
    const dispatch = useDispatch()

    useEffect(() => {
        setPreJoke(() => joke)
    }, [])

    useEffect(() => {
        if (joke !== preJoke) {
            setIsActive()
            setPreJoke(() => joke)
        }
    }, [joke])

    useEffect(() => {
        if (!favorites.length) return
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])


    const clickFavorite = () => {
        setIsActive()
        if (isActive) {
            dispatch(deleteFavoriteJokeAction(joke))
        } else {
            dispatch(saveFavoriteJokeAction(joke))
        }
    }

    return (
        <svg
            onClick={clickFavorite}
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            cursor='pointer'
            color=''>
            <path
                fill={isActive ? '#C75454' : ''}
                d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
                stroke="#222222"/>
        </svg>
    )
}
