import { Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper";
import 'swiper/css';
import cl from './SpecBlock.module.css'

import slide1 from '../../images/slide1.jpg'
import slide2 from '../../images/mamasom.jpg'
import slide3 from '../../images/lookbook2.jpg'
import slide4 from '../../images/fam2.jpg'
import slide5 from '../../images/ind3.jpg'
import slide6 from '../../images/fam3.jpg'
import slide7 from '../../images/individ1.jpg'
import slide8 from '../../images/individ2.jpg'
import slide9 from '../../images/pary2.jpg'
import slide10 from '../../images/wedd.jpg'
import slide11 from '../../images/lookb.jpg'
import slide12 from '../../images/lookbb.jpg'
import slide13 from '../../images/twigirls.jpg'

export default () => {
    return (
        <div className={cl.ololow}>
            <Swiper
                modules={[Autoplay]}
                scroll
                spaceBetween={90}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop
                autoplay={{delay: 1000}} 
                  >
                <SwiperSlide>
                    <img key={slide1} src={slide1} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide2} src={slide2} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide3} src={slide3} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide4} src={slide4} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide5} src={slide5} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide6} src={slide6} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide7} src={slide7} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide8} src={slide8} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide9} src={slide9} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide10} src={slide10} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide11} src={slide11} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide12} src={slide12} alt="iu"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img key={slide13} src={slide13} alt="iu"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};