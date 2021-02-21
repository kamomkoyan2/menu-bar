import React, { useEffect, useState } from "react";
import './App.css';
import logo from './logo.png'
import List from './components/ListCocktails';
import withListLoading from './components/WithListLoading';


function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    cocktails: null
  })


  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:5000/api/cocktails`
    fetch(apiUrl)
      .then((res) => res.json())
      .then((cocktails) => {
        setAppState({ loading: false, cocktails: cocktails });
      });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <img className="logo-img" src={logo}></img>
      </div>
      <div className='cocktail-container'>
        <ListLoading isLoading={appState.loading} cocktails={appState.cocktails} />
      </div>
    </div>
  )
}

export default App;
