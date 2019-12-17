import React from 'react';

import './search-box.styles.css'



export const SearchBox = ({placeholder, handelChange}: any) => {
    return (
        <input type="search"  className="search-box" placeholder={placeholder} onChange={handelChange}/>
    )
}