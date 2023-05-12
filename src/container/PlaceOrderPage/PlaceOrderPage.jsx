import ProductItem from "./ProductItem";
import CustomerInfo from './CustomerInfo'
import Payment from './Payment'

const PlaceOrderPage = () => {
    return (
        <>
        <div className="w-full h-fit px-24 py-28 bg-primary text-primary">
            <h1 className="text-3xl font-bold text-[#383634] py-5">Đặt hàng</h1>
            
            <div className="flex w-full mb-10 h-full gap-8 ">
                <div className="flex-1">
                    {/* Customer Infomation */}
                    <CustomerInfo/>
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
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </div>
                    </div>
                    {/* Payment */}
                    <Payment/>
                </div>
                <div className="sticky top-[100px] w-96 flex flex-col gap-y-3 col-span-1 bg-primary rounded-3xl text-primary p-5 h-fit">

                    <h1 className="text-lg font-bold">Đơn hàng của bạn: </h1>
                    <div className="flex justify-between text-sm font-medium">
                        <span>Tổng tiền hàng: </span>
                        <span>{`${`$320.000`}`}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium pb-3">
                        <span>Phí vận chuyển: </span>
                        <span>{`${`$0`}`}</span>
                    </div>

                    <div className="flex justify-between border-t-2 border-primary pt-3">
                        <span className="text-lg font-bold">Tổng hóa đơn:</span> 
                        <span className="text-lg text-red--dark  font-bold">{`${`$320.000`}`}</span>
                    </div>
                    <button className="font-bold bg-green--dark text-white text-sm px-5 py-2 rounded-lg hover:opacity-90 my-2">Đặt hàng</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default PlaceOrderPage;