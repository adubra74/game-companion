import Image from "next/image";
import d4 from '../../../../public/d4.svg';
import d6 from '../../../../public/d6.svg';
import d8 from '../../../../public/d8.svg';
import d10 from '../../../../public/d10.svg';
import d12 from '../../../../public/d12.svg';
import d20 from '../../../../public/d20.svg';
import styles from './tools.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger, faXmark } from "@fortawesome/free-solid-svg-icons";



const DicePanel = (props) => {
    const setDices = props.setDices;
    const dices = props.dices;
    const diceCatalog = [
        {
            name: 'D4',
            icon: d4,
            code: 'd4',
        },
        {
            name: 'D6',
            icon: d6,
            code: 'd6',
        }, {
            name: 'D8',
            icon: d8,
            code: 'd8',
        },
        {
            name: 'D10',
            icon: d10,
            code: 'd10',
        },
        {
            name: 'D12',
            icon: d12,
            code: 'd12',
        },
        {
            name: 'D20',
            icon: d20,
            code: 'd20',
        },
    ]

    function selectDice(dice) {
        //PAS COMME CA - CHERCHER COMMENT AJOUTER ET PAS REMPLACER !
        dices.push(dice);
        console.log(dices);
    }

    return (
        <div className={styles.dicePanel}>
            <button onClick={()=>{props.setVisible(!props.visible);}} ><FontAwesomeIcon icon={faXmark}/></button>
            {diceCatalog.map((dice, index) =>
                <button key={index} onClick={() => selectDice(dice)} className={styles.diceButton}>
                    <Image
                        src={dice.icon}
                        alt={dice.name}
                        width={25}
                        height={25} />{dice.name}
                </button>
            )}

        </div>
    );

}

export default DicePanel;