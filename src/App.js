import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharactersGrid from "./components/characters/CharactersGrid"
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      );
      console.log(result.data);
      setItems(result.data)
      setIsloading(false)
    };
    fetchItems()
  }, []);
  return (
    <div className="Container">
      <Header />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
