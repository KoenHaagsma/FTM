const compareDistance = () => {
    return new Promise((resolve, reject) => {
        fetch('/data_shapes.json')
            .then((response) => response.json())
            .then((data) => {
                const year2007 = [];
                const year2019 = [];

                // Get specific year
                for (const el in data) {
                    if (data[el].Jaar === 2019) {
                        year2019.push(data[el]);
                    } else if (data[el].Jaar === 2007) {
                        year2007.push(data[el]);
                    }
                }

                //Get all key values of GWB_NAAM
                const nameOfDistrict = year2007.map((el) => {
                    return { code: el.GWB_CODE, jaar: el.Jaar };
                });

                // Match placenames && year
                const placenamesYear = [];
                for (const element in nameOfDistrict) {
                    placenamesYear.push({
                        district2007: year2007.find((el) => el.GWB_CODE === nameOfDistrict[element].code),
                        district2019: year2019.find((el) => el.GWB_CODE === nameOfDistrict[element].code),
                    });
                }

                // Calculate difference per placename per key
                const differenceArray = [];
                const keys = [
                    'huisartsenpost_afst',
                    'huisarts_afst',
                    'ziekenhuis_excl_afst',
                    'basis_afst',
                    'vmbo_afst',
                    'havovwo_afst',
                    'bibliotheek_afst',
                ];

                const formattedKeys = [
                    'Huisartsenpost',
                    'Huisarts',
                    'Ziekenhuis',
                    'Basisschool',
                    'VMBO',
                    'HAVO/VWO',
                    'Bibliotheek',
                ];

                for (const element of placenamesYear) {
                    const difference = {
                        districtCode: element.district2007.GWB_CODE,
                    };
                    for (const key1 of keys) {
                        let distance1;
                        let distance2;
                        if (
                            element.district2019 !== undefined &&
                            element.district2007 !== undefined &&
                            checkKey(element.district2019, element.district2007, key1)
                        ) {
                            distance1 = parseFloat(element.district2007[key1].split(',').join('.'));
                            distance2 = parseFloat(element.district2019[key1].split(',').join('.'));

                            // Set new object key with difference value per key
                            difference[`${key1}_difference`] = Math.abs(parseFloat((distance2 - distance1).toFixed(2)));
                        }
                    }
                    differenceArray.push(difference);
                }

                // Get first and last value from specific object
                const output = [];
                let i = 0;
                for (const key1 of keys) {
                    let maxValue = differenceArray[0];
                    for (const difference of differenceArray) {
                        if (maxValue[`${key1}_difference`] < difference[`${key1}_difference`]) {
                            maxValue = difference;
                        }
                    }

                    const districtName = year2019.filter((el) => el.GWB_CODE === maxValue.districtCode)[0].GWB_NAAM;
                    const value1 = parseFloat(
                        year2007
                            .filter((el) => el.GWB_CODE === maxValue.districtCode)[0]
                            [key1].split(',')
                            .join('.'),
                    );
                    const value2 = parseFloat(
                        year2019
                            .filter((el) => el.GWB_CODE === maxValue.districtCode)[0]
                            [key1].split(',')
                            .join('.'),
                    );

                    const maxOutput = {
                        districtName,
                        districtCode: maxValue.districtCode,
                        value1,
                        value2,
                    };
                    // maxOutput[`${key1}_difference`] = maxValue[`${key1}_difference`];
                    maxOutput['key'] = formattedKeys[i];

                    output.push(maxOutput);
                    i++;
                }

                // End result
                if (output.length === keys.length) {
                    const testArray = [];
                    let i = 0;
                    for (const out of output) {
                        const districts = data.filter((el) => el.GWB_CODE === out.districtCode);
                        for (const district of districts) {
                            const districtKey = keys[i];
                            const pushOutput = {
                                districtCode: district.GWB_CODE,
                                districtNaam: district.GWB_NAAM,
                                districtJaar: district.Jaar,
                                districtKey: districtKey,
                            };
                            pushOutput[keys[i]] = district[districtKey];
                            testArray.push(pushOutput);
                        }
                        i++;
                    }
                    resolve(output);
                }
                return output;

                function checkKey(obj1, obj2, key) {
                    if (obj1[key] !== undefined && obj2[key] !== undefined) {
                        return true;
                    } else {
                        return false;
                    }
                }
            })
            .catch((err) => reject(err));
    });
};

export { compareDistance };
