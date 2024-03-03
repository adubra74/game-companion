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
        <>
            <h2>Nom du jeu</h2>
            <TextInput className={styles.textInput} id='gameName' type="text" value={gameName} onChange={e => setGameName(e.target.value)} />
            <h2>Joueurs</h2>
            <Label>Joueur 1</Label>
            <TextInput className={styles.textInput} id="player1" type="text" value={players[0]} onChange={e => handlePlayerChange(0, e.target.value)} />

            {/* Boucle sur les joueurs restants pour créer les champs de texte */}
            {players.slice(1).map((player, index) => (
                <div key={index}>
                    <Label>{`Joueur ${index + 2}`}</Label>
                    <TextInput
                        className={styles.textInput}
                        type="text"
                        value={player}
                        onChange={(e) => handlePlayerChange(index + 1, e.target.value)}
                    />
                </div>
            ))}
            <button onClick={addPlayerField}>Ajouter un joueur</button>

            <button onClick={handleOKClick}>OK</button>
        </>
    );
};
export default StepTwo;
