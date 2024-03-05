import React from "react";
import { faArrowRight, faPlay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"

const NewGameNav = (props) => {
    const step = props.step;
    const setStep = props.setStep;

    return (
        <nav className={styles.footerContainer}>
            <div className={styles.footer}>
                {step === 1 &&
                    <button className={styles.nextStep} onClick={() => { setStep(step + 1) }} >
                        <p>Étape 2</p>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                }
                {step === 2 &&
                    <button className={styles.nextStep} onClick={() => { setStep(step + 1) }} >
                        <p>Lancer la partie</p>
                        <FontAwesomeIcon icon={faPlay} />
                    </button>
                }

            </div>
        </nav>
    );
};

export default NewGameNav;