import NumberInput from '../../../component/UI/NumberInput';
import product from '../../../assets/p1.png'
import {useState} from 'react'



const ProductItem = (props) => {
    const {parentCate, childCate, name, weight, oldPrice, newPrice, quantity, setTotal} = props

    const handleChangeTotal = (event) => {
        if(event.target.checked) {
            setTotal(prev => prev += newPrice * quantity)
        }
        else setTotal(prev => prev -= newPrice * quantity)
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
                        <div className="text-xs font-bold text-gray-500 uppercase">
                            <span >{parentCate}</span> - <span>{childCate}</span>
                        </div>

                        <h1 className="font-bold text-lg text-primary">{name}</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{weight}</span>

                    </div>
                </div>

                <div className="flex items-center gap-x-8 text-primary">
                    <div>
                        <span className="font-medium text-base mr-4 line-through">{oldPrice}</span>
                        <span className="font-semibold text-base">{newPrice}</span>
                    </div>
                    <NumberInput width="32px" height="24px" color="#fff" borderRadius="4px" quantity={quantity}/>
                    <span className="font-semibold text-base text-red--dark ">{newPrice * quantity}</span>
                    <span className="text-sm font-semibold cursor-pointer underline">Xóa</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

