import { Fragment, useEffect } from "react";
import WebFont from 'webfontloader';
import banner1 from '../../../assets/banner1.jpg';
import banner3 from '../../../assets/banner3.jpg';
import avatar from '../../../assets/avatar.jpg';
import product from '../../../assets/p1.png'

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./header.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


function Header() {
    // Change Header background while scrolling
    // const [header, setHeader] = useState({text: '', background: ''});
    // useEffect(() => {
    //     document.addEventListener("scroll", () => {
    //         let pageYOffset = window.pageYOffset;
            
    //         if(pageYOffset > 0) {
    //             setHeader({text: 'text-black', background: 'bg-[#fff]'})
    //         }
    //         else setHeader({text: 'text-black', background: 'bg-transparent'})
    //     })
    // }, [])

    // const swiper = useSwiper();

    // const arrowYOffset = useRef('');
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Montserrat', 'Comfortaa', 'Bebas Neue']
            }
        })

            
        // let swiperHeight = document.getElementById('Swiper').clientHeight;

        // let arrowSwiperHeight = document.querySelector('.arrow-right').clientHeight;

        // arrowYOffset.current = `top-[${swiperHeight / 2 - arrowSwiperHeight / 2}px]`;

    }, [])

    return (
        <Fragment>
            { 
            
            <div className={"fixed w-full z-50 bg-white top-0"} id="Header">
                <div className='flex items-center justify-between w-full h-[5rem] px-36 border-b border-[#e6e6e6] '>
                    <div className="flex items-center gap-x-5">
                        <div>
                            <a className={`text-2xl font-extrabold text-center text-[#80B82D]`} href=''>
                                <p>HomeMarket</p>
                            </a>
                        </div>


                        <form className="flex items-center">   
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative flex items-center w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17L21 21" stroke="#3d3d3d" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#3d3d3d" strokeWidth="1.44"></path> </g></svg>
                                </div>
                                <input type="text" id="simple-search" maxLength="16" className="bg-gray-100 text-black text-sm focus:outline-[#80B82D] placeholder:text-gray-500 rounded-full block w-[16rem] pl-10 p-2.5  min" placeholder="Tìm kiếm theo tên" required/>            
                            </div>
                            
                        </form>

                    </div>
                    

                    <div className="flex items-center justify-center gap-x-1 z-10">
                        <button className="px-4 py-3 rounded-full text-black font-semibold text-xs hover:bg-slate-50 " >Mở ứng dụng</button>

                        <button className="px-4 py-3 rounded-full text-black font-semibold text-xs hover:bg-slate-50 " >Trợ giúp</button>

                        <button className="px-4 py-3 rounded-full text-black font-semibold text-xs hover:bg-slate-50 " >Giỏ hàng</button>

                        <button className="px-4 py-3 rounded-full text-black font-semibold text-xs hover:bg-slate-50 " >Đăng ký</button>


                        <button className="px-4 py-3 rounded-full textt-[#fff] font-semibold text-xs bg-[#80B82D] hover:opacity-80 ">Đăng nhập</button>


                        {/* <div className="group relative w-8 h-8 hover:cursor-pointer ">
                            <img src={avatar} alt=""  className="rounded-full"/>

                            <div className="group-hover:inline-block hidden text-center">
                                
                                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">

                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Duplicate</a>
                                    </div>
                                    <div className="py-1" role="none">
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Move</a>
                                    </div>
                                    <div className="py-1" role="none">
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Share</a>
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-5">Add to favorites</a>
                                    </div>
                                    <div className="py-1" role="none">
                                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-6">Delete</a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <div className="flex justify-center text-black border-b border-[#e6e6e6]">
                    <div className={`flex items-center h-14 font-semibold text-sm z-10`}>
                        <a href="" className="flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#80B82D] ">Về chúng tôi</a>
                        <a href="" className="relative group flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#80B82D] ">
                            <div className="flex justify-center items-center">
                                <div>
                                    Sản phẩm
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                            
               
                            <div className="group-hover:inline-block hidden text-left mt-14" id="ProductDropdown">
                                
                                <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="py-1" role="none">

                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Duplicate</a>
                                    </div>
                                    <div className="py-1" role="none">
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Move</a>
                                    </div>
                                    <div className="py-1" role="none">
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Share</a>
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-5">Add to favorites</a>
                                    </div>
                                    <div className="py-1" role="none">
                                        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-6">Delete</a>
                                    </div>
                                </div>
                            </div>

                        </a>
                        <a href="" className="flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#80B82D] ">Tin tức</a>
                        <a href="" className="flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#80B82D] ">Cửa hàng</a>
                        <a href="" className="flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#80B82D] ">Liên hệ</a>

                    </div>
                </div>
            </div>
            }

            {/* Banner */}
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
                    className="mySwiper mt-[8.5rem]"
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
                            <a href="" className="inline-block  px-6 py-4 rounded-2xl mt-8 bg-[#3A5A40] hover:bg-[#2e4a47] hover:-translate-y-1 text-5xl font-bold text-white">Shop Now</a>
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
            
            {/* Body */}
            <div className=" px-36 py-16">
                <div>
                    {/* <div className="bg-white text-center text-4xl text-black font-semibold py-4">
                        Featured Products
                    </div>
                    <div className="relative" id="Swiper">
                        <Swiper navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }} modules={[Navigation]} className="mySwiper z-20 ">
                            
                            <SwiperSlide className="flex flex-start gap-x-5 py-10 ">
                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="flex flex-start gap-x-5 py-10">
                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex flex-start gap-x-5 py-10">
                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex flex-start gap-x-5 py-10">
                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="flex flex-start gap-x-5 py-10">
                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>

                                <div className="w-[300px] h-[300px] rounded-lg bg-[#F4F2ED] hover:-translate-y-1 hover:shadow-md transition-all">
                                    <img className="w-full h-full rounded-lg" src="https://goodearth-foods.vn/upload/images/san_pham/SP-Bo-UC/new-zealand-beef-striploin-prime-steer_2_450x400.jpg" alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    
                        <button className={`arrow-right absolute ${arrowYOffset.current} z-20 p-2 rounded-full hover:bg-slate-50`} onClick={() => swiper.slideNext()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>

                        <button className={`arrow-left absolute ${arrowYOffset.current} right-0 z-20 p-2 rounded-full hover:bg-slate-50`} onClick={() => swiper.slidePrev()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                        
                    </div> */}
                </div>
                
                {/* Service */}
                <div className="grid grid-cols-4 bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.1)] py-6 mb-12">
                    <div className="flex justify-center items-center flex-col">
                        <svg className="w-20 h-20" fill="#80B82D" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.84375 13C1.285156 13 0 14.285156 0 15.84375L0 42C0 43.660156 1.339844 45 3 45L7.09375 45C7.570313 47.835938 10.035156 50 13 50C15.964844 50 18.429688 47.835938 18.90625 45L28.15625 45C28.894531 45 29.554688 44.6875 30.0625 44.21875C30.582031 44.675781 31.246094 44.992188 32 45L33.09375 45C33.570313 47.835938 36.035156 50 39 50C42.300781 50 45 47.300781 45 44C45 40.699219 42.300781 38 39 38C36.035156 38 33.570313 40.164063 33.09375 43L32 43C31.8125 43 31.527344 42.871094 31.3125 42.65625C31.097656 42.441406 31 42.183594 31 42L31 23C31 22.625 31.625 22 32 22L40 22C40.785156 22 41.890625 22.839844 42.65625 23.75C42.664063 23.761719 42.679688 23.769531 42.6875 23.78125L42.84375 24L38 24C36.40625 24 35 25.289063 35 27L35 31C35 31.832031 35.375 32.5625 35.90625 33.09375C36.4375 33.625 37.167969 34 38 34L48 34L48 42C48 42.375 47.375 43 47 43L45 43L45 45L47 45C48.660156 45 50 43.660156 50 42L50 32.375C50 30.085938 48.40625 28.0625 48.40625 28.0625L48.375 28.0625L44.25 22.5625L44.25 22.53125L44.21875 22.5C43.296875 21.386719 41.914063 20 40 20L32 20C31.644531 20 31.316406 20.074219 31 20.1875L31 15.90625C31 14.371094 29.789063 13 28.1875 13 Z M 2.84375 15L28.1875 15C28.617188 15 29 15.414063 29 15.90625L29 42.15625C29 42.625 28.628906 43 28.15625 43L18.90625 43C18.429688 40.164063 15.964844 38 13 38C10.035156 38 7.570313 40.164063 7.09375 43L3 43C2.625 43 2 42.371094 2 42L2 15.84375C2 15.375 2.367188 15 2.84375 15 Z M 38 26L44.34375 26L46.78125 29.25C46.78125 29.25 47.6875 30.800781 47.875 32L38 32C37.832031 32 37.5625 31.875 37.34375 31.65625C37.125 31.4375 37 31.167969 37 31L37 27C37 26.496094 37.59375 26 38 26 Z M 13 40C15.222656 40 17 41.777344 17 44C17 46.222656 15.222656 48 13 48C10.777344 48 9 46.222656 9 44C9 41.777344 10.777344 40 13 40 Z M 39 40C41.222656 40 43 41.777344 43 44C43 46.222656 41.222656 48 39 48C36.777344 48 35 46.222656 35 44C35 41.777344 36.777344 40 39 40Z"></path></g></svg>
                        <div className="mt-4">
                            <h1 className="text-black font-bold text-2xl text-center ">Miễn phí giao hàng</h1>
                            <div className="text-slate-500 font-semibold text-sm mt-2 text-center">Được lựa chọn kĩ lưỡng từ <br></br> người bán</div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                        <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.24999 18L5.24999 20.25V15.75H2.25C1.85217 15.75 1.47064 15.5919 1.18934 15.3106C0.908034 15.0293 0.749999 14.6478 0.749999 14.25V2.25C0.749999 1.85217 0.908034 1.47064 1.18934 1.18934C1.47064 0.908034 1.85217 0.749999 2.25 0.749999H18.75C19.1478 0.749999 19.5293 0.908034 19.8106 1.18934C20.0919 1.47064 20.25 1.85217 20.25 2.25V6.71484" stroke="#80B82D" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.24999 5.24999H15.75" stroke="#80B82D" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.24999 9.74999H8.24999" stroke="#80B82D" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M23.25 18.75H20.25V23.25L15.75 18.75H11.25V9.74999H23.25V18.75Z" stroke="#80B82D" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M19.5 15H15" stroke="#80B82D" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>    

                        <div className="mt-4">
                            <h1 className="text-black font-bold text-2xl text-center ">Phản hồi tích cực</h1>
                            <div className="text-slate-500 font-semibold text-sm mt-2 text-center">90% khách hàng cảm thấy <br></br> hài lòng & vui vẻ</div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                            <svg fill="#80B82D" className="w-20 h-20" viewBox="0 0 56 56" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="#80B82D" stroke-width="0.00056"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M49.4,51.1c-5-1.8-9.4-3-13.4-3.8v-3.8c7.2-0.7,12.8-6.8,12.8-14.1c0-7.8-6.4-14.2-14.2-14.2c-1.2,0-2.3,0.1-3.4,0.4 C29.5,8.4,23.5,3,19.3,3C14.5,3,7.1,10.2,7.1,19.2c0,8.5,5,15.4,11.2,16.1v11.1C10,47.6,6.5,51,6.2,51.3c-0.4,0.4-0.4,1,0,1.4 c0.4,0.4,1,0.4,1.4,0c0.1-0.1,10.8-10.6,41,0.2c0.1,0,0.2,0.1,0.3,0.1c0.4,0,0.8-0.3,0.9-0.7C50.2,51.8,49.9,51.2,49.4,51.1z M34.5,17.1c6.7,0,12.2,5.5,12.2,12.2c0,6.3-4.7,11.4-10.8,12.1v-3.6l6.9-6.9c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L35.9,35V24.9 c0-0.6-0.4-1-1-1s-1,0.4-1,1V35l-3-3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4.4,4.4v3.6c-4.6-0.2-8.6-3-10.5-7.1 c4.7-2.2,8.1-8.2,8.1-15.2c0-0.6,0-1.1-0.1-1.7C32.5,17.2,33.5,17.1,34.5,17.1z M9.1,19.2C9.1,11.5,15.4,5,19.3,5 s10.3,6.5,10.3,14.2c0,7.3-4.1,13.4-9.3,14.1v-2.5l5.1-5.1c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3.7,3.7v-2.5c0,0,0,0,0,0V22l5.2-5.2 c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-3.8,3.8v-4.6c0-0.6-0.4-1-1-1s-1,0.4-1,1v8.3l-4.7-4.7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4 l6.1,6.1v7.5C13.1,32.6,9.1,26.5,9.1,19.2z M20.3,46.1V35.3c0.4,0,0.8-0.1,1.2-0.2c2.2,4.9,7,8.2,12.4,8.5v3.4 C28.5,45.9,24,45.8,20.3,46.1z"></path></g></svg>
                        <div className="mt-4">
                            <h1 className="text-black font-bold text-2xl text-center ">100% tự nhiên</h1>
                            <div className="text-slate-500 font-semibold text-sm mt-2 text-center">Được thực hiện với sự tâm huyết <br></br> của 300+ tuyển trạch viên</div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col">
                            <svg className="w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#80B82D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 21V19.5C4 16.4624 6.46243 14 9.5 14H12.5C15.5376 14 18 16.4624 18 19.5V21M7 21V18M15 21V18M16.5 6L16.8367 5.49493C17.1969 4.95461 17.9371 4.82782 18.4566 5.21745C19.0073 5.63047 19.0645 6.43549 18.5778 6.92224L17.8536 7.64645C17.6272 7.87282 17.5 8.17986 17.5 8.5M17.5 10V10.2M13.8281 4.89801C14.6435 3.74945 15.9842 3 17.5 3C19.9853 3 22 5.01472 22 7.5C22 9.98528 19.9853 12 17.5 12C16.2549 12 15.1279 11.4943 14.3131 10.6771M15 8.00001C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8.00001C7 10.2092 8.79086 12 11 12C11.8312 12 12.6032 11.7465 13.2429 11.3125C14.3033 10.5931 15 9.37794 15 8.00001Z" stroke="#80B82D" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.9600000000000002"></path></g></svg>
                        <div className="mt-4 text-center">

                            <h1 className="text-black font-bold text-2xl text-center ">Dịch vụ 24/7</h1>
                            <div className="text-slate-500 font-semibold text-sm mt-2 text-center">Hỗ trợ trực tuyến 24/7 <br></br> luôn sẵn sàng cho bạn</div>
                        </div>
                    </div>
                </div>
                
                {/* Treding Products */}
                <div className="flex flex-col items-center gap-y-6 mb-12">
                    <div className="text-center text-3xl text-black font-bold ">Sản Phẩm Ưa Thích</div>
                    <div className="flex gap-x-5 font-bold">
                        <a className="px-4 py-2 bg-[#80B82D] text-white rounded-lg cursor-default">Sản phẩm mới</a>
                        <a className="px-4 py-2 border-solid border-2 border-[#80B82D] text-[#80B82D] rounded-lg cursor-pointer hover:bg-[#80B82D] hover:text-white hover:-translate-y-1 hover:shadow-md transition-all">Bán chạy</a>
                        <a className="px-4 py-2 border-solid border-2 border-[#80B82D] text-[#80B82D] rounded-lg cursor-pointer hover:bg-[#80B82D] hover:text-white hover:-translate-y-1 hover:shadow-md transition-all">Đánh giá cao</a>
                    </div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                        }}
                        // pagination={{
                        // clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper py-2"
                    >
                    <SwiperSlide>
                        <div className="grid grid-cols-5 gap-4 w-full rounded-md">
                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>
                            
                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid grid-cols-5 gap-4 w-full rounded-md">
                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>
                            
                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                            <div className="relative h-full w-full bg-white rounded-md border-[1px] border-solid border-slate-300 hover:-translate-y-1 transition-all">
                                <div className="w-full h-[233px]  rounded-t-md">
                                    <img className="w-full" src={product} alt="" />
                                </div>

                                <div className="h- flex flex-col items-center gap-2 w-full rounded-b-md p-4 bg-slate-100">
                                    <h1 className="font-bold text-xl text-black">Fresh Broccoli</h1>
                                    <span className="font-bold text-xs text-slate-700 ">Sell rating: 40%</span>
                                    <span className="font-bold text-base text-[#80B82D] ">$35.00</span>
                                    <form className="flex gap-2 justify-between text-sm font-medium" >
                                        <span className="text-black">Qty</span>
                                        <input className="w-20 text-black border-[1px] border-solid border-slate-300 focus:outline-none text-center" type="number" min="1" />
                                        <button className="bg-[#80B82D] text-white px-4 rounded-sm">ADD</button>
                                    </form>

                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    </Swiper>
                </div>

                {/* Why choose us */}
                <div className="grid grid-cols-2 gap-32 w-full h-[500px]">
                    <div className="flex flex-col gap-y-6 items-start max-w-max">
                        <div className="">
                            <div className="font-bold text-4xl text-black mb-4">Lý do chọn chúng tôi?</div>
                            <div className="font-medium text-sm text-slate-500 whitespace-normal">
                                Mục đích của chúng tôi là tạo ra giải pháp để loại bỏ các rào cản ngăn mọi người khỏi việc thực hiện công việc tốt nhất của họ, và nó nằm ở trái tim. 
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-6">
                            <div className="flex justify-center items-center gap-x-4"> 
                                <div className="p-4 bg-slate-50 rounded-md "> 
                                    <svg className="w-10 h-10 " fill="#F65A0C" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M29.005 5.5h-26.009c-1.657 0-3 1.343-3 3v15c0 1.657 1.343 3 3 3h26.009c1.657 0 3-1.343 3-3v-15c0-1.657-1.343-3-3-3zM2.995 7.5h26.009c0.552 0 1 0.448 1 1v2h-28.009v-2c0-0.552 0.449-1 1-1zM29.005 24.5h-26.009c-0.552 0-1-0.448-1-1v-9h28.009v9c0 0.552-0.448 1-1 1z"></path> </g></svg>
                                </div>
                                <div className="whitespace-normal">
                                    <h1 className="font-bold text-xl text-black mb-1">100% Thanh Toán Bảo Mật</h1>
                                    <p className="font-medium text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-x-4"> 
                                <div className="p-4 bg-slate-50 rounded-md "> 
                                    <svg className="w-10 h-10 " viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#80B82D" d="M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"></path></g></svg>
                                </div>
                                <div className="whitespace-normal">
                                    <h1 className="font-bold text-xl text-black mb-1">Giao Hàng Nhanh Chóng</h1>
                                    <p className="font-medium text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>

                            <div className="flex justify-center items-center gap-x-4"> 
                                <div className="p-4 bg-slate-50 rounded-md "> 
                                    <svg className="w-10 h-10 " fill="#F65A0C" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M2.84375 13C1.273438 13 0 14.277344 0 15.84375L0 42C0 43.566406 1.429688 45 3 45L7.09375 45C7.570313 47.835938 10.03125 50 13 50C15.96875 50 18.429688 47.835938 18.90625 45L28.15625 45C29.722656 45 31 43.722656 31 42.15625L31 15.90625C31 14.304688 29.738281 13 28.1875 13 Z M 33 20L33 45C33.480469 47.832031 36.03125 50 39 50C41.96875 50 44.429688 47.832031 44.90625 45L47 45C48.570313 45 50 43.570313 50 42L50 32.375C50 30.363281 48.550781 28.308594 48.375 28.0625L44.21875 22.5C43.265625 21.351563 41.769531 20 40 20 Z M 38 25L43.59375 25L46.78125 29.25C47.121094 29.730469 48 31.203125 48 32.375L48 33L38 33C37 33 36 32 36 31L36 27C36 25.894531 37 25 38 25 Z M 13 40C15.207031 40 17 41.792969 17 44C17 46.207031 15.207031 48 13 48C10.792969 48 9 46.207031 9 44C9 41.792969 10.792969 40 13 40 Z M 39 40C41.207031 40 43 41.792969 43 44C43 46.207031 41.207031 48 39 48C36.792969 48 35 46.207031 35 44C35 41.792969 36.792969 40 39 40Z"></path></g></svg>
                                </div>
                                <div className="whitespace-normal">
                                    <h1 className="font-bold text-xl text-black mb-1">100% Thực Phẩm Tươi & Sạch</h1>
                                    <p className="font-medium text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>

                            
                            <div className="flex justify-center items-center gap-x-4"> 
                                <div className="p-4 bg-slate-50 rounded-md "> 
                                    <svg className="w-10 h-10 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="1.6799999999999997"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="9" stroke="#80B82D"></circle> <path d="M18 18L6 6" stroke="#80B82D"></path> </g></svg>
                                </div>
                                <div className="whitespace-normal">
                                    <h1 className="font-bold text-xl text-black mb-1">Hủy Đơn Mọi Lúc</h1>
                                    <p className="font-medium text-xs text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="relative w-full h-full bg-">
                        <img className="object-cover h-full" src={banner3} alt="" />
                        <div className="absolute w-full h-full bg-black top-0 opacity-50">

                        </div>

                        <div className="absolute flex items-center top-0 w-full h-full">
                            <div className="px-6 w-[50%] ">
                                <h1 className="text-white font-bold text-3xl leading-normal ">Want To Know More Us?</h1>
                                <a href="" className="inline-block  px-5 py-2 rounded-lg mt-4 bg-[#80B82D] hover:bg-[#93d037] text-base font-bold text-white">Click here</a>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>

            <div className=" ">
                <img className="" src={banner1} alt="" />
            </div>

            {/* Footer */}
            <footer className="bg-white z-20 ">
                <div className="mx-auto w-full container ">
                    <div className="grid grid-cols-2 gap-8 align-middle px-8 py-8 md:grid-cols-4">
                        <div className="pl-[30%]">

                            <h2 className="mb-6 text-lg font-bold text-[#80B82D]  ">Company</h2>
                            <ul className="text-gray-500 ">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">About</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Careers</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Brand Center</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-[30%]">
                            <h2 className="mb-6 text-lg font-bold text-[#80B82D]  ">Help center</h2>
                            <ul className="text-gray-500 ">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Discord Server</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-[30%]">
                            <h2 className="mb-6 text-lg font-bold text-[#80B82D]  ">Legal</h2>
                            <ul className="text-gray-500 ">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Privacy Policy</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Licensing</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pl-[30%]">
                            <h2 className="mb-6 text-lg font-bold text-[#80B82D]  ">Download</h2>
                            <ul className="text-gray-500 ">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="px-4 py-6 bg-[#80B82D] text-white md:flex md:items-center md:justify-between">
                        <span className="text-sm   sm:text-center">© 2023 <a href="https://flowbite.com/">HomeMarket™</a>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                            <a href="#" className=" hover:text-gray-900 ">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="#" className=" hover:text-gray-900 ">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Instagram page</span>
                            </a>
                            <a href="#" className=" hover:text-gray-900 ">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                                <span className="sr-only">Twitter page</span>
                            </a>
                            <a href="#" className=" hover:text-gray-900 ">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="#" className=" hover:text-gray-900 ">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" /></svg>
                                <span className="sr-only">Dribbble account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Header;