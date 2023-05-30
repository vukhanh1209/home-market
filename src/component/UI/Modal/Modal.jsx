import {BsCheck2} from 'react-icons/bs'
import {AiOutlineExclamation} from 'react-icons/ai'


const Modal = (props) => {
    let {state, desc, displaying , setDisplaying} = props;
    let title;
    if(state) title = "Thành công!";
    else title = "Có lỗi xảy ra!";

    if(displaying) {
        document.getElementById("Modal").style.opacity = 1;
        setTimeout(() => {
            document.getElementById("Modal").style.opacity = 0;
        }, 1000)
        setTimeout(() => {
            setDisplaying(false)
        }, 1200)

    }

    
    return (
        <div className={`${displaying ? 'flex' : 'hidden'} fixed top-0 bottom-0 left-0 right-0 h-full items-center justify-center bg-[rgba(0,0,0,0.3)] z-[100] opacity-0 transition-opacity duration-300`} id="Modal">
            <div className="flex flex-col justify-center items-center h-fit w-[30%] drop-shadow-lg px-6 py-20 bg-white rounded-3xl " >
                {state && (
                    <div className="flex items-center justify-center p-3 rounded-full bg-[#D2F2E5]">
                        <BsCheck2 className=" w-16 h-16  text-primary"/>
                    </div>

                )}
                {!state && (
                    <div className="flex items-center justify-center p-3 rounded-full bg-[#FFECEE]">
                        <AiOutlineExclamation className=" w-16 h-16  text-primary"/>
                    </div>
                )}
                <span className="text-3xl font-bold text-primary mt-5 mb-2">{title}</span>
                <span className="text-lg font-medium text-gray-700 text-center">{desc}</span>
            </div>
        </div>
    )
}

export default Modal;