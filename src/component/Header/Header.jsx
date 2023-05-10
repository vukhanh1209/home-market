import { Fragment} from "react";
import {FiUser, FiShoppingBag} from 'react-icons/fi'
import {CgMenuGridO} from 'react-icons/cg'
import {BiChevronDown} from 'react-icons/bi'




const Header = () => {
    return (
        <Fragment>
            <div className={"fixed w-full z-50 bg-[#F6F4F2] top-0"} id="Header">
                <div className='flex items-center justify-between w-full h-[5rem] px-36 border-b border-[#e6e6e6] '>
                    <div className="flex items-center gap-x-5">
                        <div>
                            <a className={`text-2xl font-bold text-center text-[#383634]`} href=''>
                                <p>HomeMarket</p>
                            </a>
                        </div>


                        <form className="flex items-center font-semibold">   
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative flex items-center w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17L21 21" stroke="#3d3d3d" strokeWidth="1.44" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#3d3d3d" strokeWidth="1.44"></path> </g></svg>
                                </div>
                                <input type="text" id="simple-search" maxLength="16" className="bg-white text-[#383634] text-sm focus:outline-[#4C7C7D] placeholder:text-gray-500 placeholder:font-medium rounded-lg block w-[16rem] pl-10 p-2.5  min" placeholder="Tìm kiếm theo tên" required/>            
                            </div>
                            
                        </form>

                        <div className="flex justify-center text-[#383634]">
                            <div className={`flex items-center h-14 font-bold text-base z-10`}>
                                <a href="" className="relative group flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#4C7C7D] ">
                                    <div className="flex justify-center items-center">
                                        <CgMenuGridO className="text-3xl mr-2"/>
                                        <div>
                                            Danh mục
                                        </div>
                                    </div>
                                    
                    
                                    <div className="group-hover:inline-block hidden text-left mt-14" id="ProductDropdown">
                                        
                                        <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-[#383634] ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                            <div className="py-1" role="none">

                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</li>
                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Duplicate</li>
                                            </div>
                                            <div className="py-1" role="none">
                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</li>
                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Move</li>
                                            </div>
                                            <div className="py-1" role="none">
                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Share</li>
                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-5">Add to favorites</li>
                                            </div>
                                            <div className="py-1" role="none">
                                                <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-6">Delete</li>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>

                    </div>
                    

                    <div className="flex items-center justify-center gap-x-10 z-10">
                        {/* <button className="px-4 py-3 rounded-full text-[#383634] font-semibold text-sm hover:bg-slate-50 " >Đăng ký</button>
                        <button className="px-4 py-3 rounded-full textt-[#fff] font-semibold text-sm bg-[#4C7C7D] hover:opacity-80 ">Đăng nhập</button> */}

                        <div className="group relative hover:cursor-pointer ">
                            <a href="" className="relative group flex items-center h-full px-4 mr-2 rounded-xl hover:text-[#4C7C7D] ">
                                <div className="flex justify-center items-center gap-x-2">
                                    <FiUser className="text-2xl text-[#383634]"/>
                                    <span className="text-sm text-slate-600 font-bold whitespace-nowrap">Geralt</span>
                                    <BiChevronDown className="text-lg text-[#383634]"/>
                                </div>
                                
                
                                <div className="group-hover:inline-block hidden text-left mt-14" id="ProductDropdown">
                                    
                                    <div className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-[#383634] ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                        <div className="py-1" role="none">

                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Edit</li>
                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Duplicate</li>
                                        </div>
                                        <div className="py-1" role="none">
                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Archive</li>
                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Move</li>
                                        </div>
                                        <div className="py-1" role="none">
                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-4">Share</li>
                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-5">Add to favorites</li>
                                        </div>
                                        <div className="py-1" role="none">
                                            <li href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-6">Delete</li>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <button className="relative h-10 flex gap-x-2 items-center justify-center rounded-lg text-[#383634] font-bold px-4  text-sm hover:bg-[#EDEAE7] bg-white" >
                            <FiShoppingBag className="text-2xl"/>
                            <span className="whitespace-nowrap">{`Giỏ hàng: ${10}`}</span>
                        </button>

                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default Header;