import { useState } from "react";

const InfoItem = (props) => {
    const {name, value, canEdit } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [newInfo, setNewInfo] = useState(value)

    const handleChangeValue = (event) => {
        setNewInfo(event.target.value);
    }
    const handleSaveInfo = () => {
        setIsEditing(false);
    }

    const handleCancelEditing = () => {
        setNewInfo(value);
        setIsEditing(false);
    }
    return (
        <div className="flex flex-col gap-y-4 py-6">
            <div className="flex justify-between font-medium  text-sm">
                <span className="">{`${name}`}</span>
                {
                    isEditing ? (
                        <a onClick={handleCancelEditing} className="cursor-pointer text-blue-500 ">Hủy</a>
                    ) : (
                        canEdit && <a onClick={() => setIsEditing(true)} className="cursor-pointer text-blue-500 ">Chỉnh sửa</a>
                    )
                }
            </div>
            {
                isEditing ? (
                    <div>
                        <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96 mb-3">
                            {/* <label forhtml="CustomerLastNameInput" className="opacity-80">Họ</label> */}
                            <input  onChange={handleChangeValue} type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={newInfo} id="CustomerLastNameInput"/>
                        </div>
                        <button onClick={handleSaveInfo} className="font-semibold rounded-lg px-6 py-2 bg-green--dark text-white hover:bg-green--hover">Lưu</button>
                    </div>
                ) : (
                    <span className='font-semibold text-base'>{`${newInfo}`}</span>
                    
                    
                )
            }
        </div>
        
    )
}
export default InfoItem;