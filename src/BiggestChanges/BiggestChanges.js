import React, { useEffect, useState } from 'react';
import { compareDistance } from '../compareDistance';

export default function BiggestChanges() {
    const [data, setData] = useState();

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
        console.log(data);
    }, [data]);

    return (
        <>
            <div id="container">
                <ul>
                    {data &&
                        data.map((obj, index) => (
                            <li key={`${obj.districtCode}${index}`}>
                                {obj.districtName}
                                {' - '}
                                {`${Object.keys(obj)[Object.keys(obj).length - 1]}: ${
                                    obj[Object.keys(obj)[Object.keys(obj).length - 1]]
                                }`}
                            </li>
                        ))}
                </ul>
            </div>
        </>
    );
}
