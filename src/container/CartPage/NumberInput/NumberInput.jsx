import {Fragment, useState, useCallback} from 'react'
import {RiSubtractFill, RiAddFill} from 'react-icons/ri'
import { debounce } from 'lodash'

const NumberInput = (props) => {
    const {width, height, color, border, borderRadius, quantity, setItemQuantity, setTotal} = props
    const [value,setValue] = useState(quantity || 0);

    // Use debounce to avoid user calling API continuously
    const handleAddQuantity = debounce((event) => {
        setValue(prev => prev + 1)
        event.target.closest('.cart-item').querySelector('input').click();
        setItemQuantity(value + 1)
    }, 500)

    const handleSubQuantity = debounce((event) => {
        setValue(prev => prev - 1)
        event.target.closest('.cart-item').querySelector('input').click();
        setItemQuantity(value - 1)
    }, 500)

    return (
        <div className="flex h-fit items-center gap-x-1 text-sm font-semibold" value={`${value}`}>
            <button 
                onClick={event => handleSubQuantity(event)} 
                style={{backgroundColor: `${color}`, height:`${height}`, width:`${height}`, borderColor: `${border}`,borderRadius: `${borderRadius}`} } 
                className=" flex justify-center border border-transparent items-center bg-[#E6E5EA] text-[#919096] rounded-md"
            >
                <RiSubtractFill/>
            </button>
            <div style={{height: `${height}`, width: `${width}`, borderColor: `${border}`,borderRadius: `${borderRadius}` }} className={`flex items-center justify-center border border-transparent text-primary bg-white rounded-md `} >{value > 0 ? value : ''}</div>
            <button 
                onClick={event => handleAddQuantity(event)} 
                style={{backgroundColor: `${color}` , height:`${height}`, width:`${height}`, borderColor: `${border}`,borderRadius: `${borderRadius}`}} 
                className="flex justify-center border border-transparent items-center bg-[#E6E5EA] text-[#919096] rounded-md"
            >
                <RiAddFill />
            </button>
        </div>
    )
}

export default NumberInput;