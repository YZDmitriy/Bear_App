// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import './App.scss';



function App() {

    // const [beersArray, setBeersArray] = useState([])
    // const [searchTerm, setSearchTerm] = useState('') 
  
    // useEffect(() => {
    //     fetch('https://api.punkapi.com/v2/beers?per_page=80') 
    //     .then(response => {return response.json()})
    //     .then(jsonObject => {
    //         const beersObj = jsonObject;
    //         setBeersArray(beersObj)
    //     })
    // }, [])

    // const handleInput = event => {
    //     const inputValue = event.target.value.toLowerCase();
    //     setSearchTerm(inputValue)
    // }

    // const filterResults = beersArray.filter(result => {
    //     let beerHasMatched = true;
      
    //     if (searchTerm) {
    //       beerHasMatched = result.name.toLowerCase().includes(searchTerm);
    //     }
      
      
    //     return beerHasMatched;
    //   });

  return (
    // <Router>
        <div className="App">
            <Header />
            {/* <Switch>
                <Route path="/beerinfo/:id">
                    {beersArray.length > 0 && <BeerInfo beersArray={beersArray}/>}
                </Route>
                <Route path="/">
                    <SearchBox handleInput={handleInput} searchTerm={searchTerm}/>
                    <BeersList beersArray={filterResults} />
                </Route> 
            </Switch> */}
        </div>
    // </Router>
  );
}

export default App;
