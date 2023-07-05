import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import BotonOnOff from "../BotonOnOff/BotonOnOff.jsx";
import styles from "./Nav.module.css"
import {Link} from "react-router-dom"

function Nav({onSearch,estado,animar}){
    return (
        <div className={styles.container}>
            <BotonOnOff
                estado={estado}
                nombre="Animación"
                onClick={animar}
            />
            <SearchBar onSearch={onSearch} />
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default Nav;