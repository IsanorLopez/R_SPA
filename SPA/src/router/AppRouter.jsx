import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'

import { BetterCallSaulPage, BreakingBadPage } from '../series/pages'


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/BreakingBad" element={ <BreakingBadPage/> }/>
                <Route path="/BetterCallSaul" element={ <BetterCallSaulPage/> }/>

                <Route path="/login" element={ <LoginPage/> }/>

                <Route path="/*" element={ <Navigate to={ "/BreakingBad" } /> }/>
            </Routes>
        </>
    )
}
