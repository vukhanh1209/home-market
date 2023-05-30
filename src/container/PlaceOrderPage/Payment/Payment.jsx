import {useState} from 'react'
import PayPal from '../../../component/UI/PayPal'
import Momo from '../../../component/UI/Momo';

const Payment = (props) => {
    const {setPaymentMethod} = props
    const [isChanging, setIsChanging] = useState(false);
    const [payment, setPayment] = useState('Thanh toán khi nhận hàng');
    const handleChangePayment = (event, paymentName) => {
        if(event.target.checked) {
            setPayment(paymentName);
            setPaymentMethod(paymentName);
        }
    }
    return (
        <div className="pt-8">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl ">Phương thức thanh toán:</h3>
                <div className="flex gap-x-6 items-center">
                    <span className="font-medium text-base">{payment}</span>
                    {
                        !isChanging && (
                            <button
                                onClick={() => setIsChanging(true)}
                                className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center">
                                Thay đổi
                            </button>
                        )
                    }
                </div>
            </div>
            {
                isChanging && (
                    <div className="pt-4">
                        <div className="flex items-center justify-between py-2 border-primary min-h-[4.5rem]">
                            <div className="flex items-center gap-x-3">
                                <input type="radio" name="payment" id="PayPalCheckBox" className="w-5 h-5" onChange={(event) => handleChangePayment(event, 'PAYPAL')}/>
                                <label htmlFor="PayPalCheckBox" className="font-bold">Pay Pal</label>
                            </div>
                            <PayPal height="32"/>
                        </div>
                        <div className="flex items-center justify-between py-2 border-t-2 border-primary min-h-[4.5rem]">
                            <div className="flex items-center gap-x-3">
                                <input type="radio" name="payment" id="MoMoCheckBox" className="w-5 h-5" onChange={(event) => handleChangePayment(event, 'MOMO')}/>
                                <label htmlFor="MoMoCheckBox" className="font-bold">MoMo</label>
                            </div>
                            <Momo width="48" height="48"/>
                        </div>
                        <div className="flex items-center justify-start py-2 border-t-2 border-primary min-h-[4.5rem]">
                            <div className="flex items-center gap-x-3">
                                <input type="radio" name="payment" id="CODCheckBox" className="w-5 h-5" onChange={(event) => handleChangePayment(event, 'COD')}/>
                                <label htmlFor="CODCheckBox" className="font-bold">Thanh toán khi nhận hàng</label>
                            </div>
                        </div>
                    </div>
                )
            }
            

        </div>
    )
}
export default Payment;