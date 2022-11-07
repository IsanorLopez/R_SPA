import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages'

import { Navbar } from '../series/components'

import { BetterCallSaulPage, BreakingBadPage } from '../series/pages'

export const AppRouter = () => {
    return (
        <>
            <Navbar/>

            <Routes>
                <Route path="/BreakingBad" element={ <BreakingBadPage/> }/>
                <Route path="/BetterCallSaul" element={ <BetterCallSaulPage/> }/>

                <Route path="/login" element={ <LoginPage/> }/>

                <Route path="/*" element={ <Navigate to={ "/BreakingBad" } /> }/>
            </Routes>
        </>
    )
}
