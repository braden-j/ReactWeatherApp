const weather = document.getElementById("weather");

function WeatherInfo({ location, date, currentTemp, feelsLike }) {
  return (
    <div className="weather-info">
      <p className="location">{location}</p>
      <p className="date">{date}</p>
      <img className="weather-icon" src="/assets/sun.png" alt="Current weather" />
      <div className="temperature">
        <div className="temp">
          <span className="temp-value">{currentTemp}</span>
          <span className="temp-label">Current</span>
        </div>
        <div className="temp">
          <span className="temp-value">{feelsLike}</span>
          <span className="temp-label">Feels Like</span>
        </div>
      </div>
    </div>
  );
}

function HourItem({ time, icon, temp }) {
  return (
    <div className="hour-item">
      <p className="hour-time">{time}</p>
      <img className="hour-icon" src={`/assets/${icon}.png`} alt={icon} />
      <p className="hour-temp">{temp}</p>
    </div>
  );
}

function SquareBox({ title, icon, primary, secondary }) {
  return (
    <div className="square-box">
      <h3>{title}</h3>
      <div className="box-icon">
        <img className="icon" src={`/assets/${icon}.png`} alt={icon} />
        {primary && <span className="icon-label">{primary}</span>}
      </div>
      {secondary && <p>{secondary}</p>}
    </div>
  );
}

function ForecastDay({ day, icon, temp }) {
  return (
    <div className="forecast-day">
      <p className="day">{day}</p>
      <img className="forecast-icon" src={`/assets/${icon}.png`} alt={icon} />
      <p className="temperature">{temp}</p>
    </div>
  );
}

function WeatherApp() {
  const [location, setLocation] = React.useState('Philadelphia');
  const [date, setDate] = React.useState('Monday, Feb 5');
  const [currentTemp, setCurrentTemp] = React.useState('72°F');
  const [feelsLike, setFeelsLike] = React.useState('75°F');
  const [hourlyForecast, setHourlyForecast] = React.useState([
    { time: 'Now', icon: 'sun', temp: '72°F' },
    { time: '1PM', icon: 'sun', temp: '74°F' },
    { time: '2PM', icon: 'sun', temp: '75°F' },
    { time: '3PM', icon: 'cloud', temp: '75°F' },
    { time: '4PM', icon: 'cloud', temp: '74°F' },
    { time: '5PM', icon: 'rain', temp: '72°F' },
    { time: '6PM', icon: 'rain', temp: '70°F' },
    { time: '7PM', icon: 'rain', temp: '68°F' },
  ]);
  const [uvIndex, setUVIndex] = React.useState({ value: '7', description: 'Wear Sun Protection' });
  const [wind, setWind] = React.useState({ speed: '12 mph' });
  const [sun, setSun] = React.useState({ sunrise: '7:04AM', sunset: '6:32PM' });
  const [clothing, setClothing] = React.useState({ description: "It's a warm one! A t-shirt and shorts should be enough today." });
  const [weeklyForecast, setWeeklyForecast] = React.useState([
    { day: 'Mon', icon: 'sun', temp: '72°F' },
    { day: 'Tue', icon: 'sun', temp: '75°F' },
    { day: 'Wed', icon: 'cloud', temp: '70°F' },
    { day: 'Thu', icon: 'cloud', temp: '68°F' },
    { day: 'Fri', icon: 'rain', temp: '66°F' },
    { day: 'Sat', icon: 'sun', temp: '74°F' },
    { day: 'Sun', icon: 'sun', temp: '77°F' },
  ]);

  return (
    <div>
      <div className="weather-main">
        <WeatherInfo 
          location={location}
          date={date}
          currentTemp={currentTemp}
          feelsLike={feelsLike}
        />
        
        <div className="hourly-box">
          <h3>Today's Forecast</h3>
          {hourlyForecast.map((hour, index) => (
            <HourItem 
              key={index}
              time={hour.time}
              icon={hour.icon}
              temp={hour.temp}
            />
          ))}
        </div>
      </div>
      
      <div className="square-boxes">
        <SquareBox 
          title="UV Index"
          icon="uv"
          primary={`UV: ${uvIndex.value}`}
          secondary={uvIndex.description}
        />
        <SquareBox 
          title="Wind Speed"
          icon="wind"
          primary={wind.speed}
        />
      </div>
      
      <div className="square-boxes">
        <SquareBox 
          title="Sunset"
          icon="sunset"
          primary={sun.sunset}
          secondary={`Sunrise: ${sun.sunrise}`}
        />
        <SquareBox 
          title="What to Wear"
          icon="shirt"
          secondary={clothing.description}
        />
      </div>
      
      <div className="forecast-box">
        {weeklyForecast.map((day, index) => (
          <ForecastDay 
            key={index}
            day={day.day}
            icon={day.icon}
            temp={day.temp}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("weather"));
root.render(<WeatherApp />);
