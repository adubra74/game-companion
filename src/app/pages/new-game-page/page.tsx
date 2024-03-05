'use client';
import { faDice, faRankingStar, faPersonCircleQuestion, faRotate, faPlusMinus, faHourglassEnd } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import NewGameNav from '../../components/NewGameNav';
import StepOne from '../../components/StepOne';
import StepTwo from '../../components/StepTwo';
import { useRouter } from 'next/navigation';

export default function newGame() {

    const [step, setStep] = useState(1);
    const router = useRouter()
    var selectedTools: any[];
    const [players, setPlayers] = useState(['']);
    const [gameName, setGameName] = useState('');

    const [tools, setTools] = useState([{
        id: 1,
        textId: 'dice',
        title: "Set de dés",
        icon: faDice,
        selected: false,
    }, {
        id: 2,
        textId: 'score',
        title: "Grille de score",
        icon: faRankingStar,
        selected: false,
    },
    //{
    //     id: 3,
    //     textId: 'first',
    //     title: "Selection 1er joueur",
    //     icon: faPersonCircleQuestion,
    //     enCours: false,
    // }, 
    {
        id: 3,
        textId: 'tracker',
        title: "Tracker de tour",
        icon: faRotate,
        selected: false,
    }, {
        id: 4,
        textId: 'counter',
        title: "Compteur",
        icon: faPlusMinus,
        selected: false,
    },
    {
        id: 5,
        textId: 'timer',
        title: "Sablier",
        icon: faHourglassEnd,
        selected: false,
    }
    ])

    const handleStartGame = async () => {
        // Filtrer les outils sélectionnés
        selectedTools = tools.filter((tool) => tool.selected).map((tool) => tool.textId);

        // Créer le tableau settings
        var settings = {
            tools: selectedTools,
            players: players,
            gameName: gameName,
        };

        // Stocker settings dans le localStorage
        localStorage.setItem('gameSettings', JSON.stringify(settings));
        await new Promise(resolve => setTimeout(resolve, 1000));

        router.push('/pages/in-game-page');  
        return settings;
    };

    //RETURN 
    if (step == 1) {
        return (
            <div className='w-full flex flex-col justify-between h-full'>
            <StepOne tools={tools} setTools={setTools} step={step} setStep={setStep} />
            <div className="absolute bottom-0 w-full">
            <NewGameNav step={step} setStep={setStep} />
            </div>
            </div>

        )
    } if (step == 2) {
        return (
            <div className='w-full flex flex-col justify-between h-full'>
            <StepTwo players={players} setPlayers={setPlayers} gameName={gameName} setGameName={setGameName} />
            <div className="absolute bottom-0 w-full">
            <NewGameNav step={step} setStep={setStep} />
            </div>
            </div>
        )
    } else {
        handleStartGame(); 
    }
}