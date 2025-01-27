// HexagonRow.js
import React from 'react';
import Hexagon from './Hexagon';
import './HexagonRow.css'; // Import the CSS file

const HexagonRow = () => {
    const colors = [
        '#D2B48C', // Color for Hexagon 1
        '#B0E0E6', // Color for Hexagon 2
        '#FFEA00', // Color for Hexagon 3
        '#1E90FF', // Color for Hexagon 4
        '#004B87', // Color for Hexagon 5
        '#003366', // Color for Hexagon 6
        '#F5FF33', // Color for Hexagon 7
    ];


    return (
        <div>
            {/* First Row: 2 Hexagons */}
            <div className="hexagon-row">
                <Hexagon color={colors[0]} ><img src="assets/Team.png" alt=""style={{height:'50px',margin:'10px'}} />Team Work</Hexagon>
                <Hexagon color={colors[1]} ><img src="assets/Secure.png" alt="" style={{height:'50px',margin:'10px'}}/>Secured Future</Hexagon>
            </div>
            {/* Second Row: 3 Hexagons */}
            <div className="hexagon-row">
                <Hexagon color={colors[2]} ><img src="assets/Learning.png" alt="" style={{height:'50px',margin:'10px'}}/>Learning Opportunity</Hexagon>
                <Hexagon color={colors[3]} ><img src="assets/Upgrade.png" alt="" style={{height:'50px',margin:'10px'}} />Upgrade Skills</Hexagon>
                <Hexagon color={colors[4]} ><img src="assets/corporate.png" alt="" style={{height:'50px',margin:'10px'}}/>Work Culture</Hexagon>
            </div>
            {/* Third Row: 2 Hexagons */}
            <div className="hexagon-row">
                <Hexagon color={colors[5]} ><img src="assets/achievement.png" alt="" style={{height:'50px',margin:'10px'}} />Professional Growth</Hexagon>
                <Hexagon color={colors[6]} ><img src="assets/inclusion.png" alt="" style={{height:'50px',margin:'10px'}} />Diverse & Inclusive Community</Hexagon>
            </div>
        </div>
    );
};

export default HexagonRow;
