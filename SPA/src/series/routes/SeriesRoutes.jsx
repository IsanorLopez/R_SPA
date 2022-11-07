import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../components'

import { BetterCallSaulPage, BreakingBadPage } from '../pages'

export const SeriesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className="container">

                <Routes>
                    <Route path="/BreakingBad" element={ <BreakingBadPage/> }/>
                    <Route path="/BetterCallSaul" element={ <BetterCallSaulPage/> }/>

                    <Route path="/*" element={ <Navigate to={ "/BreakingBad" } /> }/>
                </Routes>

            </div>
        </>
    )
}
