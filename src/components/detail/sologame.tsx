import { useLocation } from 'react-router-dom';
import './sologame.css';

export function SoloGame() {
    const location = useLocation();
    const game = location.state;
    console.log(game.id)
   
    function DeleteGame() {
        fetch('http://localhost:5000/games/' + game.id, {
            method: 'DELETE',
        });
    }
    return (
        <div className='deletion'>
            <h1>Leikur</h1>
            <div>
                <h2>{new Date(game.date).toDateString()}</h2>
                <div className='gameForm'>
                    <div className='home'>{game.home.name}</div> <div className="score">{game.home.score} - {game.away.score}</div> <div className="away">{game.away.name}</div>
                </div>
                <button onClick={() => {
                    if (window.confirm('Are you sure you want to delete this game?')) {
                        DeleteGame();
                    }
                }}>Eyða leik</button>
            </div>
        </div>
    );
}
