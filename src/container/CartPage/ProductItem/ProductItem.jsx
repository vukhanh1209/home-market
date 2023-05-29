import NumberInput from '../../../component/UI/NumberInput';
import product from '../../../assets/p1.png'
import {useState} from 'react'
import { formatCash } from '../../../utils/utils';


const ProductItem = (props) => {
    const { data, setTotal} = props;
    const {itemName, weight, price, quantity} = data;
    console.log(props)

    const handleChangeTotal = (event) => {
        if(event.target.checked) {
            setTotal(prev => prev += price * 1000 * quantity)
        }
        else setTotal(prev => prev -= price  * 1000* quantity)
    }
    return (
        <div className="flex flex-col mx-4 py-6 border-b-2 border-primary">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <input  onChange={handleChangeTotal} type="checkbox" className="w-4 h-4 cart-item__input"/>
                    <div className="border border-primary bg-white rounded-xl">
                        <img src={product} alt="" className="w-20 h-20 rounded-xl"/>
                    </div>
                    <div className="flex flex-col">
                        {/* <div className="text-xs font-bold text-gray-500 uppercase">
                            <span >{cate}</span>
                        </div> */}

                        <h1 className="font-bold text-lg text-primary">{itemName}</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{weight}</span>

                    </div>
                </div>
                
                <div className="flex">
                    <div className="grid grid-cols-3 gap-x-10  text-primary">
                        <span className="text-center font-semibold text-base">{formatCash(price * 1000)}</span>
                        <NumberInput width="32px" height="24px" color="#fff" borderRadius="4px" quantity={quantity}/>
                        <span className="text-center w-20 font-semibold text-base text-red--dark ">{formatCash(price * 1000 * quantity)}</span>

                    </div>
                    <span className="text-primary text-sm font-semibold cursor-pointer underline ml-8">Xóa</span>
                </div>


            </div>
        </div>
    )
}

export default ProductItem;

