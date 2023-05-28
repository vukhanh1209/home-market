import ProductCard from '../../component/ProductCard'
import CategoryFilter from '../../component/CategoryFilter'
import Dropdown from '../../component/UI/Dropdown'
import {VscClose} from 'react-icons/vsc'
import { useState, useEffect, createContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import API from '../../api'

export const SelectedTagContext = createContext();
const sortbyFilter = ['Giá tăng dần', 'Giá giảm dần', 'Phổ biến']

const SearchPage = () => {
    const [selectedTag, setSelectedTag] = useState([]);
    const [productList, setProductList] = useState([]);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check the search param and call API when the SearchPage is mounted
        if(location.search.includes('cate')){
            const currentSearch = new URLSearchParams(location.search);
            const cate = currentSearch.get('cate');
            API.get(`product/productByCategory?key=${cate}`)
                .then(res => {
                    setProductList(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else if(location.search.includes('key')) {
            const currentSearch = new URLSearchParams(location.search);
            const key = currentSearch.get('key');
            API.get(`product/search?key=${key}`)
                .then(res => {
                    setProductList(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            API.get('product/all')
                .then(res => {
                    setProductList(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [])


    const handleDeleteAllTags = () => {
        showAllProducts();
        setSelectedTag([])
    }

    const handleClickSelectedTag = (index) => {

        const currentSearch = new URLSearchParams(location.search);
        const cate = currentSearch.get('cate');

        let newCate = cate.split(',').filter((item, i) => i != index).join(',');

        if(newCate === "") {
            showAllProducts();
        }
      
        else {
            showProductsByCate(newCate);
        }

        selectedTag.splice(index, 1);
        setSelectedTag([...selectedTag]);
    }


    const showAllProducts = () => {
        navigate('/search')
        API.get('product/all')
            .then(res => {
                setProductList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const showProductsByCate = (newCate) => {
        navigate(`/search?cate=${newCate}`)
        API.get(`product/productByCategory?key=${newCate}`)
        .then(res => {
            setProductList(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <div className="px-24  mt-[7.5rem] mb-10 bg-[#F6F4F2]  h-fit grid grid-cols-5">
                
                <SelectedTagContext.Provider value={selectedTag}>
                    <CategoryFilter setSelectedTag={setSelectedTag} setProductList={setProductList}/>
                </SelectedTagContext.Provider>

                <div className="flex flex-wrap gap-y-5 col-span-4 py-10 pl-10">
                    <h1 className="text-xl font-bold text-[#383634] px-2 ">Sản phẩm</h1>

                    <div className="w-full flex justify-between items-center">
                        <span className="font-semibold text-base text-primary">{`Tìm thấy ${productList.length} sản phẩm`}</span>
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
                    <div className="grid grid-cols-4 gap-3">
                        {
                            productList.map((item, index) => (
                                <ProductCard key={index} data={item}/>
                            ))
                        }
                    </div>



                </div>
            </div>
        </>
    )
}

export default SearchPage;