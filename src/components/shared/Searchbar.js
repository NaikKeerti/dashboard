import React ,{useEffect, useState} from 'react'
import useDebounce from '../utils/debounceHook'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';


const SearchBarWrapper = styled.div`
    width: 600px;
    background-color: #ede9e8;
    display: flex;
    border: 0.5px gray;
    border-radius:28px;
    align-items: center;
    padding: 5px;
`
const SearchInput = styled.input`
    width: 100%;
    font-size: 12px;
    border: none;
    background-color: #ede9e8;
    padding: 10px 20px;

    &&:focus{
        outline: none;
    }
`

const Searchbar = () => {

  const [searchInput, setSearchInput] = useState('');
  const batchedSearchItem = useDebounce(searchInput, 300); 
  useEffect(()=>{
    if (batchedSearchItem) {
      onSearchApiCall(batchedSearchItem)
    }
  }, [batchedSearchItem]);
  
  const onSearchApiCall = async ()=>{
    try{
      await fetch("/apiCall");
    }catch(error){
      throw new Error(error)
    }
  }
  const onSearchInput =(e)=>{
    setSearchInput(e.target.value)
  }
  return (
    <SearchBarWrapper>
     <FontAwesomeIcon icon={faSearch} style={{paddingLeft:'10px',color:'gray'}}/>
      <SearchInput type='text' placeholder='search for items, brands and inspiration....' onChange={onSearchInput}></SearchInput>
    </SearchBarWrapper>
  )
}

export default Searchbar;