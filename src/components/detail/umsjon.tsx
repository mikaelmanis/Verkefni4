import { useEffect, useState } from "react";

export function Umsjon() {
    const [teams, setTeams] = useState<Array<any>>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:5000/teams');
            const teams = await response.json();
            setTeams(teams);
        }
        fetchData();
    }, [teams]);

    function CreateGame({home, away, home_score, away_score, date }: any) {
        const body = JSON.stringify({
            home: home,
            away: away,
            home_score: home_score,
            away_score: away_score,
            date: date,
        });

        fetch('http://localhost:5000/games', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        });
    }
    return (
        <form action="/submit" onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = event.currentTarget as HTMLFormElement;

            
            CreateGame({
                home: form.home.value,
                away: form.away.value,
                home_score: form.home_score.valueAsNumber,
                away_score: form.away_score.valueAsNumber,
                date: form.date.valueAsDate.toISOString(),
             });
        }}>
            <input type="date" id="date" name="date" />
            <select name="home" id="home" required>
                {teams.map((team: any) => <option value={team.name}>{team.name}</option>)}
            </select>
            <input type="number" name="home_score" id="home_score" min={0} required></input>
            <select name="away" id="away" required>
                {teams.map((team: any) => <option value={team.name}>{team.name}</option>)}
            </select>
            <input type="number" name="away_score" id="away_score" min={0} required></input>
            <button type="submit">Búa til leik</button>
            </form>
    );
  }