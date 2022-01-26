import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './SecondLollipopChart.css'; // Tell webpack that Button.js uses these styles

export default function SecondLollipopChart({ data }) {
    const svgRef = useRef();
    const margin = { top: 10, right: 30, bottom: 40, left: 80 },
        width = 375 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    useEffect(() => {
        const svg = d3
            .select('.d3-container1')
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
        const x = d3.scaleLinear().domain([-5, 45]).range([0, width]);
        svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x).ticks(5, 'f'));

        // Add Y axis
        const y = d3.scaleBand().range([0, height]).domain(groups).padding(1);
        svg.append('g').call(d3.axisLeft(y));

        // Lines
        svg.selectAll('myline1')
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
            .attr('stroke', '#0E5DA0')
            .attr('stroke-width', '1px');

        // Circles of variable 1
        svg.selectAll('mycircle1')
            .data(data)
            .join('circle')
            .attr('cx', function (d) {
                return x(d.value1);
            })
            .attr('cy', function (d) {
                return y(d.key);
            })
            .attr('r', '4')
            .style('fill', '#0E5DA0');

        // Circles of variable 2
        svg.selectAll('mycircle1')
            .data(data)
            .join('circle')
            .attr('cx', function (d) {
                return x(d.value2);
            })
            .attr('cy', function (d) {
                return y(d.key);
            })
            .attr('r', '4')
            .style('fill', '#0E5DA0');
        //eslint-disable-next-line
    }, [data]);

    return (
        <>
            <div id="container">
                <svg
                    className="d3-container1"
                    ref={svgRef}
                    height={height + margin.top + margin.bottom}
                    width={width + margin.left + margin.right}
                />
            </div>
        </>
    );
}
