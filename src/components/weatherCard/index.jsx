import moment from "moment";
import "./weather.css";


function WeatherCard({ weather }) {
  return (
    <div className="weather-widget">
      <div className="top">
        <div className="wrapper">
          <div className="image">
            {weather.weather.map((item, key) => (
              <img
                key={key}
                src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
              />
            ))}
          </div>
          <div className="temp">
            {weather.weather.map((item, key) => (
              <h2 key={key}>{item.main}</h2>
            ))}

            <p>{weather.main.temp}</p>
          </div>
        </div>
        <div className="flex">
          <div className="time">
            <h2>{moment(weather.dt_txt).format("dddd ha")}</h2>
          </div>
          <div className="city">
            {weather.weather.map((item, key) => (
              <p key={key}>{item.description}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <ul>
          <li>
            <p>Wind</p>
            <span>{weather.wind.speed}</span>
          </li>
          <li>
            <p>Humidity</p>
            <span>{weather.main.humidity}</span>
          </li>
          <li>
            <p>Pressure</p>
            <span>{weather.main.pressure}</span>
          </li>
          <li>
            <p>Minimum Temp</p>
            <span>{weather.main.temp_min}</span>
          </li>
          <li>
            <p>Maximum Temp</p>
            <span>{weather.main.temp_max}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default WeatherCard;
