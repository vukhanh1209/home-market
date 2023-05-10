import { Fragment } from "react"
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import HomePage from "../../container/HomePage";
import SearchPage from "../../container/SearchPage";

const MainLayout = () => {
    return (
        <Fragment>
            <Header/>
            {/* <HomePage/> */}
            <SearchPage/>
            <Footer/>
        </Fragment>
    )
}

export default MainLayout;