import React from 'react'; // Import React
import { TeamsList } from '../../components/list/teamslist';
import './teams.css';

export function Teams() {
    return (
        <div>
            <h1>Liðin</h1>
            <TeamsList/> 
        </div>
    );
}
