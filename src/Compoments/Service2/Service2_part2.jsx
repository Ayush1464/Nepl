import React from 'react';
import "./Service2_part2.css";
import { Link } from 'react-router-dom';

function Service2_part2() {
    return (
        <div className="wrapper_Servicetwo">
            <div className="content_Servicetwo">
                <b style={{ fontWeight: '600', fontSize: '30px' }}>Solar Power Plant</b>
                <p style={{ fontSize: '15px' }}>
                    A solar power plant captures the sun's radiation to produce electricity. It is thus a clean and green alternative to conventional energy sources from fossil fuels. These plants use photovoltaic (PV) panels or concentrated solar power (CSP) systems to convert sunlight into electrical energy. In photovoltaic systems, solar panels made of semiconductor materials absorb solar energy and generate a direct current (DC). The latter is then turned to an alternating current (AC) (by inverters) for use in the grid. Concentrated solar power plants apply mirrors or lenses to direct sunlight toward a tiny point and therefore create so much heat that a turbine is driven to produce electricity. There is a wide spectrum of solar power plant sizes from the tiny domestic installations to a massive utility-scale facility, and all these are big contributors to the cutting down of greenhouse gas emissions.
                </p>
                <br /><br />
            </div>
            <div className="image_Servicetwo">
                <h2><b>Get an appointment with our Expert</b></h2>
                <p>
                    Set up a meeting with our knowledgeable experts to discuss your unique requirements and challenges. Our specialists offer tailored advice and workable solutions to ensure you achieve your project goals efficiently and effectively. Schedule your consultation now to benefit from success-oriented guidance and innovative strategies.
                </p>
                <Link to="/Contact">
                    <button>
                       <i className='bx bx-right-arrow-alt'></i>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Service2_part2;
