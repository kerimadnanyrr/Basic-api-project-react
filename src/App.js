import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import City from "./City";








function App() {
  const [search, setSearch] = useState("");

  const key = "ed13a0c204cc41f5146734d28f72d701";
  const [city, setCity] = useState();
  useEffect(() => {

    async function getUser() {

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key} `
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error.response);
      }
    }
    getUser();
  },[search]);


  console.log(search);
  return (
    <div className="App">
    
      <input
        type="text"
        className="form-control"
        onChange={(e) => setSearch(e.target.value)}
      ></input>


 <City city={city}></City>

    </div>
  );
}

export default App;
