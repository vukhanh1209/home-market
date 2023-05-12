import NumberInput from '../../../component/UI/NumberInput';
import product from '../../../assets/p1.png'


const ProductItem = (props) => {
    const {img, category, name, weight, price, quanti, total} = props;
    return (
        <div className="flex flex-col mx-4 py-6 border-b-2 border-primary">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <div className="border border-primary bg-white rounded-xl">
                        <img src={product} alt="" className="w-20 h-20 rounded-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs font-bold text-gray-500 ">
                            <span >THỊT, CÁ & TRỨNG</span> - <span>THỊT HEO</span>
                        </div>

                        <h1 className="font-bold text-lg text-primary">Fresh Broccoli</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{`${`200g`}`}</span>

                    </div>
                </div>

                <div className="flex items-center gap-x-20 text-primary">
                    <span className="font-semibold text-base w-24 text-center">{`${`$32.00`}`}</span>
                    <span className="w-24 text-center">{`${`1`}`}</span>
                    <span className="font-semibold text-base w-24 text-center">{`${`$32.00`}`}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

