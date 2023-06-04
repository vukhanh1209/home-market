import NumberInput from '../NumberInput';
import { formatCash } from '../../../utils/utils';
import API from '../../../api';
import { useState, useEffect } from 'react';

const ProductItem = (props) => {
    const { data, setTotal, setDisplaying, setState, setNotification, itemIndex} = props;
    let {urlImage, categoryName, itemName, weight, price, quantity, cartItemid} = data;
    const [itemQuantity, setItemQuantity] = useState(quantity)

    if(itemQuantity) quantity = itemQuantity;
    // Call the updating quantity of product API
    useEffect(() => {
        if(itemQuantity) {
            const updateCartItemData = {
                quantity: itemQuantity,
                item_id: data.cartItemid,
            }
            API.post('cart/edit', updateCartItemData)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    setState(false);
                    setNotification("Số lượng sản phẩm trong kho không đủ")
                    setDisplaying(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000)
                    console.log(err)
                })
        }
        const inputElement = document.getElementById(`cart-item-${itemIndex}`).querySelector('input');
        console.log(inputElement)
        // inputElement.click();
        inputElement.click();
    }, [itemQuantity])
    // Handle clicking the input of cart item
    const handleClickCartItem = (event) => {
        // console.log(event)
        
        if(event.target.checked) {
            console.log('itemQuantity', itemQuantity)

            setTotal(prev => prev += price * 1000 * itemQuantity)
        }
        else {
            console.log('itemQuantity', itemQuantity)
            setTotal(prev => prev -= price  * 1000* itemQuantity)
        } 
    }
    // Handle clicking the delete button on cart item 
    const handleDeleteCartItem = () => {
        API.delete(`cart/delete?key=${cartItemid}`)
        .then((res) => {
            console.log(res)
            setState(res.data.success);
            setNotification(res.data.message)
            setDisplaying(true)
            if(res.data.success) {
                setTimeout(() => {
                    window.location.reload();
                }, 2500)
            }
        })
        .catch((err) => {console.log(err)})
    }

    return (
        <div className="flex flex-col mx-4 py-6 border-b-2 border-primary cart-item" id={`cart-item-${itemIndex}`}>
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <input  onClick={handleClickCartItem} type="checkbox" itemID={cartItemid} className="w-4 h-4 cart-item__input accent-[#4C7C7D]"/>
                    <div className="border border-primary bg-white rounded-xl">
                        <img src={urlImage} alt="" className="w-20 h-20 rounded-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs font-bold text-gray-500 uppercase">
                            <span >{categoryName}</span>
                        </div>

                        <h1 className="font-bold text-lg text-primary">{itemName}</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{weight}</span>

                    </div>
                </div>
                
                <div className="flex">
                    <div className="grid grid-cols-3 gap-x-10  text-primary">
                        <span className="text-center font-semibold text-base">{formatCash(price * 1000)}</span>
                        <NumberInput width="32px" height="24px" color="#fff" borderRadius="4px" quantity={quantity} setItemQuantity={setItemQuantity} setTotal={setTotal}/>
                        <span className="text-center w-20 font-semibold text-base text-red--dark ">{formatCash(price * 1000 * quantity)}</span>

                    </div>
                    <span onClick={handleDeleteCartItem} className="text-primary text-sm font-semibold cursor-pointer underline ml-8">Xóa</span>
                </div>


            </div>
        </div>
    )
}

export default ProductItem;

