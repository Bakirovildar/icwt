import React from 'react';
import styled from "styled-components";
import CardComponent from "../../components/CardComponent/CardComponent";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(241, 247, 252, 0.51);
  display: flex;
  justify-content: center;
  align-items: center;
`

function HomePage() {
    return (
        <HomeWrapper>
            <CardComponent/>
        </HomeWrapper>
    );
}

export default HomePage;
