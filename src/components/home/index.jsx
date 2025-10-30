import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import WeatherCard from "../../components/weatherCard";
import axios from "axios";

function Home() {
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
  const [cityData, setCityData] = useState("");

  useEffect(() => {
    // Code to run
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log("e", e);
    try {
      console.log("before submission");
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`
      );
      console.log("response", res.data);
      setData(res.data.list);
      console.log("city data", res.data.city.name);
      setCityData(res.data.city);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="weather-input">
        <h1>Weather Application</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup className="my-4">
            <Form.Control
              placeholder="Enter your City name"
              aria-label="city"
              aria-describedby="basic-addon1"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>

          <Button type="submit" variant="primary">
            Get Weather
          </Button>
        </Form>
      </div>
      {cityData && (
        <div className="city-card">
          {cityData.name}
        </div>
      )}

      <div className="weather-main">
        {data.map((item, index) => (
          <WeatherCard key={index} weather={item} />
        ))}
      </div>
    </div>
  );
}
export default Home;
