import { useEffect, useState } from 'react';

export function TeamsList() {
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
        <div>
            <div className='team'>
                <ul>
                    {teams.map((team: any) => 
                    <li>{team.name}</li>)}
                </ul>
            </div>
        </div>
    );
    }