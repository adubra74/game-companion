'use client'
import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import styles from "./styles.module.css"

const ResumeGameButton = (props) => {
 

  function createNewGame(){
    
  }

    return (
      <Link href={{}}>
      <button className={styles.btn} onClick={createNewGame()}>
       {props.game.title}
        <FontAwesomeIcon icon={faPlay} />
      </button>
      </Link>
    );
  };

  export default ResumeGameButton;