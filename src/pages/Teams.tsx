import { useEffect, useState } from 'react';
import './pages.css';

export function Teams() {
    const [teams, setTeams] = useState<Array<any>>([])
    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:5000/teams');
          const teams = await response.json();
          setTeams(teams);
        }
        fetchData()
    }, [teams]);
    return (
        <div className='content'>
            <h2>Liðin</h2>
            <ul>
                {teams.map((team: any) => <li>{team.name}</li>)}
            </ul>
        </div>
    );
  }