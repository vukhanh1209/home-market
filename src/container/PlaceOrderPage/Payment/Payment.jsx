

const Payment = () => {
    return (
        <div className="pt-8">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl ">Phương thức thanh toán:</h3>
                <div className="flex gap-x-6 items-center">
                    <span className="font-medium text-base">Thanh toán khi mua hàng</span>
                    <button className="text-primary bg-transparent border-2 border-primary hover:bg-primary--dark rounded-xl font-semibold text-xs px-4 py-2.5 text-center">Thay đổi</button>
                </div>
            </div>

        </div>
    )
}
export default Payment;