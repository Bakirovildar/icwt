import React from 'react';
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  height: 40px;
`

const Button = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #c4c6cb;
  background: #F6F8FA;
  color: #24292F;
  outline: none;
  cursor: pointer;

  &:hover {
    background: #dadfe2;
  }

  &:active {
    background: #cdd4d9;
  }
`

function CardFooter() {
    return (
        <FooterWrapper>
            <Button>Показать шутку</Button>
        </FooterWrapper>
    );
}

export default CardFooter;
