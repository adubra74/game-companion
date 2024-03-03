'use client'
import { Dice } from "dice-typescript";
import { useEffect, useRef, useState } from "react";
import DicePanel from "./DicePanel";
import styles from './tools.module.css';



const Dices = () => {
    const dice = new Dice();
    const results = dice.roll("2d6").renderedExpression;
    const [visible, setVisible] = useState(true);
    //const sum = dice.roll("2d6").total
    console.log(results); // Outputs a random number between 1 and 20.

    const [dices, setDices] = useState([

    ]);

    return (
        <>
            <div style={{position:'relative'}}>
                <h2>Dice</h2>
                <p>{results}</p>
                {visible &&
                    <DicePanel setDices={setDices} visible={visible} setVisible={setVisible} dices={dices} />
                }

            </div>

        </>
    );
};

export default Dices;