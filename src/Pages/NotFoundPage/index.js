import React, {Component} from 'react';
import styled from "styled-components";

import bg from '../../images/404.jpg'

class NotFound extends Component {

    render()
    {
        const NotFound = styled.div`
            background-color: #fff;
            height: 100vh;
            img{
                width: 100%;
                object-fit: none;
                height: 100%;
            }
        `;
        return(
            <NotFound>
                <img src={bg} alt="bg" />
            </NotFound>
        )
    }
}

export default NotFound;