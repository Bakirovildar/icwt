import React, {useReducer} from 'react';
import {Button, FooterWrapper} from '../CardMain/StyledMain';

function CardFooter() {
    const [isStopJoke, setIsStopJoke] = useReducer(isStopJoke => !isStopJoke, false)

    return (
        <FooterWrapper>
            <Button
                onClick={() => setIsStopJoke()}
            >{!isStopJoke ? 'Показать шутку' : 'Остановить'}</Button>
        </FooterWrapper>
    );
}

export default CardFooter;
