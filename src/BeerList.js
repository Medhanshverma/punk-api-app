import React, { useState, useEffect } from "react";
import BeerCard from "./BeerCard";
import axios from "axios";

function BeerList() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a beer..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-wrap">
        {filteredBeers.map((beer) => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

export default BeerList;
