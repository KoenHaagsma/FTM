import React, { useState, useEffect } from "react";
import "./App.css";
import { csv } from "d3";
import RadarCharts from "./Components/RadarChart";
import radarchartimage from "./assets/radarchart.png"

const ChartContainer = () => {
  const [postcode, setPostcode] = useState("");
  const [output, setOutput] = useState(null);
  const [dataShapes, setDataShapes] = useState(null);
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const [firstYear, setFirstYear] = useState(null);
  const [lastYear, setLastYear] = useState(null);
  const [error, setError] = useState(null);
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
    try {
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
            year: d.Jaar,
            axis: "Huisarts",
            value: d.huisarts_afst ? +d.huisarts_afst.replace(",", ".") : 0,
          },
          {
            year: d.Jaar,
            axis: "Huisartsenpost",
            value: d.ziekenhuis_excl_afst
              ? +d.ziekenhuis_excl_afst.replace(",", ".")
              : 0,
          },
          {
            year: d.Jaar,
            axis: "Ziekenhuis",
            value: d.ziekenhuis_incl_afst
              ? +d.ziekenhuis_incl_afst.replace(",", ".")
              : 0,
          },
          {
            year: d.Jaar,
            axis: "Bibliotheek",
            value: d.bibliotheek_afst
              ? +d.bibliotheek_afst.replace(",", ".")
              : 0,
          },
          {
            year: d.Jaar,
            axis: "Havo",
            value: d.havovwo_afst ? +d.havovwo_afst.replace(",", ".") : 0,
          },
          {
            year: d.Jaar,
            axis: "Vmbo",
            value: d.vmbo_afst ? +d.vmbo_afst.replace(",", ".") : 0,
          },
          {
            year: d.Jaar,
            axis: "Basisschool",
            value: d.basis_afst ? +d.basis_afst.replace(",", ".") : 0,
          },
        ];
      });

      setData([dataShape[0], dataShape[dataShape.length - 1]]);
    } catch (error) {
      setError("U heeft geen geldige postcode ingevuld. 1234AB");
      setTimeout(() => {
        setError(null);
      }, 6000);
    }
  };

  const filterYear = (index) => {
    const areaCode = postcode.toUpperCase();
    let result = output.filter((d) => d.PC6 === areaCode)[0];
    let shapes = dataShapes.filter((d) =>
      d.GWB_CODE.includes(result.Buurt2019)
    );

    let dataShape = shapes.map((d) => {
      return [
        {
          year: d.Jaar,
          axis: "Huisarts",
          value: d.huisarts_afst ? +d.huisarts_afst.replace(",", ".") : 0,
        },
        {
          year: d.Jaar,
          axis: "Huisartsenpost",
          value: d.ziekenhuis_excl_afst
            ? +d.ziekenhuis_excl_afst.replace(",", ".")
            : 0,
        },
        {
          year: d.Jaar,
          axis: "Ziekenhuis",
          value: d.ziekenhuis_incl_afst
            ? +d.ziekenhuis_incl_afst.replace(",", ".")
            : 0,
        },
        {
          year: d.Jaar,
          axis: "Bibliotheek",
          value: d.bibliotheek_afst ? +d.bibliotheek_afst.replace(",", ".") : 0,
        },
        {
          year: d.Jaar,
          axis: "Havo",
          value: d.havovwo_afst ? +d.havovwo_afst.replace(",", ".") : 0,
        },
        {
          year: d.Jaar,
          axis: "Vmbo",
          value: d.vmbo_afst ? +d.vmbo_afst.replace(",", ".") : 0,
        },
        {
          year: d.Jaar,
          axis: "Basisschool",
          value: d.basis_afst ? +d.basis_afst.replace(",", ".") : 0,
        },
      ];
    });

    const newData = [dataShape[0], dataShape[dataShape.length - 1]];
    setData([newData[index]]);
  };

  return (
    <div>
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
      <p className="zipcaption">Postcodes om uit te proberen: 4513AA, 9534TA, 2012BA, 2012BA</p>
      {error && <p className="error">{error}</p>}
      {firstYear && (
        <div className="years">
          <button onClick={() => filterYear(0)}>{firstYear}</button>
          <button onClick={() => filterYear(1)}>{lastYear}</button>
        </div>
      )}
      {data ? (
        <RadarCharts data={data} firstYear={filterYear} lastYear={lastYear} />
      ) : (
        <img className='radarchartimg'alt='radar chart afbeelding'src={radarchartimage}></img>
      )}
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
  );
};

export default ChartContainer;