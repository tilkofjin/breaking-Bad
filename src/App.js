import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharactersGrid from "./components/characters/CharactersGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsloading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="Container">
      <Header />
      <Search
        getQuery={(query) => {
          setQuery(query);
        }}
      />
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
