import React from 'react';
// import SpecBlock from "./SpecSlide";
import SpecSlide from "./SpecSlide";

const PortfolioTwo = () => {
    return (
        <div>
            <div className="my_portfolio">
                <div className="container">
                    <div className="my_portfolio_inner">
                        <div className="name_vid">
                            <h1>Моё портфолио</h1>
                        </div>
                        <div className="slide_block">
                            <SpecSlide/>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortfolioTwo;