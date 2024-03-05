import React from "react";
import {faDice } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"

const Header = () => {

    return (
        <nav>
            <div className={styles.navbar}>
                <a href="/">
                <FontAwesomeIcon icon={faDice}/>
                </a>
            </div>
        </nav>
      );
    };
  
    export default Header;