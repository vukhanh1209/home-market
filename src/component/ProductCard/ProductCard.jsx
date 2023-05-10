import {useState} from 'react'
import product from '../../assets/p1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faSoHeart, faCartShopping, faStar  } from '@fortawesome/free-solid-svg-icons'
import {RiAddFill} from 'react-icons/ri'

import { faHeart as faReHeart } from '@fortawesome/free-regular-svg-icons'
import NumberInput from '../UI/NumberInput'


const ProductCard = () => {
    const [loved, setLoved] = useState(false);

    const clickLoveButton = () => {
        setLoved(!loved);
    }
    return (
        <div className="relative h-full w-full bg-white rounded-2xl border border-primary hover:-translate-y-1 hover:drop-shadow-lg transition-all">
            <div className="w-full  rounded-t-2xl">
                <img className="w-full" src={product} alt="" />
            </div>
            
            {/* <div className="absolute top-3 left-3 text-sm font-bold px-2 border border-[#dedede] bg-[#EAF5ED] text-[#4C7C7D] flex items-center justify-center rounded-full ">
                <FontAwesomeIcon icon={faStar} style={{color: "#4C7C7D",}} className="h-3 w-3 mr-2 "/>
                <span>4.8 </span>
            </div> */}
            {/* <button 
                onClick={clickLoveButton}
                className={(loved ? "bg-[#EAF5ED] text-[#4C7C7D]" : "text-[#dedede] bg-white") + " hover:bg-[#EAF5ED] hover:text-[#4C7C7D] absolute top-3 right-3 border-2 border-[#dedede] flex items-center justify-center rounded-full h-8 w-8   transiton-all delay-100"}>
    
                    {loved 
                    ?  <FontAwesomeIcon icon={faSoHeart} style={{color: ""}} className="h-4 w-4"/> 
                    : <FontAwesomeIcon icon={faReHeart} style={{color: "#dedede",}} className="h-4 w-4" />
                    }
            </button> */}
            <div className=" flex flex-col items-start gap-2 w-full rounded-b-2xl p-4">
                <div className="text-xs font-bold text-gray-400 ">
                    <span>THỊT, CÁ & TRỨNG</span> - <span>THỊT HEO</span>
                </div>
                <div className="flex w-full items-center justify-between">
                    <h1 className="font-bold text-lg text-[#383634]">Fresh Broccoli</h1>
                    {/* <button 
                        onClick={clickLoveButton}
                        className={"transiton-all delay-100"}>
                            {loved 
                            ?  <FontAwesomeIcon icon={faSoHeart} style={{color: "#54B276"}} className="h-6 w-6"/> 
                            : <FontAwesomeIcon icon={faReHeart} style={{color: "#54B276",}} className="h-6 w-6" />
                            }
                    </button> */}
                </div>
                
                <div className="flex w-full items-center justify-between">
                    

                    <div className="flex flex-col items-start">
                        <div className="font-bold text-sm text-gray-500 line-through">
                            <span >$40.00</span>
                        </div>
                        <div className="font-bold text-lg text-[#e45959]">
                            <span >$35.00</span>
                        </div>
                        <span className="text-sm text-gray-400 font-medium text-center my-auto">/200g</span>

                    </div>

                    <div className="flex flex-col">
                        <NumberInput/>
                        <button className="flex items-center justify-between bg-white border border-primary text-[#383634] text-sm font-bold px-5 py-2 my-2 rounded-lg w-full  hover:bg-[#4C7C7D] hover:text-white transition-all">
                            <span className="my-auto font-bold">Add</span>         
                            {/* <FontAwesomeIcon icon={faCartShopping} className="h-4 w-4 ml-2" /> */}
                            <RiAddFill className="w-5 h-5 "/>

                        </button>
                    </div>
                    
                </div>

                

            </div>

        </div>
    )
}

export default ProductCard;