import React, { useState, useEffect } from 'react';
import '../App.css';
import LollipopChart from '../LollipopChart/LollipopChart.js';
import SecondLollipopChart from '../SecondLollipopChart/SecondLollipopChart.js';
import { compareDistance } from '../compareDistanceAllDistricts';
import { compareDistanceNetherlands } from '../compareDistanceNetherlands';
import Legenda from '../Legenda/Legenda.js';
import Title from '../Title/Title';

function SecondChartContainer() {
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

    return (
        <>
            <Title>De grootste veranderingen van afstand per voorziening in Nederland in vergelijking</Title>
            <Legenda />
            {data && <LollipopChart data={data} />}
            {secondData && <SecondLollipopChart data={secondData} />}
        </>
    );
}

export default SecondChartContainer;
