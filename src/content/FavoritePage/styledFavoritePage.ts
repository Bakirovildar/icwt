import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  height: 500px;
  background: rgba(241, 247, 252, 0.51);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
`

export const ButtonClear = styled.div`
  position: absolute;
  top: 20px;
  right: 115px;
  border: 1px solid chocolate;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  &:hover {
    background: chocolate;
    color: white;
  }
`
