// Hexagon.js
import React from 'react';


const Hexagon = ({ color, children }) => {
    return (
        <div className="hexagon" style={{ backgroundColor: color }}>
            <div className="hexagon-inner">{children}</div>
        </div>
    );
};

export default Hexagon;
