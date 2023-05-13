import {useState, useRef} from 'react'
const info = {
    firstName: 'Khánh',
    lastName: 'Nguyễn',
    phone: '0986354614',
    address: '45D/25 D5, Bình Thạnh, Hồ Chí Minh'
}

const CustomerInfo = () => {
    const [lastName, setLastName] = useState(info.lastName)
    const [firstName, setFirstName] = useState(info.firstName)
    const [phone, setPhone] = useState(info.phone)
    const [address, setAddress] = useState(info.address)


    const [isEditing, setIsEditing] = useState(false);

    const handleSaveCustomerInfo = () => {
        setIsEditing(false);
    }

    const handleCancelEdting = () => {
        setLastName(info.lastName);
        setFirstName(info.firstName);
        setPhone(info.phone);
        setAddress(info.address);
        setIsEditing(false);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
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
                                    onClick={() => handleCancelEdting()} 
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
                        <div className="">
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96 mb-4">
                                <label forhtml="CustomerLastNameInput" className="opacity-80">Họ</label>
                                <input  onChange={handleLastNameChange} type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={lastName} id="CustomerLastNameInput"/>
                            </div>
                            
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96">
                                <label forhtml="CustomerAddressInput" className="opacity-80">Địa chỉ</label>
                                <input  onChange={handleAddressChange} type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={address} id="CustomerAddressInput"/>
                            </div>
                        </div>

                        <div className="">
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96 mb-4">
                                <label forhtml="CustomerFirstNameInput" className="opacity-80">Tên</label>
                                <input onChange={handleFirstNameChange} type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={firstName} id="CustomerFirstNameInput"/>
                                
                            </div>
                            <div className="flex flex-col gap-y-1 text-sm  font-semibold w-96">
                                <label forhtml="CustomerPhoneInput" className="opacity-80">Số điện thoại</label>
                                <input  onChange={handlePhoneChange} type="text" className="px-3 py-1 text-base font-medium rounded-lg outline-none" value={phone} id="CustomerPhoneInput"/>
                                
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