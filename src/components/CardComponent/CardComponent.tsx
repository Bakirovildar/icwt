import React from 'react';
import CardMain from "./CardMain/CardMain";
import CardFooter from "./CardFooter/CardFooter";
import { CardWrapper } from './styledCardComponent';

function CardComponent() {
    return (
        <CardWrapper>
            <CardMain/>
            <CardFooter/>
        </CardWrapper>
    );
}

export default CardComponent;
