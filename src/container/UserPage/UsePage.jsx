import { useState } from 'react'
import avatar from '../../assets/avatar.jpg'
import {IoMailOutline} from 'react-icons/io5'
import {HiOutlineUserCircle} from 'react-icons/hi2'
import {TfiReceipt} from 'react-icons/tfi'
import ManageAccount from './ManageAccount'
import MyPayment from './MyPayment'
import MyOrder from './MyOrder'


const info = {
    firstName: 'Khanh',
    lastName: 'Nguyen',
    birthday: '12/09/2001',
    phone: '0986354614',
    address: '45D/25 D5, Bình Thạnh, Hồ Chí Minh'
}

const UserPage = () => {
    const [category, setCategory] = useState('ManageAccount');


    return (
        <div className="w-full h-fit bg-primary--dark  px-24 py-28">
            <div className="grid grid-cols-4 gap-6 w-full mb-10  h-full text-primary">
                <div className="sticky top-28 min-h-[30rem] h-fit flex flex-col col-span-1 bg-primary text-primary  rounded-3xl px-6 ">
                    <div className="flex flex-col items-center justify-center pt-12 pb-10 border-b-2 border-primary">
                        <img src={avatar} alt="" className="h-20 w-20 object-cover rounded-full" />
                        <span className="font-semibold text-base mt-3">{`${info.firstName} ${info.lastName}`}</span>
                    </div>
                    <div className="flex flex-col pt-3 ">
                        <a 
                        onClick={() => setCategory('ManageAccount')} 
                        className={`${category == "ManageAccount" ? 'bg-primary--dark' : ''} flex gap-x-3 py-3 px-4 hover:bg-primary--dark rounded-lg`}
                        >
                            <HiOutlineUserCircle className="w-6 h-6"/>
                            <span className="text-base font-medium cursor-pointer">Quản lý tài khoản</span>
                        </a>
                        <a 
                        onClick={() => setCategory('MyOrder')} 
                        className={`${category == "MyOrder" ? 'bg-primary--dark' : ''} flex gap-x-3 py-3 px-4 hover:bg-primary--dark rounded-lg`}>
                            <IoMailOutline className="w-6 h-6"/>
                            <span className="text-base font-medium cursor-pointer">Đơn hàng của tôi</span>
                        </a>
                        <a 
                        onClick={() => setCategory('MyPayment')} 
                        className={`${category == "MyPayment" ? 'bg-primary--dark' : ''} flex gap-x-3 py-3 px-4 hover:bg-primary--dark rounded-lg`}>
                            <TfiReceipt className="w-6 h-6"/>
                            <span className="text-base font-medium cursor-pointer">Đơn mua của tôi</span>
                        </a>
                    </div>
                </div>


                {
                    category == "ManageAccount" &&  <ManageAccount/>
                } 
                {
                    category == "MyOrder" &&  <MyOrder/>
                } 
                {
                    category == "MyPayment" &&  <MyPayment/>
                } 
                
            </div>
        </div>
    )
}
export default UserPage;