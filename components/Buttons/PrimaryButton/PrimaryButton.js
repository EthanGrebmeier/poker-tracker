import React from 'react';
import { Pressable, Text} from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled(Pressable)`
    height: 45px;
    width: 100%;
    border: 2px solid #009B72;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ButtonText = styled.Text`
    color: #F8EDD3;
    font-size: 20px;
    font-weight: 600;
`

const PrimaryButton = ({buttonText, buttonAction}) => {
    return (
        <Wrapper 
            onPress={buttonAction}
            underlayColor='blue'
        >
            <ButtonText> {buttonText} </ButtonText> 
        </Wrapper>
    )
}

export default PrimaryButton