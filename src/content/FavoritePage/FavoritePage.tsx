import React from 'react';
import {ButtonClear, HomeWrapper} from './styledFavoritePage';
import {useDispatch} from "react-redux";
import CardMain from "../../components/CardComponent/CardMain/CardMain";
import {CardWrapper} from '../../components/CardComponent/styledCardComponent';
import {clearFavorites} from "../../store/action";

function FavoritePage() {
    const [...jokeFavorites]: any = JSON.parse(localStorage.getItem('favorites') as string)
    const dispatch = useDispatch()

    const clearFavoritesHandler = () => {
        dispatch(clearFavorites())
    }

    return (
        <HomeWrapper>
            <ButtonClear onClick={clearFavoritesHandler}>Удалить все</ButtonClear>
            {
                jokeFavorites.length ? jokeFavorites.map(({value, id}: any) => <CardWrapper key={id}><CardMain title={value} /></CardWrapper>) : <span>Нет избранных шуток</span>
            }
        </HomeWrapper>
    );
}

export default FavoritePage;
