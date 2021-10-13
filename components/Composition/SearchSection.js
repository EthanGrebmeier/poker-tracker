import React from 'react';
import styled from 'styled-components/native';
import FilterButton from '../Buttons/FilterButton/FilterButton';
import TextButton from '../Buttons/TextButton/TextButton';
import Heading from '../Composition/Text/Heading'
import Search from '../FormElements/Search';

const SearchSectionContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0 7px 0;
`


const SearchSection = ({titleText, actionText, actionOnClick}) => {
    return (
        <SearchSectionContainer>
            <Search/>
            <FilterButton/>
        </SearchSectionContainer>
    )
}

module.exports = SearchSection