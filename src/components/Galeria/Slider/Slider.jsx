// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import s from './Slider.module.css'


import test from '../../../img/1673951247499.jpeg'
import test1 from '../../../img/hall10.jpeg'
import test2 from '../../../img/kitchen2.jpeg'
import test3 from '../../../img/hall5.jpeg'
import test4 from '../../../img/room1.jpeg'
import test5 from '../../../img/1673951247573.jpeg'
import test6 from '../../../img/hall20.jpeg'


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
          <img className='image' src={test} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test1} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test2} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test3} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test4} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test5} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test6} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test3} alt='imageName'/>
        </SwiperSlide>
        <SwiperSlide>
          <img className='image' src={test5} alt='imageName'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
