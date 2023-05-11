import ProductCard from '../../component/ProductCard'
import CategoryFilter from '../../component/CategoryFilter'
import Dropdown from '../../component/UI/Dropdown'
import {VscClose} from 'react-icons/vsc'
import { useState, createContext } from 'react'

export const SelectedTagContext = createContext();

const SearchPage = () => {
    const [selectedTag, setSelectedTag] = useState([]);

    const handleDeleteAllTags = () => {
        setSelectedTag([])
    }

    const handleClickSelectedTag = (index) => {
        selectedTag.splice(index, 1);
        setSelectedTag([...selectedTag]);
    }
    console.log('search',selectedTag)


    const sortbyFilter = ['Giá tăng dần', 'Giá giảm dần', 'Phổ biến']
    return (
        <>
            <div className="px-24  mt-[7.5rem] mb-10 bg-[#F6F4F2]  h-fit grid grid-cols-5">
                
                <SelectedTagContext.Provider value={selectedTag}>
                    <CategoryFilter setSelectedTag={setSelectedTag}/>
                </SelectedTagContext.Provider>

                <div className="flex flex-wrap gap-y-5 col-span-4 py-10 pl-10">
                    <h1 className="text-xl font-bold text-[#383634] px-2 ">Sản phẩm</h1>

                    <div className="w-full flex justify-between items-center">
                        <span className="font-semibold text-base text-primary">Tìm thấy 20 sản phẩm</span>
                        <div className="flex items-center font-semibold text-base text-primary gap-4">
                            <span className="text-base font-medium ">Sắp xếp theo</span>
                            <Dropdown name={'Sort by'} childs={sortbyFilter} width={'150px'}/>
                        </div>
                    </div>

                    {/* Tag */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-4">
                        <div className="flex justify-center items-center px-2 py-[0.4rem] cursor-pointer rounded-lg text-sm  text-black bg-[#EDEAE7]">
                            <div className="ml-1 mr-4">
                                <span className="font-medium ">Giá: &nbsp;</span>
                                <span className=" font-semibold">{`0$ - 20$`}</span>
                            </div>

                            <VscClose className="h-5 w-5"/>
                        </div>

                        {
                            selectedTag.map((item, index) => (
                                <button key={index} onClick={() => handleClickSelectedTag(index)} className="flex justify-center items-center px-2 py-[0.4rem] cursor-pointer rounded-lg text-sm  text-black bg-[#EDEAE7]">
                                    <div className="ml-1 mr-4">
                                        <span className="font-medium ">Loại: &nbsp;</span>
                                        <span className=" font-semibold">{item}</span>
                                    </div>

                                    <VscClose className="h-5 w-5"/>
                                </button>
                            ))
                            
                        }
                        

                        <span onClick={handleDeleteAllTags} className="ml-4 font-medium text-sm text-black underline cursor-pointer">Xóa tất cả</span>

                    </div>
                    <div className="flex gap-x-5 h-fit">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>

                    </div>
                    <div className="flex gap-x-5 h-fit">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>

                    </div>
                    <div className="flex gap-x-5 h-fit">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>

                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchPage;