import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [json, setJson] = useState([])

  useEffect(() => {
    fetchWatches()
  }, []) // [] -> ajetaan vain ensimmäisellä renderöinnillä, ilman rajoitus joutuu ikuiseen looppiin

  const fetchWatches = () => {
    fetch("https://akseli-watch-list.herokuapp.com/api/watches")
    .then(response => response.json())
    .then(data => setJson(data._embedded.watches))
  }

  return (
    <div className="App">
      <p>{json}</p>
    </div>
  );
}

export default App;
