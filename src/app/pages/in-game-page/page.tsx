'use client'
import Navigation from "../../components/Navigation";
import { faDice, faRankingStar, faPersonCircleQuestion, faRotate, faPlusMinus, faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import ScoreBoard from "../../components/tools/ScoreBoard";
import PlusMinus from "../../components/tools/PlusMinus";
import Dices from "../../components/tools/Dices";

function InGamePage() {

    const [tools, setTools] = useState([]);
    const [players, setPlayers] = useState(null);
    const [gameName, setGameName] = useState(null);
    const [activeTab, setActiveTab] = useState('');
    

    useEffect(() => {
        // Récupérer les données du localStorage
        const settingsString = localStorage.getItem('gameSettings');

        if (settingsString) {
            // Convertir la chaîne JSON en objet JavaScript
            const parsedSettings = JSON.parse(settingsString);
            setTools(parsedSettings.tools || []);
            setPlayers(parsedSettings.players || []);
            setGameName(parsedSettings.gameName || '');


            // Utiliser les données comme nécessaire
            console.log('Settings récupérés :', parsedSettings);

        }
    }, []);


if (tools.length > 0){
    return (
        <>
            {/* <h2>IN GAME PAGE</h2> */}
                { activeTab==='score' && <ScoreBoard players={players} />}
                { activeTab==='dice' && <Dices/>}
                { activeTab==='counter' && <PlusMinus players={players} />}
            <Navigation tools={tools} setActiveTab={setActiveTab} activeTab={activeTab}/>
        </>
    )
}else {return(<p>pas d'outils séléctionés</p>);}
};

export default InGamePage;