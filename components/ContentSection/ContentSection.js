import React from 'react';
import styled from 'styled-components/native'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton';
import ContentContainer from './ContentContainers/ContentContainer';

const Wrapper = styled.ScrollView`
    width: 100%;
    flex: 1;
`

const ContentSection = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default ContentSection