import React, {useEffect} from 'react';
import {FavoriteIcon} from "../../../assests/icons/Favorite";
import {IconFavorite, MainWrapper, TitleStyle} from '../styledCardComponent';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";

function CardMain({title}: any) {
    const [jokes]: any = useSelector<RootState>(state => state.jokes)

    useEffect(() => {
        if (!jokes) return
    }, [jokes])

    return (
        <MainWrapper>
            {!title ? (
                <>
                    <IconFavorite>
                        <FavoriteIcon joke={jokes}/>
                    </IconFavorite>
                    <TitleStyle>{jokes ? jokes.value : ''}</TitleStyle>
                </>
            )
                : <TitleStyle>{ title }</TitleStyle>
            }
        </MainWrapper>
    );
}

export default CardMain;
