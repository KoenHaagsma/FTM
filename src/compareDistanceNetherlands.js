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
            })
            .catch((err) => reject(err));
    });
};

export { compareDistanceNetherlands };
