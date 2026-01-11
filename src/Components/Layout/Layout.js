import React, { useEffect } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {

    const navigate = useNavigate()

    const isAuth = localStorage.getItem("Token");
    useEffect(() => {
        if (!isAuth) {
            navigate('/')
        }
    }, [isAuth])

    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout