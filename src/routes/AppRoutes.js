import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Route, Routes } from 'react-router'
import { SignUp } from '../pages/SignUp'
import { Home } from '../pages/Home'
import { ROUTES } from '../utils/constants/general'

export const AppRoutes = () => {
   const { isAuthorized } = useSelector((state) => state.auth)

   const navigate = useNavigate()
   useEffect(() => {
      if (!isAuthorized) {
         navigate(ROUTES.HOME)
      }
   }, [isAuthorized])
   return (
      <Routes>
         <Route path={ROUTES.HOME} element={<Home />} />
         <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
      </Routes>
   )
}
