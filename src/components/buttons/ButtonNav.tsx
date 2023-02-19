import React from 'react';
import {IButtonNav} from "../../types/interface";
import { ButtonWrapper } from './styledButtons';

function ButtonNav({title}: IButtonNav) {
    return (
        <ButtonWrapper>
            {title}
        </ButtonWrapper>
    );
}

export default ButtonNav;
