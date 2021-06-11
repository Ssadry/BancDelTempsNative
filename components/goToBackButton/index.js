import React, {useEffect} from 'react';
import { Container } from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Text, TouchableOpacity, BackHandler } from 'react-native';

const HARDWARE_BACK_PRESS = 'hardwareBackPress';

export default ({
    navigation
}) => {

    const handleBackButtonClick = _ => {
        if (navigation != null || navigation != undefined) {
            if (navigation.canGoBack()) {
                navigation.goBack();
                return true;
            }
        }
        return false;
    }
    
    useEffect(() => {
        BackHandler.addEventListener(HARDWARE_BACK_PRESS, handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener(HARDWARE_BACK_PRESS, handleBackButtonClick);
        };
    }, []);

    return (
        <Container>
            <TouchableOpacity onPress={handleBackButtonClick}>
                <Text>
                    <FontAwesomeIcon icon={faArrowLeft} size={20}/>
                </Text>
            </TouchableOpacity>
        </Container>
    )
}
