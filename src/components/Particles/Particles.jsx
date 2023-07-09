import React from "react";
import styles from "./Particles.module.css"

/* eslint-disable */
particlesJS.load("particles-js", "./particles.json", function () {
    console.log("callback - particles.js config loaded");
  });
  /* eslint-enable */

export default function Particles({estado}){
    return (
        <div id="particles-js" className={!estado ? styles.noVisible : ""}></div>
    )
}