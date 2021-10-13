import React from 'react';
import styled from 'styled-components/native'
import ContentContainer from '../ContentContainers/ContentContainer';
import ContentColumn from '../ContentContainers/ContentColumn'
import Heading from '../../Composition/Text/Heading'
import Subtext from '../../Composition/Text/Subtext'
const HandContainer = ({children}) => {
    return (
        <ContentContainer>
            <ContentColumn 
                columnSide='left'
            >
                <Heading>
                    Aces vs Aggro Player
                </Heading>
                
                <Subtext>
                    $230 Pot
                </Subtext>
            </ContentColumn>
            <ContentColumn
                columnSide='right'
            >
                <Subtext>
                    $1/$3
                </Subtext>
                <Subtext>
                    9/1/2021
                </Subtext>
            </ContentColumn>
        </ContentContainer>
    )
}

export default HandContainer