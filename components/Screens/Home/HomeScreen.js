
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import ContentSection from '../../ContentSection/ContentSection';


const StyledText = styled.Text`
  color: #FACC57;
  font-size: 48px;
  font-family: 'Cochin';
  font-weight: 500;
`

const Header = styled.View`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

const Page = styled.View`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #22302B;
  padding: 15px 15px 10px 15px;
`

const ContentBody = styled.View`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const HomeScreen = ({navigation}) => {
    return (
        <Page>
            <Header>
              <StyledText>Placeholder</StyledText>
            </Header>
            <ContentBody>
              <ContentSection
                  headerString='Recent Hands'
                  headerButtonString='View All'
                  buttonText='Record a Hand'
                  buttonAction={() => navigation.navigate('Details')}
              />
              <ContentSection
                  headerString='Recent Sessions'
                  headerButtonString='View All'
                  buttonText='Record a Session'
                  buttonAction={() => navigation.navigate('Home')}
              />
            </ContentBody>
            
        </Page>
    )
}

export default HomeScreen