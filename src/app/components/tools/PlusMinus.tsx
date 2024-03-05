"use client"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "flowbite-react";
import { useState } from "react";
import styles from "./tools.module.css";

const PlusMinus = (props) => {

    const players = props.players;
    const [scores, setScores] = useState(() => players.reduce((acc, _, index) => ({ ...acc, [index]: 0 }), {}));

    function changeScore(playerIndex, type) {
        setScores((prevScores) => ({
            ...prevScores,
            [playerIndex]: type === "plus" ? prevScores[playerIndex] + 1 : prevScores[playerIndex] - 1,
        }));
    }


    return (
        <div style={{padding:"1em", textAlign:"center"}}>
            <h1>COMPTEUR</h1>
            {players.map((player, index) =>
                <div className={styles.scoreContainer} key={index}>
                    <h2>{player}</h2>
                    <Button.Group style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                        <Button onClick={() => changeScore(index, "minus")} color="gray" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                            <FontAwesomeIcon icon={faMinus} />
                        </Button>
                        <Button color="gray" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                            {scores[index]}
                        </Button>
                        <Button color="gray" onClick={() => changeScore(index, "plus")} className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200">
                            <FontAwesomeIcon icon={faPlus}  />
                        </Button>
                    </Button.Group>
                </div>
            )}
        <div/>
        </div>
    );

}

export default PlusMinus;