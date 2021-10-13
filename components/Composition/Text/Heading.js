import React from 'react';
import styled from 'styled-components/native';


const Heading = styled.Text`
    font-size: 24px;
    font-weight: ${({weight}) => getWeight(weight)};
    color: #F8EDD3;
`
const getWeight = (weight) => {
    switch (weight) {
        case 'bold':
            return '600';
        case 'medium':
            return '400'
        case 'light':
            return '200'
        default:
            return '400'
    }
} 


module.exports = Heading