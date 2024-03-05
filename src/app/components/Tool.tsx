
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css"

const Tool = (props) => {
    const { tool, setTools } = props;

    function select() {
        tool.selected = !tool.selected;
        setTools((prevTools) => [...prevTools]);
        console.log(tool.textId + (tool.selected ? " is selected" : " is not"));

    }

    return (
        <div className="flex flex-row my-4 gap-3 items-center">
            <button className={`${styles.btn} ${tool.selected ? styles.selected : ""}`} id="tool" onClick={select}>
                <FontAwesomeIcon icon={tool.icon} />
            </button>
            <p>{tool.title}</p>
            {/* <button className={styles.btn} onClick={console.log(getItem())}>Get</button> */}
        </div>
    );
};

export default Tool;