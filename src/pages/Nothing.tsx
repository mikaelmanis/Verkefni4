import corki from './corki.jpg';
import './pages.css';

export function Nothing() {
    return (
      <div className='content'>
        <h2>Þú átt ekki að vera hérna</h2>
        <img src={corki} alt="logo" />
      </div>
    );
  }