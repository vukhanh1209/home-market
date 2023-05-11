import { useState, useEffect, useContext } from "react";
// import { Checkbox } from "@material-tailwind/react";
import {SelectedTagContext} from '../../container/SearchPage'

import {
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography
  } from "@material-tailwind/react";


const categories = [
     'Thịt heo', 
     'Thịt bò', 
     'Trứng', 
     'Cá', 
     'Trái cây nhập khẩu', 
     'Trái cây organic',
     'Rau Đà Lạt',
     'Rau xanh',
     'Củ'
]

const CategoryFilter = (props) => {
    const selectedTag = useContext(SelectedTagContext);

    const handleClickCategoryInput = (index) => {
        const itemValue = selectedTag.find((item) => item == categories[index])
        if(!itemValue) {
            const newSelectedTag = [...selectedTag, categories[index]];
            props.setSelectedTag(newSelectedTag)
        }
        else {
            selectedTag.splice(selectedTag.indexOf(itemValue), 1)
            const newSelectedTag = [...selectedTag];
            props.setSelectedTag(newSelectedTag)
        }
    }


    return (
        <div className="sticky top-0 col-span-1 my-10 pr-10  z-20 border-r border-primary">
            <h1 className="text-xl font-bold text-[#383634] px-2 mb-6">Bộ lọc</h1>

            <div className="h-40 border-b border-primary">
                <h1 className="text-lg font-semibold text-[#383634] px-2">Lọc theo giá</h1>
                <div className=" ">
                </div>
            </div>

            <div className="">
                <h1 className="text-lg font-semibold text-[#383634] px-2 pt-5">Loại sản phẩm</h1>
                <Card className="bg-[#F6F4F2]">
                    <List>
                        {
                            categories.map((item, index) => (
                                <ListItem key={index} value={index} className="p-0" >
                                    <label htmlFor={`category-${index}`} className="flex items-center px-3 py-2 w-full cursor-pointer">
                                        <ListItemPrefix className="mr-3">
                                        <Checkbox 
                                            onChange={() => {                         
                                                handleClickCategoryInput(index)}
                                            } 
                                            checked={!!selectedTag.find((item) => item == categories[index]) ? 'checked' : ''}
                                            id={`category-${index}`} 
                                            ripple={false} 
                                            className=" hover:before:opacity-0 accent-[#4C7C7D]"
                                            containerProps={{
                                            className: "p-0"
                                            }}
                                        />
                                        </ListItemPrefix>
                                        <Typography className=" font-semibold">{item}</Typography>
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