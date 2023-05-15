import {Fragment, useState} from 'react'
import {RiSubtractFill, RiAddFill} from 'react-icons/ri'

const NumberInput = (props) => {
    const {width, height, color, border, borderRadius, quantity} = props
    const [value,setValue] = useState(quantity || 0);
    return (
        <div className="flex h-fit items-center gap-x-1 text-sm font-semibold" value={`${value}`}>
            <button onClick={() => setValue(prev => prev - 1)} style={{backgroundColor: `${color}`, height:`${height}`, width:`${height}`, borderColor: `${border}`,borderRadius: `${borderRadius}`} } className=" flex justify-center border border-transparent items-center bg-[#E6E5EA] text-[#919096] rounded-md">
                <RiSubtractFill/>
            </button>
            <div style={{height: `${height}`, width: `${width}`, borderColor: `${border}`,borderRadius: `${borderRadius}` }} className={`flex items-center justify-center border border-transparent text-primary bg-white rounded-md `} >{value > 0 ? value : ''}</div>
            <button onClick={() => setValue(prev => prev + 1)} style={{backgroundColor: `${color}` , height:`${height}`, width:`${height}`, borderColor: `${border}`,borderRadius: `${borderRadius}`}} className="flex justify-center border border-transparent items-center bg-[#E6E5EA] text-[#919096] rounded-md">
                <RiAddFill />
            </button>
        </div>
    )
}

export default NumberInput;