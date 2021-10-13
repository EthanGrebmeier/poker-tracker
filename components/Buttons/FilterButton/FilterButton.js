import React from 'react';
import { Pressable, Text} from 'react-native';
import styled from 'styled-components/native'
import { UilFilter } from '@iconscout/react-native-unicons'

const Wrapper = styled(Pressable)`
    height: 45px;
    width: 25%;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #003B36;
`

const ButtonText = styled.Text`
    color: #ECE5F0; 
    font-size: 20px;
    font-weight: 400;
`

const FilterButton = ({buttonAction}) => {
    return (
        <Wrapper 
            onPress={buttonAction}
            underlayColor='blue'
        >
            <ButtonText> Filter </ButtonText> 
            <UilFilter 
                color='#ECE5F0'
            />
        </Wrapper>
    )
}

export default FilterButton