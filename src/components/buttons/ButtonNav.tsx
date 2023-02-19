import React from 'react';
import {IButtonNav} from "../../types/interface";
import {ButtonWrapper} from './styledButtons';
import {Link} from "react-router-dom";

function ButtonNav({title, path}: IButtonNav) {
    return (
        <Link to={path}>
            <ButtonWrapper>
                {title}
            </ButtonWrapper>
        </Link>
    );
}

export default ButtonNav;
