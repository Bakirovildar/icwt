import React from 'react';
import { CardContainer } from './styledFavoriteCard';

function FavoriteCard({title}: any) {
    return (
        <CardContainer>
            {title}
        </CardContainer>
    );
}

export default FavoriteCard;
