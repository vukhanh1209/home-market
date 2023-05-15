import { Fragment } from "react"
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HomePage from "../../container/HomePage";
import SearchPage from "../../container/SearchPage";
import CartPage from "../../container/CartPage";
import PlaceOrderPage from "../../container/PlaceOrderPage";
import UserPage from "../../container/UserPage";
import ManageAccount from "../../container/UserPage/ManageAccount";
import MyOrder from "../../container/UserPage/MyOrder";
import MyPayment from "../../container/UserPage/MyPayment";

import { Routes, Route } from "react-router-dom";

const MainLayout = () => {
    return (
        <Fragment>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/search' element={<SearchPage/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/place-order' element={<PlaceOrderPage/>}/>
                <Route path='/' element={<UserPage/>}> 
                    <Route path='account' element={<ManageAccount />} />
                    <Route path='order' element={<MyOrder />} />
                    <Route path='payment' element={<MyPayment />} />
                </Route>

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