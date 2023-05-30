import { useState, useEffect, useContext } from "react";
import {SelectedTagContext} from '../../container/SearchPage'
import { useLocation, useNavigate } from "react-router-dom";
import {removeVietnameseTones} from '../../utils/utils'
import {
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
  } from "@material-tailwind/react";
  import API from '../../api'



const category = [
    {
        id: 1,
        cate: 'Rau củ quả an toàn'
    },
    {
        id: 2,
        cate: 'Rau củ quả hữu cơ'
    },
    {
        id: 3,
        cate: 'Nấm & Đậu hũ'
    },
    {
        id: 4,
        cate: 'Thịt bò'
    },
    {
        id: 5,
        cate: 'Thịt heo'
    },
    {
        id: 6,
        cate: 'Cá'
    },
    {
        id: 7,
        cate: 'Trứng'
    },
    {
        id: 8,
        cate: 'Trái cây nhập'
    },
    {
        id: 9,
        cate: 'Trái cây Việt Nam'
    },
]

const CategoryFilter = (props) => {
    const selectedTag = useContext(SelectedTagContext);
    const {setSelectedTag, setProductList} = props;

    const location = useLocation();
    const navigate = useNavigate();

    const currentSearch = new URLSearchParams(location.search);
    let cateKeys = currentSearch.get('cate') || "";
    
    useEffect(() => {
        // Check the input in category filter when the SearchPage is mounted
        if(cateKeys !== "") {
            cateKeys = Number(cateKeys);
            const itemValue = selectedTag.find((item) => item == category[cateKeys - 1].cate)
            if(!itemValue) {
                const newSelectedTag = [...selectedTag, category[cateKeys - 1].cate];
                setSelectedTag(newSelectedTag)
            }
        }
    }, [])

    const handleClickCategoryInput = (index) => {
        const itemValue = selectedTag.find((item) => item == category[index].cate)
        
        if(!itemValue) {
            // Call API when check the category input
            let newCate = cateKeys == "" ? `${index + 1}` : cateKeys + `,${index + 1}`
            showProductsByCate(newCate);

            // Update selectedTag when check the category input
            const newSelectedTag = [...selectedTag, category[index].cate];
            setSelectedTag(newSelectedTag)
        }
        else {
            // Call API when uncheck the category input
            let newCate = cateKeys.split(',').filter((item) => item != index + 1).join(',');

            if(newCate === "") {
                showAllProducts();
            }
          
            else {
                showProductsByCate(newCate);
            }

            // Update selectedTag when uncheck the category input
            selectedTag.splice(selectedTag.indexOf(itemValue), 1)
            const newSelectedTag = [...selectedTag];
            setSelectedTag(newSelectedTag)
        }
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
        <div className="sticky top-0 col-span-1 my-10 pr-10  z-20 border-r border-primary">
            <h1 className="text-xl font-bold text-[#383634] px-2 mb-6">Bộ lọc</h1>

            {/* <div className="h-40 border-b border-primary">
                <h1 className="text-lg font-semibold text-[#383634] px-2">Lọc theo giá</h1>
                <div className=" ">
                </div>
            </div> */}

            <div className="">
                <h1 className="text-lg font-semibold text-[#383634] px-2 pt-5">Loại sản phẩm</h1>
                <Card className="bg-[#F6F4F2]">
                    <List>
                        {
                            category.map((item, index) => (
                                <ListItem key={index} value={index} className="p-0">
                                    <label htmlFor={`category-${index}`} className="flex items-center px-3 py-2 w-full cursor-pointer">
                                        <ListItemPrefix className="mr-3">
                                        <Checkbox 
                                            onChange={() => {                         
                                                handleClickCategoryInput(index)}
                                            } 
                                            checked={!!selectedTag.find((item) => item == category[index].cate) ? 'checked' : ''}
                                            id={`category-${index}`} 
                                            ripple={false} 
                                            className=" hover:before:opacity-0 accent-[#4C7C7D]"
                                            containerProps={{
                                            className: "p-0"
                                            }}
                                        />
                                        </ListItemPrefix>
                                        <Typography className=" font-semibold">{item.cate}</Typography>
                                    </label>
                                </ListItem>
                            ))
                        }

                        
                    </List>
                </Card>
            </div>
        </div>
    )
}

export default CategoryFilter;