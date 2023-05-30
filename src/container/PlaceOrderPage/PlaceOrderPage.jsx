import ProductItem from "./ProductItem";
import CustomerInfo from './CustomerInfo'
import Payment from './Payment'
import { useLocation, useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import API from "../../api";
import Modal from "../../component/UI/Modal";

const PlaceOrderPage = () => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const location = useLocation();
    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState(profile);
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [notification, setNotification] = useState(false)
    const [state, setState] = useState();
    const [displaying, setDisplaying] = useState(false);


    const {itemsData, totalQuantity, totalPrice} = location.state;

    const currentDate = new Date();


    const placeOrderData = {
        orderDate: currentDate,
        address: customerData.address,
        phone: customerData.phone,
        firstName: customerData.firstName,
        lastName: customerData.lastName,
        paymentMethod: paymentMethod,
        cartID: itemsData[0].cartId
    }

    const handlePlaceOrder = () => {
        API.post('cart/place_order', placeOrderData)
        .then(res => {
            setState(res.data.success)
            setNotification(res.data.message)
            setDisplaying(true)
            setTimeout(() => {
                navigate('/cart')
            }, 2000)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
        <div className="w-full h-fit px-24 py-28 bg-primary text-primary max-w-[90rem] mx-auto">
            <h1 className="text-3xl font-bold text-[#383634] py-5">Đặt hàng</h1>
            
            <div className="flex w-full mb-10 h-full gap-8 ">
                <div className="flex-1">
                    {/* Customer Infomation */}
                    <CustomerInfo setCustomerData={setCustomerData}/>
                    {/* Product */}
                    <div className="pt-8">
                        <h3 className="font-bold text-xl ">Sản phẩm:</h3>
                        <div className="flex flex-col col-span-3  bg-primary rounded-3xl">
                        
                            <div className="flex flex-col mx-4">
                                <div className="flex w-full justify-end">
                                    <div className="flex items-center gap-x-20 text-primary font-normal text-base">
                                        <span className="w-24  text-center">Đơn giá</span>
                                        <span className="w-24 text-center">Số lượng</span>
                                        <span className="w-24  text-center">Thành tiền</span>
                                    </div>
                                </div>
                            </div>
                            {
                                itemsData.map((item, index) => (
                                    <ProductItem key={index} data={item}/>
                                ))
                            }
                        </div>
                    </div>
                    {/* Payment */}
                    <Payment settPaymentMethod={setPaymentMethod}/>
                </div>
                <div className="sticky top-[100px] w-96 flex flex-col gap-y-3 col-span-1 bg-primary rounded-3xl text-primary p-5 h-fit">

                    <h1 className="text-lg font-bold">Đơn hàng của bạn: </h1>
                    <div className="flex justify-between text-sm font-medium">
                        <span>Tổng tiền hàng: </span>
                        <span>{totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium pb-3">
                        <span>Phí vận chuyển: </span>
                        <span>{`${`$0`}`}</span>
                    </div>

                    <div className="flex justify-between border-t-2 border-primary pt-3">
                        <span className="text-lg font-bold">Tổng hóa đơn:</span> 
                        <span className="text-lg text-red--dark  font-bold">{totalPrice}</span>
                    </div>
                    <button onClick={handlePlaceOrder} className="font-bold bg-green--dark text-white text-sm px-5 py-2 rounded-lg hover:opacity-90 my-2">Đặt hàng</button>
                </div>
            </div>
        </div>
        <Modal displaying={displaying} setDisplaying={setDisplaying} state={state} desc={notification}/>

        </>
    )
}

export default PlaceOrderPage;