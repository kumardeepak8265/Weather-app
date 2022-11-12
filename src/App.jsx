import axios from "axios";
import { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Result from "./Result";
import Search from "./Search";

function App() {
  const [search, setSearch] = useState("");
  const [Weather, setWeather] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const WeatherApi = () => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=061602ffb426fc9a2f8cb137ac8b452c"
      )
      .then((res) => {
        setWeather(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="flex  flex-col h-screen px-20 ">
      <div className=" h-1/10  ">
        <NavBar></NavBar>
      </div>

      <div className=" flex flex-col bg-gray-100 h-4/5">
        <Search
          value={search}
          onChange={handleChange}
          onClick={WeatherApi}
        ></Search>
        {Weather && <Result Weather={Weather}></Result>}
        {!Weather && (
          <div className="text-red-500 text-4xl px-4">Loading...</div>
        )}
      </div>
      <div>
        <Footer className="h-1/10"></Footer>
      </div>
    </div>
  );
}

export default App;
