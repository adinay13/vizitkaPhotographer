import React from 'react';
import Map from "./Map";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                    <div className="footer_inner">
                        <div className= "footer_block">
                            <div className="footer_left">
                                <div className="call">
                                <h3>Способы связи со мной</h3>
                                </div>
                                <div className="social">
                                    <div className="insta">
                                        <a href="https://instagram.com/momunnur?igshid=YmMyMTA2M2Y=">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_new.svg/1200px-Instagram_new.svg.png" alt=""/>

                                        </a>
                                </div>
                                    <div className="whatsapp">
                                        <a href="https://wa.me/996707255180">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png" alt=""/>
                                        </a>

                                    </div>
                                    <div className="telegram">
                                        <a href="https://t.me/nurzhamal_m">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/512px-Telegram_2019_Logo.svg.png" alt=""/>
                                        </a>

                                    </div>
                                </div>
                                <div className="gifka">
                                <img src="https://thumbs.gfycat.com/RelievedElaborateFlyingsquirrel-size_restricted.gif" alt="" />                
                                </div>


                            </div>
                            <div className="footer_right">
                                <div className="found">
                                <h3>Как нас найти?</h3>
                                </div>
                                <div className="maps">
                                    <Map/>
                                </div>

                            </div>
                        </div>

                    </div>
            </div>

        </div>
    );
};

export default Footer;