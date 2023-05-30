import {useState, useEffect, useRef} from 'react'
import ProductItem from "./ProductItem";
import { Link, useNavigate } from "react-router-dom";
import Modal from '../../component/UI/Modal';
import API from '../../api';
import { formatCash } from '../../utils/utils';

const CartPage = () => {
    const [total, setTotal] = useState(0)
    const [notification, setNotification] = useState(false)
    const [state, setState] = useState();
    const [displaying, setDisplaying] = useState(false);
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        API.get(`/cart/items?key=${JSON.parse(localStorage.getItem('profile')).userID}`)
            .then(res => {
                console.log(res)
                setCartItems(res.data.itemList)
            }) 
            .catch(err => {
                console.log(err)
            })
    }, [])
    let itemsData = [];

    let selectedItemQuantity = 0;

    const handleSeclectAll = () => {
        const cartItemInput = document.getElementById("CartItems").querySelectorAll(".cart-item__input");
        cartItemInput.forEach(item => {
            if(!item.checked)  item.click()
        });

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
        const selectedItems = [];
        const cartItemInput = document.getElementById("CartItems").querySelectorAll(".cart-item__input")
        cartItemInput.forEach((item) => {
            if(item.checked) {
                selectedItems.push(item.getAttribute('itemid'))
            };
        });

        const selectedItemsKey = selectedItems.join(',');
        console.log('selectedItemsKey',selectedItemsKey)

        API.get(`cart/checkout?key=${selectedItemsKey}`)
            .then(res => {
                console.log(res)
                setState(res.data.success);
                setNotification(res.data.message)
                setDisplaying(true)
                if(res.data.success) {
                    setTimeout(() => {
                        navigate("/place-order", { state: { itemsData, totalQuantity: selectedItemQuantity,  totalPrice: total} })
                    }, 2000)
                }
            })
            .catch(err => {
                console.log(err)
            })
        // setIsNotifying(true)
        // setTimeout(() => {
        //     navigate("/place-order", { state: { itemsData, totalQuantity: selectedItemQuantity,  totalPrice: total} })
        // }, 4000)
    }


    return (
        <div className="w-full h-fit bg-primary--dark px-24 py-28">
            <h1 className="text-3xl font-bold text-[#383634] py-5">Giỏ hàng</h1>
            <div className="grid grid-cols-5 w-full mb-10  h-full gap-8 ">
                <div className="flex flex-col col-span-4 px-10  bg-primary rounded-3xl">
                    <div className="flex justify-between items-center w-full py-5 border-b-2 border-primary">
                        <div className="flex items-center">
                            <input onChange={handleSeclectAll} type="checkbox" className="w-4 h-4 mr-3 accent-[#4C7C7D]" id="SelectAll"/>
                            <label  htmlFor="SelectAll" className="text-sm font-medium text-primary">Tất cả</label>
                        </div>
                        {/* <button 
                            onClick={handleDeleteSelectedItem}
                            className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center">
                            Xóa các sản phẩm đã chọn
                        </button> */}
                    </div>
                    <div id="CartItems" className="h-full">
                        { cartItems.length > 0  ?
                            cartItems.map((item, index) => {
                                return (
                                    <ProductItem 
                                        key={index} 
                                        data={item}
                                        itemIndex={index}
                                        setTotal={setTotal}
                                        setDisplaying={setDisplaying}
                                        setState={setState}
                                        setNotification={setNotification}

                                    />
                                )
                                
                            })
                            : (
                                <div className="text-xl font-bold text-primary py-32 text-center w-full">Không có sản phẩm nào trong giỏ hàng</div>
                            )
                                
                            

                        }
                    </div>
                </div>
                <div className="sticky top-[100px] flex flex-col gap-y-3 col-span-1 bg-primary rounded-3xl text-primary p-5 h-fit">
                    <span className="text-xs font-medium ">{`Tổng cộng ${selectedItemQuantity} sản phẩm`}</span>
                    <span className="text-xl font-bold">{formatCash(total)}</span>
                    <button className="flex">
                        <button 
                            onClick={handleCheckout}
                            className="font-bold flex-1 bg-green--dark text-white text-sm px-5 py-2 rounded-lg hover:opacity-90">
                            Mua hàng
                        </button>
                    </button>
                </div>
            </div>
            
            <Modal displaying={displaying} setDisplaying={setDisplaying} state={state} desc={notification}/>
            
           

        </div>
    )
}

export default CartPage;