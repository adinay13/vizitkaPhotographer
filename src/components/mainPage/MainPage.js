import React from 'react';
import './style.css'
import images from '../images/photo.jpg'
import great from '../images/greatstudio.jpg'

const MainPage = () => {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="header__inner">
                        <img src={great} alt=""/>
                    </div>
                </div>
                <div className="bio">
                    <div className="bio__inner">
                        <div className="left">
                            <div className="text_block">
                                <h5>" Привет! Меня зовут Нуржамал.<br/>
                                    Являюсь штатным фотографом <br/><span className="great_color">Great Studio</span><br/>
                                    В большей части в этой профессии мне нравится снимать настроение людей,<br/>
                                    нравится раскрепощать в процессе съёмки. И видеть их счастливые лица. <br/>
                                    Имею большой опыт при съёмке lookbook для разных маркетплейсов <br/>
                                    (instagram, wildberries и т.д.) "</h5>
                            </div>
                            <div className="moment">
                                <h4>Я запечатлю твои счастливые моменты!</h4>
                            </div>
                            <div className="click">
                                <img src="https://static.tildacdn.com/tild3862-3337-4633-b231-656435393962/strelki-2.gif" alt=""/>
                            </div>
                            <a href="https://instagram.com/momunnur?igshid=YmMyMTA2M2Y=">
                                <button className="btn_one">Записаться сейчас</button>
                            </a>


                        </div>
                        <div className="right">
                            <div className="picture">
                                <img src={images} alt=""/>

                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default MainPage;