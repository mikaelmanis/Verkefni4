import { useLocation } from 'react-router-dom';

export function SoloGame() {
    const location = useLocation();
    const game = location.state;

    const updateScore = async () => {
        // Make API call to update the score
        try {
            const response = await fetch('https://api.example.com/update-score', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    gameId: game.id,
                    newScore: 10 // Replace with the new score value
                })
            });

            if (response.ok) {
                // Score updated successfully
                console.log('Score updated successfully');
            } else {
                // Handle error response
                console.log('Failed to update score');
            }
        } catch (error) {
            // Handle network error
            console.log('Network error occurred');
        }
    };

    return (
        <div className='content'>
            <h2>Stjórnleikur</h2>
            <p>Hérna getur þú skoðað og breytt leik.</p>
            
            <div className='home'>{game.home.name}</div> <div className="score">{game.home.score} - {game.away.score}</div> <div className="away">{game.away.name}</div>

            <button onClick={updateScore}>Update Score</button>
        </div>
    );
}