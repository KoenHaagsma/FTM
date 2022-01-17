import React, { useState, useEffect } from "react";
import "./App.css";
import { csv } from "d3";

function App() {
  const [postcode, setPostcode] = useState("");
  const [output, setOutput] = useState(null);
  const [dataShapes, setDataShapes] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetch("/data_shapes.json")
        .then((response) => response.json())
        .then((data) => {
          setDataShapes(data);
        });

      const response = await csv("./output.csv");
      setOutput(response);
    };

    getData();
  }, []);

  const handleClick = () => {
    const areaCode = postcode.toUpperCase();
    let result = output.filter((d) => d.PC6 === areaCode)[0];
    let dataShape = dataShapes.filter((d) =>
      d.GWB_CODE.includes(result.Buurt2019)
    );
    console.log(dataShape);
  };

  return (
    <div className="container">
      <h1>Afstanden tot voorzieningen <span>in emmen</span></h1>
      <div className="area-code">
        <p>Zoek andere wijk:</p>
        <input
          placeholder="Postcode"
          maxLength="6"
          id="code"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <button onSubmit={handleClick}>🔎</button>
      </div>
      <div className="years">
        <button>2007</button>
        <button>2019</button>
      </div>
    </div>
  );
}

export default App;
