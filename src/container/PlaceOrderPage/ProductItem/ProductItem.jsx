import NumberInput from '../../../component/UI/NumberInput';
import product from '../../../assets/p1.png'
import { formatCash } from '../../../utils/utils';

const ProductItem = (props) => {
    const {data} = props;
    return (
        <div className="flex flex-col mx-4 py-6 border-b-2 border-primary">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <div className="border border-primary bg-white rounded-xl">
                        <img src={data.urlImage} alt="" className="w-20 h-20 rounded-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs font-bold text-gray-500 uppercase">
                            <span >{data.categoryName}</span>
                        </div>

                        <h1 className="font-bold text-lg text-primary">{data.itemName}</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{data.weight}</span>

                    </div>
                </div>

                <div className="flex items-center gap-x-20 text-primary">
                    <span className="font-semibold text-base w-24 text-center">{formatCash(data.price * 1000)}</span>
                    <span className="w-24 text-center">{data.quantity}</span>
                    <span className="font-semibold text-base w-24 text-center">{formatCash(data.price * 1000 * data.quantity)}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

