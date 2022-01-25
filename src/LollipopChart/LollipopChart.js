import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function LollipopChart({ data }) {
    useEffect(() => {
        console.log(data);
    }, [data]);

    const svgRef = useRef();
    const margin = { top: 10, right: 30, bottom: 40, left: 100 },
        width = 460 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    const svg = d3
        .select('.d3-container')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Subgroups
    // Add X axis
    const x = d3.scaleLinear().domain([0, 50]).range([0, width]);
    svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x));

    // Y axis
    const y = d3
        .scaleBand()
        .range([0, height])
        .domain(
            data.map(function (d) {
                return d.key;
            }),
        )
        .padding(1);
    svg.append('g').call(d3.axisLeft(y));

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
        .attr('stroke', 'grey')
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
        .attr('r', '6')
        .style('fill', '#69b3a2');

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
        .attr('r', '6')
        .style('fill', '#4C4082');

    // // Add X axis
    // const x = d3
    //     .scaleLinear()
    //     .domain([0, d3.max(data, (d) => d.difference)])
    //     .range([0, width]);
    // svg.append('g')
    //     .attr('transform', `translate(0, ${height})`)
    //     .call(d3.axisBottom(x))
    //     .selectAll('text')
    //     .attr('transform', 'translate(-10,0)rotate(-45)')
    //     .style('text-anchor', 'end');

    // // Y axis
    // const y = d3
    //     .scaleBand()
    //     .range([0, height])
    //     .domain(
    //         data.map(function (d) {
    //             return d.key;
    //         }),
    //     )
    //     .padding(1);
    // svg.append('g').call(d3.axisLeft(y));

    // // Lines
    // svg.selectAll('myline')
    //     .data(data)
    //     .enter()
    //     .append('line')
    //     .attr('x1', function (d) {
    //         console.log(x);
    //         console.log(x(d.difference));
    //         return x(d.difference);
    //     })
    //     .attr('x2', x(0))
    //     .attr('y1', function (d) {
    //         return y(d.key);
    //     })
    //     .attr('y2', function (d) {
    //         return y(d.key);
    //     })
    //     .attr('stroke', 'grey');

    // // Circles
    // svg.selectAll('mycircle')
    //     .data(data)
    //     .enter()
    //     .append('circle')
    //     .attr('cx', function (d) {
    //         return x(d.difference);
    //     })
    //     .attr('cy', function (d) {
    //         return y(d.key);
    //     })
    //     .attr('r', '4')
    //     .style('fill', '#69b3a2')
    //     .attr('stroke', 'black');
    return (
        <>
            <div id="container">
                <svg
                    className="d3-container"
                    ref={svgRef}
                    height={height + margin.top + margin.bottom}
                    width={width + margin.left + margin.right}
                />
            </div>
        </>
    );
}
