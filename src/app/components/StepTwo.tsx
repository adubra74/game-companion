import { Accordion, Label, TextInput } from "flowbite-react"
import styles from "./styles.module.css";


const StepTwo = (props) => {
    const setPlayers = props.setPlayers;
    const players = props.players;
    var gameName = props.gameName;
    const setGameName = props.setGameName;




    const addPlayerField = () => {
        setPlayers([...players, '']); // Ajoute un champ vide à la fin du tableau
    };

    // Fonction pour mettre à jour le nom du joueur dans le tableau
    const handlePlayerChange = (index: number, value: string) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = value;
        setPlayers(updatedPlayers);
    };

    // Fonction pour gérer le clic sur le bouton OK
    const handleOKClick = () => {
        console.log('Noms des joueurs :', players);
        console.log('Nom du jeu: ', gameName);
    };

    return (
        <div className="flex flex-col justify-center p-4">
            <h2 style={{fontSize:'1.2rem', fontWeight:'bold', textAlign:'center'}}>Nom du jeu</h2>
            <TextInput className="p-2" id='gameName' type="text" value={gameName} onChange={e => setGameName(e.target.value)} />
            <h2 className="my-4" style={{fontSize:'1.2rem', fontWeight:'bold', textAlign:'center'}}>Joueurs</h2>
            <div className=" overflow-scroll">
            <Label style={{ color: 'var(--text-color)' }}>Joueur 1</Label>
            <TextInput className={styles.textInput} id="player1" type="text" value={players[0]} onChange={e => handlePlayerChange(0, e.target.value)} />

            {/* Boucle sur les joueurs restants pour créer les champs de texte */}
            {players.slice(1).map((player, index) => (
                <div key={index} className="my-2">
                    <Label style={{ color: 'var(--text-color)' }}>{`Joueur ${index + 2}`}</Label>
                    <TextInput
                        className=""
                        type="text"
                        value={player}
                        onChange={(e) => handlePlayerChange(index + 1, e.target.value)}
                    />
                </div>
            ))}
            </div>
            <div className="flex flex-row gap-8 items-center mt-4">
                <button className="p-2 rounded-md w-3/5" style={{backgroundColor:'var(--secondary-purple'}} onClick={addPlayerField}>Ajouter un joueur</button>
                <button className="p-2 rounded-md w-3/5" style={{backgroundColor:'var(--secondary-purple'}} onClick={handleOKClick}>Valider</button>
            </div>
        </div>
    );
};
export default StepTwo;
