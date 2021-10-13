import React from 'react';
import { useState } from 'react';
import styled from 'styled-components/native';
import Input from './Input'

const SearchWrapper = styled(Input)`
    width: 70%;
    height: 45px;
`

const Search = () => {
    const [searchInput, setSearchInput] = useState('')
    return (
        <SearchWrapper
            placeholder='Search'
            placeholderTextColor='#ECE5F0'
            clearButtonMode='while-editing'
            value={searchInput}
            onChangeText={(text) => setSearchInput(text)}
            returnKeyType='done'
        >

        </SearchWrapper>
    )
}

export default Search