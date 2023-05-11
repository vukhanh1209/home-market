import { Fragment, useState } from "react"

const Dropdown = (props) => {
    const [focus, setFocus] = useState(false)
    const {childs, width} = props
    const [dropdownValue, setDropdownValue] = useState(childs[0])
    const widthClass = `w-[${width}]`
    return (
        <Fragment>
            <div className="relative">
                <button onClick={() => setFocus(!focus)} className={` w-[150px] flex justify-between text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl text-sm px-4 py-2.5 text-center items-center`} type="button">
                    <span className="font-bold">{dropdownValue}</span>
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                
                <div className={`${focus ? 'block' : 'hidden' } w-full z-10 absolute right-0 top-[120%] bg-white divide-y divide-gray-100 rounded-lg shadow transition-all drop-shadow-md origin-top-right`}>
                    <ul className="py-2 text-sm text-primary" aria-labelledby="dropdownDefaultButton">
                        {childs.map((item, index) => (
                        <li key={index} onClick={() => setDropdownValue(item)}>
                            <a href="#" className="block px-4 py-2 hover:bg-primary--dark font-medium">{item}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Dropdown;