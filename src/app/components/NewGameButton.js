'use client'
import React from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Link from 'next/link'
import styles from './styles.module.css'

const NewGameButton = () => {
  

  function createNewGame(){
    console.log("lancement d'un nouvelle partie");
  }

    return (
      <Link href="/pages/new-game-page/" >
      <button className={styles.btn} onClick={createNewGame()}>
        Nouvelle Partie
        <FontAwesomeIcon icon={faPlus} />
      </button>
      </Link>
    );
  };

  export default NewGameButton;