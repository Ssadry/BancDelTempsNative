import React from 'react';
import {Container, Image} from './styled';
import Icon from '../../../assets/icon.png';

export default Logo = () => {
    return (
        <Container>
            <Image source={Icon}/>
        </Container>
    )
}