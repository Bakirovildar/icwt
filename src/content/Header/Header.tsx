import React from 'react';
import styled from "styled-components";
import ButtonNav from "../../components/buttons/ButtonNav";

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 100px;
  height: 60px;
  background: #24292F;
`


function Header() {
    return (
        <HeaderWrapper>
            <ButtonNav title={'Шутки'}/>
            <ButtonNav title={'Избранные'}/>
        </HeaderWrapper>
    );
}

export default Header;
