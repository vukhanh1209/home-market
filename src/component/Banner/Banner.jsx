import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Banner = () => {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 5000,
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
                        <a href="" className="inline-block  px-6 py-4 rounded-2xl mt-8 bg-[#3A5A40] hover:bg-[#4b6f52] hover:-translate-y-1 text-5xl font-bold text-white">Shop Now</a>
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
                        <a href="" className="inline-block mt-5 px-6 py-4 rounded-2xl bg-[#3A5A40] hover:bg-[#2e4a47] hover:-translate-y-1 text-4xl font-bold text-white">Shop Now</a>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative">
                    <a href="">
                        <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/slider3_7f623fd1-a932-4b5c-92c7-292044869712.jpg?v=1624439470" alt="" />
                        {/* <img src="https://cdn.shopify.com/s/files/1/0412/8151/9765/files/mobileslider-3.jpg?v=1658921909" alt="" /> */}
                    </a>
                    <div className="text-center absolute top-[40%] w-full h-full">
                        <h1 className="text-5xl text-center font-bold text-black">                        
                            Fresh for your health
                        </h1>
                        <a href="" className="inline-block px-6 py-4 rounded-2xl mt-5 bg-[#3A5A40] hover:bg-[#2e4a47] hover:-translate-y-1 text-2xl font-bold text-white">Shop Now</a>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default Banner;