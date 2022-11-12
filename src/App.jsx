import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Result from "./Result";
import Search from "./Search";

function App() {
  const [search, setSearch] = useState("");
  const [Weather, setWeather] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const WeatherApi = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=061602ffb426fc9a2f8cb137ac8b452c`
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className="flex  flex-col h-screen sm:px-20 px-2">
      <div className=" h-1/10  ">
        <NavBar></NavBar>
      </div>
      <div className=" flex flex-col bg-no-repeat bg-cover bg-[url('https://cdn.discordapp.com/attachments/943172350139052092/1040983865839337522/2560px-Clouds_Blue_Sky_001.jpg')] h-4/5">
        <Search
          value={search}
          onChange={handleChange}
          onClick={WeatherApi}
        ></Search>
        {Weather && <Result Weather={Weather}></Result>}
        {!Weather && (
          <h1 className="flex justify-center text-2xl px-4 font-bold   ">
            select a city
          </h1>
        )}
        {error && <h1 className="px-4">{error}</h1>}
      </div>
      <div>
        <Footer className="h-1/10"></Footer>
      </div>
    </div>
  );
}

export default App;
