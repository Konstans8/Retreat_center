// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';



// function Slider() {
    
//     return (
        // <Carousel fade>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test}
        //       alt="First slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>First slide label</h3>
        //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test1}
        //       alt="Second slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>Second slide label</h3>
        //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test2}
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>Third slide label</h3>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test3}
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>Third slide label</h3>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test4}
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>Third slide label</h3>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test5}
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>Third slide label</h3>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        //   <Carousel.Item className={s.item}>
        //     <img
        //       className="d-block w-100 image"
        //       src={test6}
        //       alt="Third slide"
        //     />
        //     <Carousel.Caption className={s.caption}>
        //       <h3>Third slide label</h3>
        //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>
        // </Carousel>
        
//     )
// }

// export default Slider


// import s from './Slider.module.css'

import slide1 from '../../../img/slide1.webp'
import slide2 from '../../../img/slide2.webp'
import slide3 from '../../../img/slide3.webp'
import slide4 from '../../../img/slide4.webp'
import slide5 from '../../../img/slide5.webp'
import slide6 from '../../../img/slide6.webp'
import slide7 from '../../../img/slide7.webp'
import slide8 from '../../../img/slide8.webp'
import slide9 from '../../../img/slide9.webp'
import slide10 from '../../../img/slide10.webp'
import slide11 from '../../../img/slide11.webp'
import slide12 from '../../../img/slide12.webp'
import slide13 from '../../../img/slide13.webp'
import slide14 from '../../../img/slide14.webp'
import slide15 from '../../../img/slide15.webp'
import slide16 from '../../../img/slide16.webp'
import slide17 from '../../../img/slide17.webp'
import slide18 from '../../../img/slide18.webp'
import slide19 from '../../../img/slide19.webp'
import slide20 from '../../../img/slide20.webp'
import slide21 from '../../../img/slide21.webp'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./stylesSlider.css";

import { EffectCoverflow, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='image' src={slide1} alt='imageName'/>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide2} alt='imageName'/>
            
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide3} alt='imageName'/>
                 
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide4} alt='imageName'/>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide5} alt='imageName'/>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide6} alt='imageName'/>
         
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide7} alt='imageName'/>
        
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide8} alt='imageName'/>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide9} alt='imageName'/>
        
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide10} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide11} alt='imageName'/>
          
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide12} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide13} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide14} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide15} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide16} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide17} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide18} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide19} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide20} alt='imageName'/>

        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={slide21} alt='imageName'/>

        </SwiperSlide>
      </Swiper>
    </>
  );
}
