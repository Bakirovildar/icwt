import React from 'react';
import FavoriteCard from "../../components/FavoriteCard/FavoriteCard";
import {ButtonClear, HomeWrapper} from './styledFavoritePage';

function FavoritePage() {
    return (
        <HomeWrapper>
            <ButtonClear>Удалить все</ButtonClear>
            <FavoriteCard/>
            <FavoriteCard/>
            <FavoriteCard/>
        </HomeWrapper>
    );
}

export default FavoritePage;
