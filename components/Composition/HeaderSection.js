import React from 'react';
import styled from 'styled-components/native';
import TextButton from '../Buttons/TextButton/TextButton';
import Heading from '../Composition/Text/Heading'

const HeaderSectionContainer = styled.View`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  borderBottomWidth: 2px;
  borderBottomColor: #F8EDD3;
  margin-top: 5px;
`


const HeaderSection = ({titleText, actionText, actionOnClick}) => {
    return (
        <HeaderSectionContainer>
            <Heading weight='bold'>{titleText || 'Recent Hands'}</Heading>
            <TextButton
                buttonText={actionText || '+ New Hand'}
                buttonAction={actionOnClick}
            />
        </HeaderSectionContainer>
    )
}

module.exports = HeaderSection