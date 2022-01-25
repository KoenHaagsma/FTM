import React, { useState, useEffect } from 'react';
import './App.css';
import LollipopChart from './LollipopChart/LollipopChart.js';
import SecondLollipopChart from './SecondLollipopChart/SecondLollipopChart.js';
import { csv } from 'd3';
import { compareDistance } from './compareDistanceAllDistricts';
import { compareDistanceNetherlands } from './compareDistanceNetherlands';
import Legenda from './Legenda/Legenda.js';
import Title from './Title/Title';

function App() {
    const [postcode, setPostcode] = useState('');
    const [output, setOutput] = useState(null);
    const [dataShapes, setDataShapes] = useState(null);
    const [data, setData] = useState();
    const [secondData, setSecondData] = useState();

    useEffect(() => {
        let isMounted = true;
        compareDistance().then((d) => {
            if (isMounted) setData(d);
        });
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        let isMounted = true;
        compareDistanceNetherlands().then((d) => {
            if (isMounted) setSecondData(d);
        });
        return () => {
            isMounted = false;
        };
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        console.log(secondData);
    }, [secondData]);

    useEffect(() => {
        const getData = async () => {
            await fetch('/data_shapes.json')
                .then((response) => response.json())
                .then((data) => {
                    setDataShapes(data);
                });

            const response = await csv('./output.csv');
            setOutput(response);
        };

        getData();
    }, []);

    const handleClick = () => {
        const areaCode = postcode.toUpperCase();
        let result = output.filter((d) => d.PC6 === areaCode)[0];
        let dataShape = dataShapes.filter((d) => d.GWB_CODE.includes(result.Buurt2019));
        console.log(dataShape);
    };

    return (
        <>
            <div className="container">
                <div className="area-code">
                    <input
                        placeholder="Postcode"
                        maxLength="6"
                        id="code"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                    />
                    <button onClick={handleClick}>Zoek andere wijk test tekst</button>
                </div>
            </div>
            <Title>De grootste veranderingen van afstand per voorziening in Nederland in vergelijking</Title>
            <Legenda />
            {data && <LollipopChart data={data} />}
            {secondData && <SecondLollipopChart data={secondData} />}
        </>
    );
}

export default App;
