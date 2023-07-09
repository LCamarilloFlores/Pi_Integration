import React from "react";
import styles from "./Fondo.module.css"

export default function Fondo({estado}){
    return <div className={!estado ? styles.fondo : styles.animado}></div>
}