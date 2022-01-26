import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function LollipopChart({ data }) {
    useEffect(() => {
        console.log(data);
    }, [data]);

    const svgRef = useRef();
    const margin = { top: 10, right: 30, bottom: 40, left: 80 },
        width = 375 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    useEffect(() => {
        const svg = d3
            .select('.d3-container')
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);

        const formattedKeys = [
            'Huisartsenpost',
            'Huisarts',
            'Ziekenhuis_ex',
            'Basisschool',
            'VMBO',
            'HAVO/VWO',
            'Bibliotheek',
        ];
        // // Subgroups
        // const subgroups = [0, 1];
        const groups = formattedKeys;

        // Add X axis
        const x = d3.scaleLinear().domain([0, 40]).range([0, width]);
        svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x).ticks(5, 'f'));

        // Add Y axis
        const y = d3.scaleBand().range([0, height]).domain(groups).padding(1);
        svg.append('g').call(d3.axisLeft(y));

        // // Another scale for subgroup position?
        // const ySubgroup = d3.scaleBand().domain(subgroups).range([0, y.bandwidth()]).padding([0.05]);

        // // color palette = one color per subgroup
        // const color = d3.scaleOrdinal().domain(subgroups).range(['#e41a1c', '#377eb8']);

        // // Show the lines
        // console.log(data);
        // svg.append('g')
        //     .selectAll('g')
        //     // Enter in data = loop group per group
        //     .data(data)
        //     .enter()
        //     .append('g')
        //     .attr('transform', (d) => {
        //         d.map((el) => 'translate(' + x(el.key) + ',0)');
        //     })
        //     .selectAll('line')
        //     .data(function (d) {
        //         return subgroups.map(function (key) {
        //             return { key: key, value: d[key] };
        //         });
        //     })
        //     .enter()
        //     .append('line')
        //     .attr('x', function (d) {
        //         return ySubgroup(d.key);
        //     })
        //     .attr('y', function (d) {
        //         return y(d.value);
        //     })
        //     .attr('width', ySubgroup.bandwidth())
        //     .attr('height', function (d) {
        //         return height - y(d.value);
        //     })
        //     .attr('fill', function (d) {
        //         return color(d.key);
        //     });

        // Lines
        svg.selectAll('myline')
            .data(data)
            .join('line')
            .attr('x1', function (d) {
                return x(d.value1);
            })
            .attr('x2', function (d) {
                return x(d.value2);
            })
            .attr('y1', function (d) {
                return y(d.key);
            })
            .attr('y2', function (d) {
                return y(d.key);
            })
            .attr('stroke', '#FCB860')
            .attr('stroke-width', '1px');

        // Circles of variable 1
        svg.selectAll('mycircle')
            .data(data)
            .join('circle')
            .attr('cx', function (d) {
                return x(d.value1);
            })
            .attr('cy', function (d) {
                return y(d.key);
            })
            .attr('r', '4')
            .style('fill', '#FCB860');

        // Circles of variable 2
        svg.selectAll('mycircle')
            .data(data)
            .join('circle')
            .attr('cx', function (d) {
                return x(d.value2);
            })
            .attr('cy', function (d) {
                return y(d.key);
            })
            .attr('r', '4')
            .style('fill', '#FCB860');
        //eslint-disable-next-line
    }, [data]);

    const styleP = {
        margin: 0,
        'font-weight': 'bold',
        'font-size': '12px',
        'text-align': 'center',
        'margin-top': '-1rem',
    };

    const styleContainer = {
        position: 'absolute',
    };
    return (
        <>
            <div id="container" style={styleContainer}>
                <svg
                    className="d3-container"
                    ref={svgRef}
                    height={height + margin.top + margin.bottom}
                    width={width + margin.left + margin.right}
                />
                <p style={styleP}>Afstand in KM</p>
            </div>
        </>
    );
}
