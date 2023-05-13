import ProductItem from '../ProductItem'


const MyOrder = () => {
    return (
        <div className="flex flex-col col-span-3 gap-y-4">
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
            
        </div>
    )
}

export default MyOrder