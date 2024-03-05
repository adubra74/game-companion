
import { Dice } from "dice-typescript";
import { useState } from "react";
import DicePanel from "./DicePanel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "flowbite-react";



const Dices = () => {
    // const dice = new Dice();
    const [results, setResults] = useState([

    ]);

    const [visible, setVisible] = useState(false);
    //const sum = dice.roll("2d6").total
    //console.log(results); // Outputs a random number between 1 and 20.

    const [dices, setDices] = useState([

    ]);

    function deleteDice(index) {
        const updatedItems = [...dices.slice(0, index), ...dices.slice(index + 1)];
        //console.log("nouveau tableau: " , updatedItems)
        setDices(updatedItems);
    }

    function throwDice(dice) {
        const single = new Dice();
        const singleResult = single.roll(dice.code).total;
        setResults([...results, singleResult]);
        console.log(results);
    };


    function throwAll() {
        const allResults = dices.map((dice) => {
            const single = new Dice();
            return single.roll(dice.code).total;
        });

        setResults([...results, ...allResults]);
    };

    function resetResults() {
        setResults([]);
    };



    // A REPRENDRE LANCEMENT DE DES - VOIR CHAT
    return (
        <>
            <div style={{ position: "relative", height:"70vh"}} className="flex flex-col justify-center items-center text-center gap-2">

                <h2>DÉS</h2>
                <div className="flex flex-row">
                    {results.map((result, index) => (
                        <span key={index}>{result} | </span>
                    ))}
                    <span> total = {results.reduce((acc, curr) => acc + curr, 0)}</span>
                </div>

                {visible ?
                    <DicePanel setDices={setDices} visible={visible} setVisible={setVisible} dices={dices} />
                    : <Button className="rounded-full w-16 absolute bottom-6 right-6" onClick={()=>setVisible(!visible)} style={{backgroundColor:"var(--teal)",aspectRatio:"1/1", color:"var(--secondary-purple"}}><FontAwesomeIcon icon={faPlus} size="lg"/></Button>
                }
                <div className="flex flex-row gap-10 flex-wrap w-4/5 justify-center">
                    {dices.map((dice, index) => (
                        <div className="flex flex-col gap-2 justify-center items-center" key={index}>
                            <button onClick={() => throwDice(dice)}>
                            <Image
                                src={dice.icon}
                                alt={dice.name}
                                width={40}
                                height={40} />
                            {dice.name}
                            </button>
                            <button onClick={() => deleteDice(index)}><FontAwesomeIcon icon={faTrash} width={50} /></button>

                        </div>
                    ))}
                </div>
                <div className="flex gap-2 flex-col justify-center items-center">
                    <Button className="rounded" style={{ backgroundColor: "var(--teal)", color: "var(--secondary-purple)", maxWidth: "50vw" }}
                        onClick={() => throwAll()}
                    >
                        Lancer tous les dés
                    </Button>
                    <Button className="rounded" style={{ backgroundColor: "var(--secondary-purple)", maxWidth: "50vw" }}
                        onClick={() => resetResults()}
                    >
                        Réinitialiser les lancers
                    </Button>
                </div>
            </div>

        </>
    );
};

export default Dices;