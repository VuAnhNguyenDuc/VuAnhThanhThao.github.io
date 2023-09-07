import NavBar from './components/navbar/NavBar';
import MainBodySection from './components/mainbody/MainBodySection';
import React, { useState, useEffect } from 'react';

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
      { data &&
        <section>
          {/* NavBar Start */}
          <NavBar data={data} />
          {/* NavBar End */}

          {/* Main Body Start */}
          <MainBodySection data={data} />
          {/* Main Body End */}
        </section>
      }
    </div>
  );
}

export default App;
