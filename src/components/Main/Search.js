import React from 'react'
import './Search.css'
import { IoSearchOutline } from "react-icons/io5";


const Search = () => {
    return (
      
    <div className='search-bar'>
        <input type='search' placeholder='Search Movies, TV Series...' />
        <IoSearchOutline className='search-icon'/>
    </div>
    )
}

export default Search
