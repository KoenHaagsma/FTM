import './App.css';
import { useState, useEffect } from 'react';
import * as d3 from 'd3';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv('nabijheid_excl_shapes.csv', d3.autoType).then((data) => {
      setData(data);
    });
  }, []);
  console.log(data);

  return <div className='App'>hallo</div>;
}

export default App;
