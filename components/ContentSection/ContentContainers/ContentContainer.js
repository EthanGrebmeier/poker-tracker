import React from 'react';
import styled from 'styled-components/native'

const Wrapper = styled.View`
    width: 100%;
    height: 90px;
    display: flex;
    flex-direction:row;
    border: 2px solid #F8EDD3;
    border-radius: 5px;
    background: #003B36;
    margin-bottom: 8px;
    padding: 8px;
`

const ContentContainer = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default ContentContainer