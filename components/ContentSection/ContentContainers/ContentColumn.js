import React from 'react';
import styled from 'styled-components/native'

const ContentColumnWrapper = styled.View`
    width: ${props => props.width};
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: ${props => props.alignItems};
`


const ContentColumn = ({columnSide, children}) => {
    return (
        <ContentColumnWrapper
            width={columnSide == 'left' ? '75%' : '25%'}
            alignItems={columnSide == 'left' ? 'flex-start' : 'flex-end'}
        >
            {children}
        </ContentColumnWrapper>
    )
}

module.exports = ContentColumn