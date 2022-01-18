import React from 'react';

export default function SmallMultiples() {
    async function compareDistance() {
        await fetch('/data_shapes.json')
            .then((response) => response.json())
            .then(async (data) => {
                const year2007 = [];
                const year2019 = [];

                // Get specific year
                for (let el in data) {
                    if (data[el].Jaar === 2019) {
                        await year2019.push(data[el]);
                    } else if (data[el].Jaar === 2007) {
                        await year2007.push(data[el]);
                    }
                }

                // Compare the two arrays
                const nederland2007 = year2007.find((el) => el.GWB_NAAM === 'Nederland');
                const nederland2019 = year2019.find((el) => el.GWB_NAAM === 'Nederland');

                const difference1 = parseFloat(nederland2007.huisartsenpost_afst.split(',').join('.'));
                const difference2 = parseFloat(nederland2019.huisartsenpost_afst.split(',').join('.'));
                console.log(parseFloat((difference2 - difference1).toFixed(2)));
            });
    }

    compareDistance();

    return <div id="container" />;
}
