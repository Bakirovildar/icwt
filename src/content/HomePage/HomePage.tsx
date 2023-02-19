import React from 'react';
import styled from "styled-components";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

function HomePage() {
    return (
        <HomeWrapper>
            <CardComponent/>
        </HomeWrapper>
    );
}

export default HomePage;
