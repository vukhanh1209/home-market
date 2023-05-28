import { Fragment } from "react"
import { Routes, Route, Outlet } from "react-router-dom";
import SignUpPage from "../../container/SignUpPage";
import LogInPage from "../../container/LogInPage";


const AccountLayout = () => {
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    )
}

export default AccountLayout;