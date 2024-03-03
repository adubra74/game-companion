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
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <h1 className="z-10 max-w-5xl w-full items-center justify-between text-m lg:flex">
            Lancer une nouvelle partie
          </h1>
          <NewGameButton />

          <h1>Reprendre une partie</h1>
          {playing.map((playing, index) =>
            <ResumeGameButton game={playing} key={index} setGames={setGames} />
          )}
        </main>
      </body>
    </html>
  );
}
