import { Fragment } from "react"
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HomePage from "../../container/HomePage";
import SearchPage from "../../container/SearchPage";
import CartPage from "../../container/CartPage";
import PlaceOrderPage from "../../container/PlaceOrderPage";
import UserPage from "../../container/UserPage";
import { Routes, Route } from "react-router-dom";

const MainLayout = () => {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='search' element={<SearchPage/>}/>
                <Route path='cart' element={<CartPage/>}/>
                <Route path='place-order' element={<PlaceOrderPage/>}/>
            </Routes>


            {/* <HomePage/> */}
            {/* <SearchPage/> */}
            {/* <CartPage/> */}
            {/* <PlaceOrderPage/> */}
            {/* <UserPage/> */}
            <Footer/>
        </Fragment>
    )
}

export default MainLayout;