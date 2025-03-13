import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';

const App = () => {
    React.useEffect(() => {
        const svg = d3.select("#root").append("svg").attr("width", 500).attr("height", 500);

        const data = [
            { x: 100, y: 100, r: 30, color: "red" },
            { x: 200, y: 200, r: 40, color: "green" },
            { x: 300, y: 150, r: 50, color: "blue" }
        ];

        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("r", d => d.r)
            .attr("fill", d => d.color);
    }, []);

    return <div></div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
