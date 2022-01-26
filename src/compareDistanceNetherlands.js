const compareDistanceNetherlands = () => {
    return new Promise((resolve, reject) => {
        fetch('/data_shapes.json')
            .then((response) => response.json())
            .then((data) => {
                const netherlands = [];
                for (const el in data) {
                    if (data[el].GWB_CODE === 'NL0000') {
                        netherlands.push(data[el]);
                    }
                }

                const firstLast = [];
                firstLast.push(netherlands[0]);
                firstLast.push(netherlands[netherlands.length - 1]);

                const keys = [
                    'huisartsenpost_afst',
                    'huisarts_afst',
                    'ziekenhuis_excl_afst',
                    'basis_afst',
                    'vmbo_afst',
                    'havovwo_afst',
                    'bibliotheek_afst',
                ];

                const diffrenceArray = [];
                for (const key1 in keys) {
                    const afst2007 = parseFloat(firstLast[0][keys[key1]].split(',').join('.'));
                    const afst2019 = parseFloat(firstLast[1][keys[key1]].split(',').join('.'));
                    const differenceObject = {
                        key: keys[key1],
                        difference: Math.abs(parseFloat((afst2019 - afst2007).toFixed(2))),
                    };
                    diffrenceArray.push(differenceObject);
                }

                const stepsNetherlands = [];
                let i = 0;
                for (const out of netherlands) {
                    const districts = data.filter((el) => el.GWB_CODE === out.GWB_CODE);
                    for (const district of districts) {
                        const districtKey = keys[i];
                        const pushOutput = {
                            districtName: district.GWB_NAAM,
                            districtCode: district.GWB_CODE,
                            districtKey: districtKey,
                        };
                        pushOutput[keys[i]] = district[districtKey];
                        stepsNetherlands.push(pushOutput);
                    }
                    i++;
                }

                // eslint-disable-next-line
                const formattedKeys = [
                    'Huisartsenpost',
                    'Huisarts',
                    'Ziekenhuis_ex',
                    'Basisschool',
                    'VMBO',
                    'HAVO/VWO',
                    'Bibliotheek',
                ];

                const output = [];
                let a = 0;
                for (const key1 of keys) {
                    const districtName = firstLast[0].GWB_NAAM;
                    const value1 = parseFloat(firstLast[0][key1].split(',').join('.'));
                    const value2 = parseFloat(firstLast[1][key1].split(',').join('.'));

                    const maxOutput = {
                        districtName,
                        districtCode: firstLast[0].GWB_CODE,
                        value1,
                        value2,
                    };
                    maxOutput['key'] = formattedKeys[a];

                    output.push(maxOutput);
                    a++;
                }

                console.log(output);
                resolve(output);
            })
            .catch((err) => reject(err));
    });
};

export { compareDistanceNetherlands };
