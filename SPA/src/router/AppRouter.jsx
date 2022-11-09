import { Navigate, Route, Routes } from 'react-router-dom'

import { LoginPage } from '../auth/pages'

import { SeriesRoutes } from '../series/routes/SeriesRoutes'

export const AppRouter = () => {
    return (
        <>
            <Routes>

                <Route path="/login" element={ <LoginPage/> }/>
                
                <Route path="/" element={ <LoginPage/> }/>

                <Route path="/*" element={ <SeriesRoutes/> }/>

            </Routes>
        </>
    )
}
