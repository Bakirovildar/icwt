import React from 'react';
import styled from "styled-components";
import CardMain from "./CardMain/CardMain";
import CardFooter from "./CardFooter/CardFooter";

const CardWrapper = styled.div`
  width: 500px;
  height: 300px;
  background: #FFFF;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`

function CardComponent() {
    return (
        <CardWrapper>
            <CardMain/>
            <CardFooter/>
        </CardWrapper>
    );
}

export default CardComponent;
