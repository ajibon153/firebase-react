import React from 'react';
import './App.css';
const api = {
  key: '2b1f57fe4ae8573be46850af20cc6408',
  base: 'https://api.openweathermap.org/data/2.5/',
};
const Index = () => {
  const [query, setQuery] = React.useState('');
  const [weather, setWeather] = React.useState({});

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery('');
          setWeather(result);
          console.log('weat', result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.main.temp > 16
            ? 'App warm'
            : 'App'
          : 'App'
      }
    >
      <main>
        <div className='search-box'>
          <input
            type='text'
            className='search-bar'
            placeholder='Search...'
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main !== 'undefined' ? (
          <>
            <div className='location-box'>
              <div className='location'>
                {weather.name}, {weather.sys.country}
              </div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{weather.main.temp}`C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </>
        ) : (
          ''
        )}
      </main>
    </div>
  );
};

export default Index;
