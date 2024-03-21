import { useEffect, useState } from 'react';
import './teamslist.css';
export function TeamsList() {
    const [teams, setTeams] = useState<Array<any>>([])
    useEffect(() => {
        async function fetchData() {
          const response = await fetch('http://localhost:5000/teams');
          const teams = await response.json();
          setTeams(teams);
        }
        fetchData()
    }, []);
    return (
        <div>
            <div className='teams'>
                <ul>
                    {teams.map((team: any) => 
                    <li className='team'>{team.name}</li>)}
                </ul>
            </div>
        </div>
    );
    }