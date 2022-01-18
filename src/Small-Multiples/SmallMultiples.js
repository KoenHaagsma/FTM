// SmallMultiples.js
import React, { useEffect } from 'react';
import * as d3 from 'd3';

export default function SmallMultiples(props) {
    const { data, width, height } = props;

    useEffect(() => {
        drawChart();
        // eslint-disable-next-line
    }, [data]);

    function drawChart() {
        const margin = { top: 30, right: 0, bottom: 30, left: 50 };

        const sumstat = d3.group(data, (d) => d.name); // nest function allows to group the calculation per level of a factor
        // eslint-disable-next-line
        const allKeys = new Set(data.map((d) => d.name));

        // Add an svg element for each group. The will be one beside each other and will go on the next row when no more room available
        const svg = d3
            .select('#container')
            .selectAll('uniqueChart')
            .data(sumstat)
            .enter()
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        // Add X axis --> it is a date format
        const x = d3
            .scaleLinear()
            .domain(
                d3.extent(data, function (d) {
                    return d.year;
                }),
            )
            .range([0, width]);
        svg.append('g').attr('transform', `translate(0, ${height})`).call(d3.axisBottom(x).ticks(3));

        //Add Y axis
        const y = d3
            .scaleLinear()
            .domain([
                0,
                d3.max(data, function (d) {
                    return +d.n;
                }),
            ])
            .range([height, 0]);
        svg.append('g').call(d3.axisLeft(y).ticks(5));

        // color palette
        const color = d3
            .scaleOrdinal()
            //.domain(allKeys)
            .range(['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999']);

        // Draw the line
        svg.append('path')
            .attr('fill', 'none')
            .attr('stroke', function (d) {
                return color(d[0]);
            })
            .attr('stroke-width', 1.9)
            .attr('d', function (d) {
                return d3
                    .line()
                    .x(function (d) {
                        return x(d.year);
                    })
                    .y(function (d) {
                        return y(+d.n);
                    })(d[1]);
            });

        // Add titles
        svg.append('text')
            .attr('text-anchor', 'start')
            .attr('y', -5)
            .attr('x', 0)
            .text(function (d) {
                return d[0];
            })
            .style('fill', function (d) {
                return color(d[0]);
            });
    }

    return <div id="container" />;
}
