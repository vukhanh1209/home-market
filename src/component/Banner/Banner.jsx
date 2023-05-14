import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            // navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper mt-20 "
        >
            <SwiperSlide>
                <div>
                    <a href="">
                        <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider1-min.jpg?v=1613780889" alt="" />
                        {/* <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/mobileslider-1.jpg?v=1658921909" alt="" /> */}
                    </a>
                    <div className="text-left absolute left-20 top-[10rem] ">
                        <h1 className="text-6xl text-left font-bold text-black">                        
                            We ready to <br></br>
                            supply fresh food <br></br>
                            for you anytime
                        </h1>
                        <Link to="/search" className="inline-block  px-6 py-4 rounded-2xl mt-8 bg-green--dark hover:bg-green--hover hover:-translate-y-1 text-5xl font-bold text-white">Shop Now</Link>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <a href="">
                        <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider2.jpg?v=1613781673" alt="" />
                        {/* <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/mobileslider-2.jpg?v=1658921909" alt="" /> */}
                    </a>
                    <div className="absolute text-right right-20 top-[14rem] ">
                        <h1 className="text-6xl text-right font-bold text-black">                        
                            Fresh fruit <br></br>
                            & vegetable 
                        </h1>
                        <Link to="/search" className="inline-block mt-5 px-6 py-4 rounded-2xl bg-green--dark hover:bg-green--hover hover:-translate-y-1 text-4xl font-bold text-white">Shop Now</Link>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner;