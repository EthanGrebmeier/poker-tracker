import React from 'react';
import { Pressable, Text} from 'react-native';
import styled from 'styled-components/native'

const Wrapper = styled(Pressable)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: 400;
    color: #F8EDD3;
`


const TextButton = ({buttonText, buttonAction}) => {
    return (
        <Wrapper 
            onPress={buttonAction}
        >
            <ButtonText> {buttonText} </ButtonText> 
        </Wrapper>
    )
}

export default TextButton