import React from 'react';
import styled from "styled-components";
import {FavoriteIcon} from "../../../assests/icons/Favorite";

const MainWrapper = styled.div`
  width: 100%;
  height: 260px;
  position: relative;
`

const IconFavorite = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

function CardMain() {
    return (
        <MainWrapper>
            <IconFavorite>
                <FavoriteIcon/>
            </IconFavorite>
        </MainWrapper>
    );
}

export default CardMain;
