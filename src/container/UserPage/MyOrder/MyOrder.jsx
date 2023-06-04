import ProductItem from '../ProductItem'
import API from '../../../api'
import { useState, useEffect} from 'react';
import { formatCash } from '../../../utils/utils';
const MyOrder = () => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    const [orderList, setOrderList] = useState([]);
    // Call get order of user API 
    useEffect(() => {
        API.get(`user/getuser?key=${profile.userID}`)
        .then(res => {
            console.log(res.data.orderlist)
            setOrderList(res.data.orderlist)
        })
        .catch(err => console.error(err))
    }, [])

    const formatOrderStatus = (status) => {
        switch (status) {
            case "SHIPPING":
                return "Đang giao hàng";
            case "SHIPPED":
                return "Đã nhận hàng";
            default:
                return "Đang chuẩn bị";
        }
    }
    return (
        <div className="flex flex-col col-span-3 gap-y-4">
            {
                orderList.map((order, index) => (
                    <div key={index} className="flex flex-col w-full px-10 py-8 bg-primary rounded-3xl ">     
                        <div className="flex justify-end">
                            <span className="text-green--dark font-semibold text-sm uppercase">{formatOrderStatus(order.status)}</span>
                        </div>
                        {
                            order.itemList.map((item, index) => (
                                <ProductItem key={index} data={item}/>
                            ))
                        }
                        <div className="flex flex-col items-end mt-6">
                            <div className="flex items-center gap-x-3">
                                <span className="text-base font-medium ">Thành tiền:</span> 
                                <span className="text-2xl font-semibold">{formatCash(order.totalValue * 1000)}</span>
                            </div>
                            <button className="font-bold hover:opacity-80 text-base px-6 py-2 rounded-lg bg-red--dark text-white mt-6">Hủy đơn</button>
                        </div>
                    </div>
                ))
            }
            {/* <div className="flex flex-col w-full px-10 py-8 bg-primary rounded-3xl ">     
                <div className="flex justify-end">
                    <span className="text-green--dark font-medium text-sm uppercase">{`${'Đang giao'}`}</span>
                </div>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <div className="flex flex-col items-end mt-6">
                    <div className="flex items-center gap-x-3">
                        <span className="text-base font-medium ">Thành tiền:</span> 
                        <span className="text-2xl font-semibold">{`${`$320.000`}`}</span>
                    </div>
                    <button className="font-bold hover:opacity-80 text-base px-6 py-2 rounded-lg bg-red--dark text-white mt-6">Hủy đơn</button>
                </div>
            </div>

            <div className="flex flex-col w-full px-10 py-8 bg-primary rounded-3xl ">     
                <div className="flex justify-end">
                    <span className="text-green--dark font-medium text-sm uppercase">{`${'Đang giao'}`}</span>
                </div>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <div className="flex flex-col items-end mt-6">
                    <div className="flex items-center gap-x-3">
                        <span className="text-base font-medium ">Thành tiền:</span> 
                        <span className="text-2xl font-semibold">{`${`$320.000`}`}</span>
                    </div>
                    <button className="font-bold hover:opacity-80 text-base px-6 py-2 rounded-lg bg-red--dark text-white mt-6">Hủy đơn</button>
                </div>
            </div>

            <div className="flex flex-col w-full px-10 py-8 bg-primary rounded-3xl ">     
                <div className="flex justify-end">
                    <span className="text-green--dark font-medium text-sm uppercase">{`${'Đang giao'}`}</span>
                </div>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <div className="flex flex-col items-end mt-6">
                    <div className="flex items-center gap-x-3">
                        <span className="text-base font-medium ">Thành tiền:</span> 
                        <span className="text-2xl font-semibold">{`${`$320.000`}`}</span>
                    </div>
                    <button className="font-bold hover:opacity-80 text-base px-6 py-2 rounded-lg bg-red--dark text-white mt-6">Hủy đơn</button>
                </div>
            </div> */}
            
        </div>
    )
}

export default MyOrder