import React, { useState, useEffect } from 'react';
import Carousel from './components/Carousel.js';

const App = props => {
  const [discoveryPageData, setDiscoveryPageData] = useState([]);

  /* get data from ../public/discovery_page.json */
  const getData = () => {
    fetch('discovery_page.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setDiscoveryPageData(myJson.sections);
      });
  };

  /* after render, getData */
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {/* checking that state is not empty */}
      {/* mapping discovery page's data into carousels */}

      {discoveryPageData &&
        discoveryPageData.length > 0 &&
        discoveryPageData.map(item => (
          <Carousel key={item.title} restaurants={item.restaurants} title={item.title} />
        ))}
    </div>
  );
};

export default App;
