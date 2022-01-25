import React, { useState, useEffect } from "react";
import "./App.css";
import { csv } from "d3";
import RadarCharts from "./Chart";
import Walking from "./Walking";
import Header from "./Header";

function App() {
  const [postcode, setPostcode] = useState("1061eb");
  const [output, setOutput] = useState(null);
  const [dataShapes, setDataShapes] = useState(null);
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [firstYear, setFirstYear] = useState(null);
  const [lastYear, setLastYear] = useState(null);

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
    let shapes = dataShapes.filter((d) =>
      d.GWB_CODE.includes(result.Buurt2019)
    );

    setCity(shapes[0]["GWB_NAAM"]);

    setLastYear(shapes[shapes.length - 1].Jaar);
    setFirstYear(shapes[0].Jaar);

    let dataShape = shapes.map((d) => {
      return [
        {
          axis: "Huisarts",
          value: d.huisarts_afst ? +d.huisarts_afst.replace(",", ".") : 0,
        },
        {
          axis: "Huisartsenpost",
          value: d.ziekenhuis_excl_afst
            ? +d.ziekenhuis_excl_afst.replace(",", ".")
            : 0,
        },
        {
          axis: "Ziekenhuis",
          value: d.ziekenhuis_incl_afst
            ? +d.ziekenhuis_incl_afst.replace(",", ".")
            : 0,
        },
        {
          axis: "Bibliotheek",
          value: d.bibliotheek_afst ? +d.bibliotheek_afst.replace(",", ".") : 0,
        },
        {
          axis: "Havo",
          value: d.havovwo_afst ? +d.havovwo_afst.replace(",", ".") : 0,
        },
        {
          axis: "Vmbo",
          value: d.vmbo_afst ? +d.vmbo_afst.replace(",", ".") : 0,
        },
        {
          axis: "Basisschool",
          value: d.basis_afst ? +d.basis_afst.replace(",", ".") : 0,
        },
      ];
    });

    setData(dataShape);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Walking />
        <h1>
          Afstanden tot voorzieningen <span>{city}</span>
        </h1>
        <div className="area-code">
          <p>Zoek andere wijk:</p>
          <input
            placeholder="Postcode"
            maxLength="6"
            id="code"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
          />
          <button onClick={handleClick}>🔎</button>
        </div>
        {data && <RadarCharts datas={data} />}
        {firstYear && (
          <p className="distance">
            <span className="first-year"></span>Afstand in {firstYear}
          </p>
        )}
        {lastYear && (
          <p className="distance">
            <span className="last-year"></span>Afstand in {lastYear}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
