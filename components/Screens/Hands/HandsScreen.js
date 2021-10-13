
import React from 'react';
import styled from 'styled-components/native';
import Page from '../../Composition/Page'
import HandContainer from '../../ContentSection/HandContainer/HandContainer';
import HeaderSection from '../../Composition/HeaderSection'
import ContentSection from '../../ContentSection/ContentSection';
import SearchSection from '../../Composition/SearchSection'


const HandsScreen = ({navigation}) => {
    return (
        <Page>
            <HeaderSection/>
            <SearchSection/>
            <ContentSection>
                <HandContainer/>
                <HandContainer/>
                <HandContainer/>
                <HandContainer/>
                <HandContainer/>
                <HandContainer/>
                <HandContainer/>
                <HandContainer/>
            </ContentSection>
        </Page>
    )
}

export default HandsScreen