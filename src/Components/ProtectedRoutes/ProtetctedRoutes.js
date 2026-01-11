import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtetctedRoutes = ({children}) => {
const isAuth = localStorage.getItem("Token");

  return isAuth ? children : <Navigate to="/" replace/>
}

export default ProtetctedRoutes