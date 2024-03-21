import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './gameslist.css';
export type Game = {
    id?: number;
    date: string;
    home: {
        name: string;
        score: number;
    };
    away: {
        name: string;
        score: number;
    };
}

export function GamesList() {
    const navigate = useNavigate();
    const [games, setGames] = useState<Array<Game>>([])

    useEffect(() => {
            async function fetchData() {
                const response = await fetch('http://localhost:5000/games');
                const games = await response.json();
                setGames(games);
            }
            fetchData()
    }, [games]);
    const gamesByDate = games.reduce((acc: any, game: Game) => {
        const date = game.date.split('T')[0];
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(game);
        return acc;
    }, {});

    return (
        <div className='games'>
            {Object.entries(gamesByDate).map(([date, games]) => (
                <div key={date}>
                    <h2>{new Date(date).toDateString()}</h2>
                    <ul>
                        {(games as Game[]).map((game: Game) => (
                            <li className='game' key={game.id} onClick={() => navigate('/sologame', { state: game })}>
                                <div className='home'>{game.home.name}</div> <div className="score">{game.home.score} - {game.away.score}</div> <div className="away">{game.away.name}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
