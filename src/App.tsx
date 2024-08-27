/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line import/no-unresolved
import { useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // const inputRef = useRef();
  const [weather, setWeather] = useState({});
  const inputRef = useRef<HTMLInputElement>(null);

  async function searchCity() {
    const key = 'd13ae272c48cc0338bdc5b2360f3bd1f';
    const city = inputRef.current?.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const dataWeather = await axios.get(url);

    console.log(dataWeather);
    setWeather(dataWeather.data);
  }

  return (
    <div>
      <p>Olá</p>
      <input ref={inputRef} type="text" placeholder="digite o nome da cidade" />
      <button
        type="button"
        onClick={searchCity}
      >
        Buscar
      </button>

      <p>
        {' '}
        o nome da cidadade é
        {' '}
        {weather.name}
      </p>
    </div>
  );
}

export default App;
