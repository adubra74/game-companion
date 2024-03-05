'use client'
import ResumeGameButton from "./components/ResumeGameButton";
import NewGameButton from "./components/NewGameButton";
import { useState } from "react";

export default function Home() {

  const [games, setGames] = useState([{
    id: 1,
    title: "7 wonders",
    enCours: true,
  }, {
    id: 2,
    title: "6 qui prends",
    enCours: true,
  }
  ])

  

  const playing = games.filter(game => { return game.enCours });
  return (
    <html>
      <head>
        <link rel="icon" href="./public/app-icon.jpg" />
      </head>
      <body>
        <main className="flex flex-col items-center gap-4 text-center pt-8">
          <NewGameButton/>
          <h1 className="mt-10">Reprendre une partie</h1>
          {playing.map((playing, index) =>
            <ResumeGameButton game={playing} key={index} setGames={setGames} />
          )}
        </main>
      </body>
    </html>
  );
}
