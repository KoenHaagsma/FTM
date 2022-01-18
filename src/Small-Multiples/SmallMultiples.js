// SmallMultiples.js
import React from 'react';
// import * as d3 from d3
import useD3 from '../hooks/useD3';

export default function SmallMultiples(data) {
    const ref = useD3((svg) => {}, [data.length]);

    return (
        <svg
            ref={ref}
            style={{
                height: 500,
                width: 'calc(100% - 1rem)',
                background: '#F3F8FB',
                border: '1px solid #E1EDF4',
                'border-radius': '12px',
                'margin-top': '1rem',
                margin: 'auto',
            }}
        >
            <g className="plot-area" />
            <g className="x-axis" />
            <g className="y-axis" />
        </svg>
    );
}
