import NumberInput from '../../../component/UI/NumberInput';
import product from '../../../assets/p1.png'


const ProductItem = (props) => {
    const {childCate,name,newPrice,parentCate,quantity,weight} = props;
    return (
        <div className="flex flex-col mx-4 py-6 border-b-2 border-primary">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <div className="border border-primary bg-white rounded-xl">
                        <img src={product} alt="" className="w-20 h-20 rounded-xl"/>
                    </div>
                    <div className="flex flex-col">
                        <div className="text-xs font-bold text-gray-500 uppercase">
                            <span >{parentCate}</span> - <span>{childCate}</span>
                        </div>

                        <h1 className="font-bold text-lg text-primary">{name}</h1>
                        <span className="text-xs font-semibold text-gray-400 ">{weight}</span>

                    </div>
                </div>

                <div className="flex items-center gap-x-20 text-primary">
                    <span className="font-semibold text-base w-24 text-center">{newPrice}</span>
                    <span className="w-24 text-center">{quantity}</span>
                    <span className="font-semibold text-base w-24 text-center">{newPrice * quantity}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;

