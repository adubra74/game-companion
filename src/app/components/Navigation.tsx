import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice, faRankingStar, faPersonCircleQuestion, faRotate, faPlusMinus, faHourglassEnd } from "@fortawesome/free-solid-svg-icons"
import styles from "./styles.module.css";
import React, { useState } from "react";

const Navigation = (props) => {
  const tools = props.tools;
  const tabs = [
    { name: "Dés", icon: faDice, dis: "translate-x-0", key:"dice" },
    { name: "Score", icon: faRankingStar, dis: "translate-x-16", key:"score" },
    { name: "Tour", icon: faRotate, dis: "translate-x-32", key:"tracker" },
    { name: "Compteur", icon: faPlusMinus, dis: "translate-x-48", key:"counter" },
    { name: "Sablier", icon:faHourglassEnd, dis: "translate-x-64" , key:"timer"},
  ];
  const [active, setActive] = useState(0);
  function setTab(i){
    setActive(i);
    props.setActiveTab(selectedTools[i].key);
  }
  const selectedTools = tabs.filter(tab => tools.includes(tab.key))

  return (
    <div className={`max-h-[4.4rem] ${styles.footerContainer} px-6 absolute bottom-5 w-full z-10`}>
      <ul className="flex relative">
        <span
          className={` duration-500 ${tabs[active].dis} border-4 border-gray-900 h-16 w-16 absolute
         -top-5 rounded-full`}
         style={{background:"var(--secondary-purple)"}}
        >
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
          rounded-tr-[11px] shadow-myShadow1"
          ></span>
          <span
            className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
          rounded-tl-[11px] shadow-myShadow2"
          ></span>
        </span>
        {selectedTools.map((tab, i) => (
          <li key={i} className="w-16">
            <a
              className="flex flex-col text-center pt-6"
              onClick={() => setTab(i)}
            >
              <span id="icon"
                className={`text-xl cursor-pointer duration-500 z-10 ${
                  i === active && "-mt-6"
                }`}
                style={{ color: i===active ? "var(--teal)" : "var(--secondary-purple)"}}
              >
                <FontAwesomeIcon icon={tab.icon} style={{fontSize:"1.5rem"}}/>
              </span>
              <span
              id="3"
                className={` ${
                  active === i
                    ? "translate-y-4 duration-700 opacity-100"
                    : "opacity-0 translate-y-10"
                } `}
                style={{color:"var(--secondary-purple)"}}
              >
                {tab.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;