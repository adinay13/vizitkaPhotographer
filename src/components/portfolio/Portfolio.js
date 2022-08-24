import React from 'react';
import lookbook from '../../images/look.jpg'
import individ from '../../images/im.jpg'
import pary from '../../images/glav_panr.jpg'
import fam from '../../images/fan_glav.jpg'

const Portfolio = () => {
    return (
        <div>
            <div className="Portfolio">
                <div className="container">
                    <div className="portfolio__inner">
                        <h1>Виды снимков</h1>
                        <div className="photos">
                            <div className="photos_one">
                            <div className="look">
                                <img src={lookbook} alt=""/>
                                <h3>Lookbook</h3>
                            </div>
                            <div className="individ">
                                <img src={individ} alt=""/>
                                <h3>Индивидуальные</h3>
                            </div>
                            </div>
                            <div className="photos_two">
                            <div className="pary">
                                <img src={pary} alt=""/>
                                <h3>Парные</h3>
                            </div>
                            <div className="fam">
                                <img src={fam} alt=""/>
                                <h3>Семейный фотосет</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Portfolio;