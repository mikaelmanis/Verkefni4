import corki from './corki.jpg';
import './nothing.css';

export function Nothing() {
    return (
      <div className='content'>
        <h2>Þú átt ekki að vera hérna</h2>
        <img src={corki} alt="logo" />
        <a href='/'>Aftur á heimasíðu</a>
      </div>
    );
  }