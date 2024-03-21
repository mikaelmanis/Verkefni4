import React from 'react';
import './games.css';
import { GamesList } from '../../components/list/gameslist';

export function Games() {

    return (
      <div className='content'>
        <h1>Leikir</h1>
        <a href='/umsjon'>Umsjónarsíða</a>
        <GamesList />
      </div>
    );
  }