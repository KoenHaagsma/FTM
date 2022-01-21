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
                console.log(firstLast);

                const keys = [
                    'huisartsenpost_afst',
                    'huisarts_afst',
                    'ziekenhuis_incl_afst',
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
                console.log(diffrenceArray);
            })
            .catch((err) => reject(err));
    });
};

export { compareDistanceNetherlands };
