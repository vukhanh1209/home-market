import ProductItem from "./ProductItem";
import { Link } from "react-router-dom";

const CartPage = () => {
    return (
        <div className="w-full h-fit bg-primary--dark px-24 py-28">
            <h1 className="text-3xl font-bold text-[#383634] py-5">Giỏ hàng</h1>
            <div className="grid grid-cols-5 w-full mb-10  h-full gap-8 ">
                <div className="flex flex-col col-span-4 px-10  bg-primary rounded-3xl">
                    <div className="flex justify-between items-center w-full py-5 border-b-2 border-primary">
                        <div className="flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-3" id=""SelectAll/>
                            <label htmlFor="SelectAll" className="text-sm font-medium text-primary">Tất cả</label>
                        </div>
                        <button className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center">Xóa các sản phẩm đã chọn</button>
                    </div>

                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>

                </div>
                <div className="sticky top-[100px] flex flex-col gap-y-3 col-span-1 bg-primary rounded-3xl text-primary p-5 h-fit">
                    <span className="text-xs font-medium ">{`Tổng cộng ${10} sản phẩm`}</span>
                    <span className="text-xl font-bold">{`${`$320.000`}`}</span>
                    <Link to='/place-order' className="flex">
                        <button className="font-bold flex-1 bg-green--dark text-white text-sm px-5 py-2 rounded-lg hover:opacity-90">Mua hàng</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartPage;