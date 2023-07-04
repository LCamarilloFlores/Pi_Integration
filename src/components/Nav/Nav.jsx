import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";

function Nav({onSearch}){
    return (
        <div>
            <SearchBar onSearch={onSearch} />
        </div>
    )
}

export default Nav;