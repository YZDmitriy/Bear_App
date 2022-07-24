import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { BeerDetals } from '../components/BeerDetals/BeerDetals';
import { BeersList } from '../components/BeersList/BeersList';
import { Header } from '../components/Header/Header';
import './App.scss';

function App() {
  const [beersArray, setBeersArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers?per_page=80')
      .then((response) => {
        return response.json();
      })
      .then((jsonObject) => {
        const beersObj = jsonObject;
        setBeersArray(beersObj);
      });
  }, []);

  const handleInput = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);
  };

  const filterResults = beersArray.filter((result) => {
    let beerHasMatched = true;

    if (searchTerm) {
      beerHasMatched = result.name.toLowerCase().includes(searchTerm);
    }

    return beerHasMatched;
  });

  console.log('===========', beersArray);

  return (
    <>
      <Header handleInput={handleInput} searchTerm={searchTerm} />
      <Routes>
        <Route path='/' element={<BeersList beersArray={filterResults} />} />
        <Route
          path='/:id'
          element={
            beersArray.length > 0 && <BeerDetals beersArray={beersArray} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
