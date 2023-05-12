import {useState} from 'react'
const info = {
    firstName: 'Khánh',
    lastName: 'Nguyễn',
    phone: '0986354614',
    address: '45D/25 D5, Bình Thạnh, Hồ Chí Minh'
}

const CustomerInfo = () => {
    const [isEditing, setIsEditing] = useState(false);
    const {firstName, lastName, phone, address} = info;

    const handleSaveCustomerInfo = () => {

    }
    
    return (
        <div className="border-b-2 border-primary pb-6">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl">Thông tin khách hàng:</h3>
                <div className="flex gap-x-3">
                    {
                        isEditing ? (
                            <>
                                <button 
                                    onClick={handleSaveCustomerInfo} 
                                    className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center"
                                >
                                    Xác nhận
                                </button>
                                <button 
                                    onClick={() => setIsEditing(!isEditing)} 
                                    className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center"
                                >
                                    Hủy
                                </button>
                            </>
                        ) : (
                            <button 
                                onClick={() => setIsEditing(!isEditing)} 
                                className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center"
                            >
                                Thay đổi
                            </button>
                        )
                    }
                </div>
            </div>
            {
                isEditing ? (
                    <div className="flex justify-between"> 
                        <div classname="">
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96 mb-4">
                                <label forHtml="CustomerLastNameInput" className="opacity-80">Họ</label>
                                <input type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={lastName} id="CustomerLastNameInput"/>
                            </div>
                            
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96">
                                <label forHtml="CustomerAddressInput" className="opacity-80">Địa chỉ</label>
                                <input type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={address} id="CustomerAddressInput"/>
                            </div>
                        </div>

                        <div classname="">
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96 mb-4">
                                <label forHtml="CustomerFirstNameInput" className="opacity-80">Tên</label>
                                <input type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={firstName} id="CustomerFirstNameInput"/>
                                
                            </div>
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96">
                                <label forHtml="CustomerPhoneInput" className="opacity-80">Số điện thoại</label>
                                <input type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={phone} id="CustomerPhoneInput"/>
                                
                            </div>


                           
                        </div>
                    </div>
                    
                ) : (
                    <div className="flex justify-between items-center font-semibold px-2 pt-4">
                        <div className="flex flex-col gap-2">
                            <p>{`${firstName} ${lastName}`}</p>
                            <p>{`${phone}`}</p>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <p>{`${address}`}</p>
                        </div>
                    </div>
                )
            }
            
        </div>
    )
}
export default CustomerInfo;