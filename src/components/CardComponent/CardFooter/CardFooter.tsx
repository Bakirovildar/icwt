import React, {Dispatch, useEffect, useReducer} from 'react';
import {Button, FooterWrapper} from '../CardMain/StyledMain';
import {useDispatch} from "react-redux";
import {getJoke} from "../../../store/action";

function CardFooter() {
    const [isStopJoke, setIsStopJoke] = useReducer(isStopJoke => !isStopJoke, false)
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        if (!isStopJoke) return
        let interval = setInterval(() => {
            dispatch(getJoke())
        }, 3000)

        return () => clearInterval(interval)
    }, [isStopJoke])

    return (
        <FooterWrapper>
            <Button
                onClick={() => setIsStopJoke()}
            >{!isStopJoke ? 'Показать шутку' : 'Остановить'}</Button>
        </FooterWrapper>
    );
}

export default CardFooter;
