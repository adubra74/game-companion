import { Accordion, Button, Table, TableHead, TextInput } from "flowbite-react";
import { useState } from "react";
import styles from './tools.module.css';

const ScoreBoard = (props) => {
    //ONGLETS
    const players = props.players;

    //LIGNES
    const addLine = () => {
        setTableData([...tableData, { ligne: tableData.length + 1, points: 0, total: 0 }]);
    };

    const initialData = [
        { ligne: 1, points: 0, total: 0 },
        { ligne: 2, points: 0, total: 0 },
    ];

    const [tableData, setTableData] = useState(initialData);

    const handlePointsChange = (index, newPoints) => {
        // Met à jour les points pour le joueur spécifié
        const updatedData = [...tableData];
        updatedData[index].points = newPoints;
        setTableData(updatedData);
        //console.log(tableData);
    };

    const handleCatChange = (index, newCat) => {
        // Met à jour la catégorie pour le joueur spécifié
        const updatedData = [...tableData];
        updatedData[index].ligne = newCat;
        setTableData(updatedData);
        //console.log(tableData);
    };

    const calculateTotal = (playerIndex) => {
        // Calcule la somme des points pour le joueur spécifié
        return tableData.reduce((total, item) => total + item.points, 0);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>TABLEAU DE SCORE</h1>
            <Accordion className={`accordeon`}>
                {players.map((player, index) =>
                    <Accordion.Panel key={index} >
                        <Accordion.Title>{player}</Accordion.Title>
                        <Accordion.Content className={styles.accordeonContent}>
                            <div className="overflow-auto">
                                <h2>{player} :</h2>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th>Tours / Cat</th>
                                            <th>Points</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {tableData.map((line, index) => (
                                            <tr className={`${styles.tablerow} bg-white dark:border-gray-700`} key={index}>
                                                <td className="whitespace-nowrap font-medium text-gray-900 p-1 m-h-2">
                                                    <input
                                                        style={{ textAlign: "center", width: "45vw" }}
                                                        type="text"
                                                        value={`Tour ${line.ligne}`}
                                                        onChange={(e) => handleCatChange(index, e.target.value)}
                                                    />
                                                </td>
                                                <td className="whitespace-nowrap font-medium text-gray-900">
                                                    <input
                                                        style={{ textAlign: "center", width: "45vw" }}
                                                        type="number"
                                                        value={player.points}
                                                        onChange={(e) => handlePointsChange(index, parseInt(e.target.value, 10))}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className={styles.total}>
                                            <td >Total</td>
                                            <td>{calculateTotal(index)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <button className={styles.button} onClick={addLine}>Ajouter une ligne</button>
                        </Accordion.Content>
                    </Accordion.Panel>
                )}
            </Accordion>
        </>
    );
}

export default ScoreBoard;



