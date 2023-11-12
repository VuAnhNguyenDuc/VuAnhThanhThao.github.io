import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import HomePage from "./components/pages/HomePage";
import AlbumPage from "./components/pages/AlbumPage";

function App() {
  const [data, setData] = useState(null);
  const URL = process.env.REACT_APP_DATA_SERVER;

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(response => setData(response))
      .catch(error => console.log(error));
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage data={data}/> } />
        <Route path="/album" element={ <AlbumPage data={data}/> } />
      </Routes>
    </div>
  );
}

export default App;
