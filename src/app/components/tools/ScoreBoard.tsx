import { Accordion } from "flowbite-react";
import { useState } from "react";
import styles from './tools.module.css';

const ScoreBoard = (props) => {
    const { players } = props;

    // Initial scores setup
    const initialScores = players.reduce((acc, player) => ({
        ...acc,
        [player]: [{ line: 1, points: 0 }, { line: 2, points: 0 }]
    }), {});

    const [scores, setScores] = useState(initialScores);

  
    const addLine = () => {
        setScores(prevScores => {
            const newScores = { ...prevScores };
            Object.keys(newScores).forEach(player => {
                newScores[player].push({ line: newScores[player].length + 1, points: 0 });
            });
            return newScores;
        });
    };

    
    const handlePointsChange = (player, lineIndex, newPoints) => {
        setScores(prevScores => ({
            ...prevScores,
            [player]: prevScores[player].map((line, index) => index === lineIndex ? { ...line, points: newPoints } : line)
        }));
    };
    
    const calculateTotal = (player) => {
        return scores[player].reduce((total, item) => total + item.points, 0);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>TABLEAU DE SCORE</h1>
            <Accordion className={`accordeon`}>
                {players.map((player) => (
                    <Accordion.Panel key={player}>
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
                                        {scores[player].map((line, lineIndex) => (
                                            <tr key={lineIndex} className={`${styles.tablerow} bg-white dark:border-gray-700`}>
                                                <td className="whitespace-nowrap font-medium text-gray-900 p-1 m-h-2">
                                                    Tour {line.line}
                                                </td>
                                                <td className="whitespace-nowrap font-medium text-gray-900">
                                                    <input
                                                        style={{ textAlign: "center", width: "45vw" }}
                                                        type="number"
                                                        value={line.points}
                                                        onChange={(e) => handlePointsChange(player, lineIndex, parseInt(e.target.value, 10))}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                        <tr className={styles.total}>
                                            <td>Total</td>
                                            <td>{calculateTotal(player)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <button className={styles.button} onClick={addLine}>Ajouter une ligne</button>
                        </Accordion.Content>
                    </Accordion.Panel>
                ))}
            </Accordion>
        </>
    );
};

export default ScoreBoard;
