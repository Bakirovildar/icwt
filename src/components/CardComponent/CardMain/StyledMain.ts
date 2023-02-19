import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  height: 40px;
`

export const DeleteWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const Button = styled.button`
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
