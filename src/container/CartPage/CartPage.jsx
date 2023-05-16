import {useState, useEffect, useRef} from 'react'
import ProductItem from "./ProductItem";
import { Link, useNavigate } from "react-router-dom";
import Modal from '../../component/UI/Modal';

const cartItems = [
    {
        parentCate: 'Thịt, cá & trứng',
        childCate: 'Thịt heo',
        name: 'Thịt đùi heo',
        weight: '200g',
        oldPrice: 20000,
        newPrice: 15000,
        quantity: 1,
    },
    {
        parentCate: 'Thịt, cá & trứng',
        childCate: 'Thịt heo',
        name: 'Thịt đùi heo',
        weight: '200g',
        oldPrice: 20000,
        newPrice: 15000,
        quantity: 1,
    },
    {
        parentCate: 'Thịt, cá & trứng',
        childCate: 'Thịt heo',
        name: 'Thịt đùi heo',
        weight: '200g',
        oldPrice: 20000,
        newPrice: 15000,
        quantity: 1,
    },
    {
        parentCate: 'Thịt, cá & trứng',
        childCate: 'Thịt heo',
        name: 'Thịt đùi heo',
        weight: '200g',
        oldPrice: 20000,
        newPrice: 15000,
        quantity: 1,
    },
    {
        parentCate: 'Thịt, cá & trứng',
        childCate: 'Thịt heo',
        name: 'Thịt đùi heo',
        weight: '200g',
        oldPrice: 20000,
        newPrice: 15000,
        quantity: 1,
    }
]

const CartPage = () => {
    const [total, setTotal] = useState(0)
    const [isNotifying, setIsNotifying] = useState(false)
    const navigate = useNavigate();
    let itemsData = [];

    let selectedItemQuantity = 0;

    const handleSeclectAll = () => {
        const cartItemInput = document.getElementById("CartItems").querySelectorAll(".cart-item__input");
        cartItemInput.forEach(item => item.click());

    }
    const handleDeleteSelectedItem = () => {
        
    }



    if(document.getElementById("CartItems")) {

        const cartItemInput = document.getElementById("CartItems").querySelectorAll(".cart-item__input");
        cartItemInput.forEach((item, index) => {
            if(item.checked == true) {
                selectedItemQuantity++
                itemsData.push(cartItems[index])

            };
        });
    }
    
    const handleCheckout = () => {
        setIsNotifying(true)
        setTimeout(() => {
            navigate("/place-order", { state: { itemsData, totalQuantity: selectedItemQuantity,  totalPrice: total} })
        }, 4000)
    }



    return (
        <div className="w-full h-fit bg-primary--dark px-24 py-28">
            <h1 className="text-3xl font-bold text-[#383634] py-5">Giỏ hàng</h1>
            <div className="grid grid-cols-5 w-full mb-10  h-full gap-8 ">
                <div className="flex flex-col col-span-4 px-10  bg-primary rounded-3xl">
                    <div className="flex justify-between items-center w-full py-5 border-b-2 border-primary">
                        <div className="flex items-center">
                            <input onChange={handleSeclectAll} type="checkbox" className="w-4 h-4 mr-3" id="SelectAll"/>
                            <label  htmlFor="SelectAll" className="text-sm font-medium text-primary">Tất cả</label>
                        </div>
                        <button 
                            onClick={handleDeleteSelectedItem}
                            className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center">
                            Xóa các sản phẩm đã chọn
                        </button>
                    </div>
                    <div id="CartItems">
                        { cartItems.length > 0  ?
                            cartItems.map((item, index) => {
                                return (
                                    <ProductItem 
                                        key={index} 
                                        parentCate={item.parentCate} 
                                        childCate={item.childCate} 
                                        name={item.name} 
                                        weight={item.weight} 
                                        oldPrice={item.oldPrice} 
                                        newPrice={item.newPrice} 
                                        quantity={item.quantity}
                                        setTotal={setTotal}
                                    />
                                )
                                
                            })
                            : (
                                <span className="text-xl font-bold">Không có sản phẩm nào trong giỏ hàng</span>
                            )
                                
                            

                        }
                    </div>
                </div>
                <div className="sticky top-[100px] flex flex-col gap-y-3 col-span-1 bg-primary rounded-3xl text-primary p-5 h-fit">
                    <span className="text-xs font-medium ">{`Tổng cộng ${selectedItemQuantity} sản phẩm`}</span>
                    <span className="text-xl font-bold">{total}</span>
                    <button className="flex">
                        <button 
                            onClick={handleCheckout}
                            className="font-bold flex-1 bg-green--dark text-white text-sm px-5 py-2 rounded-lg hover:opacity-90">
                            Mua hàng
                        </button>
                    </button>
                </div>
            </div>
            
            <Modal displaying={isNotifying} setDisplaying={setIsNotifying} state={"error"} desc={"Một trong những sản phẩm bạn chọn đã hết hàng"}/>
            
           

        </div>
    )
}

export default CartPage;