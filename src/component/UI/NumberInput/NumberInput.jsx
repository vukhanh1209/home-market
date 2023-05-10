import {Fragment, useState} from 'react'
import {RiSubtractFill, RiAddFill} from 'react-icons/ri'

const NumberInput = () => {
    const [value,setValue] = useState(0);
    return (
        <div className="flex h-fit items-center gap-x-1 text-sm font-semibold">
            <button onClick={() => setValue(prev => prev - 1)} className="p-2 bg-[#E6E5EA] text-[#919096] rounded-md">
                <RiSubtractFill />
            </button>
            <div className="w-[30px] h-[30px] flex items-center justify-center text-[#383634] bg-white border border-[#E6E5EA] rounded-md " value={`${value}`}>{value > 0 ? value : ''}</div>
            <button onClick={() => setValue(prev => prev + 1)} className="p-2 bg-[#E6E5EA] text-[#919096] rounded-md">
                <RiAddFill />
            </button>
        </div>
    )
}

export default NumberInput;