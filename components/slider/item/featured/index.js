import React from 'react';
import {
    Container,
    Content,
    ImageBackground,
    BookMark,
    Info,
    Title,
    HoursContainer,
    Hours,
    StarsContainer,
    Top,
    Bottom,
    Star
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faLink, faStar } from '@fortawesome/free-solid-svg-icons'
import Icon from '../../../../assets/icon.png';

export default ({ width, title, hours }) => {
    const contentWidth = width * 0.9;
    return (
        <Container width={width}>
            <Content width={contentWidth}>
                <ImageBackground 
                    source={Icon}
                    width={contentWidth}
                >
                    <BookMark
                        onPress={() => alert('Guardado')}
                    >
                        <FontAwesomeIcon 
                            icon={faBookmark} 
                            color='rgba(170, 170, 170, 1)'
                            size={25}
                        />
                    </BookMark>
                </ImageBackground>
                <Info width={contentWidth}>
                    <Top>
                        <Title
                            adjustFontSizeToFit
                            numberOfLines={2}
                        >
                            {title}
                        </Title>
                        <HoursContainer>
                            <Hours>
                                {
                                    hours + 'h'
                                }
                            </Hours>
                        </HoursContainer>
                    </Top>
                    <Bottom>
                        <StarsContainer>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                            <Star>
                                <FontAwesomeIcon icon={faStar} color='white'/>
                            </Star>
                        </StarsContainer>
                        <FontAwesomeIcon 
                            icon={faLink} 
                            color={'white'} 
                            size={25}
                        />
                    </Bottom>
                </Info>
            </Content>
        </Container>
    )
}