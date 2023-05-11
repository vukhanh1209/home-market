import NumberInput from '../../../component/UI/NumberInput';
import product from '../../../assets/p1.png'


const ProductItem = () => {
    return (
        <div className="flex flex-col mx-4 py-6 border-b-2 border-primary">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <input type="checkbox" className="w-4 h-4"/>
                    <img src={product} alt="" className="w-20 h-20 rounded-xl"/>
                    <div className="flex flex-col">
                        <div className="text-xs font-bold text-gray-500 ">
                            <span >THỊT, CÁ & TRỨNG</span> - <span>THỊT HEO</span>
                        </div>

                        <h1 className="font-bold text-lg text-primary">Fresh Broccoli</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{`200g`}</span>

                    </div>
                </div>

                <div className="flex items-center gap-x-8 text-primary">
                    <div>
                        <span className="font-medium text-base mr-4 line-through">{`$54.00`}</span>
                        <span className="font-semibold text-base">{`$32.00`}</span>
                    </div>
                    <NumberInput width="32px" height="24px" color="#fff" borderRadius="4px"/>
                    <span className="font-semibold text-base text-red--dark ">{`$32.00`}</span>
                    <span className="text-sm font-semibold cursor-pointer underline">Xóa</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

