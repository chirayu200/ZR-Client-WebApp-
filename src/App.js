import "./assets/fonts/fonts.css";
import "./App.css";
import "./style1.css"
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";

import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { GetClientDetailByEmailId } from "./Services/APIs";
import { getLocalData, setLocalData } from "./Utils";
import ExploreServices from "./pages/Dashboard-Home/ExploreServices";

const withSuspense = (Component) => (props) =>
(
    <Suspense
        fallback={
            <Box className='progress-wrap'>
                <Box className='loader'> <CircularProgress size={60} /> </Box>
            </Box>
        }
    >
        <Component {...props} />
    </Suspense>
);

const Sidebar = withSuspense(
    lazy(() => import("./pages/../Components/Sidebar/MainSideBar.jsx"))
);
const AuthenticationMain = withSuspense(lazy(() => import("./pages/Accounts")));
const Dashboard = withSuspense(lazy(() => import("./pages/Dashboard-Home")));
const Appointment = withSuspense(lazy(() => import("./pages/Appointments")));
const Shop = withSuspense(lazy(() => import("./pages/Shop")));
const Achievements = withSuspense(lazy(() => import("./pages/Achievements")));
const Profile = withSuspense(lazy(() => import("./pages/Profile")))
const Settings = withSuspense(lazy(() => import("./pages/Settings")));

const Layout = ({ loggedIn, Component, name, path, clientDetail }) => {
    return (
        <>
            {loggedIn ? (
                <>
                    <Sidebar name={name} Component={Component} path={path} clientDetail={clientDetail} />
                </>
            ) : (
                Component
            )}
        </>
    );
};

function App() {
    let token = getLocalData('token');
    const [loggedIn, setLoggedIn] = useState(!!token);

    const [clientDetail, setClientDetail] = useState('');
    const handleLogin = (username) => {
        setLocalData('token', username.accessToken)
        setLocalData('user_detail', JSON.stringify(username.userDetails))
        // callClientDetail(username.userDetails)
        setLoggedIn(true);
    };

    const callClientDetail = (username) => {

        GetClientDetailByEmailId(username.email).then((response) => {
            const [detail] = response.data.Items;
            setLocalData('locationId', detail.locationId);
            setLocalData('clientId', detail.sortKey);
            console.log(detail, "detail")
            setClientDetail(detail);

        })
    }
    useEffect(() => {
        if (token) {
            setLoggedIn(true);
            let userDetail = JSON.parse(getLocalData('user_detail'))
            callClientDetail(userDetail)
        } else {
            setLoggedIn(false);
        }

    }, [token])
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path='/account'
                        element={
                            loggedIn ? (
                                <Navigate to='/' />
                            ) : (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Authentication'
                                    clientDetail={clientDetail}
                                    Component={<AuthenticationMain onLogin={handleLogin} />}
                                />
                            )
                        }
                    />
                    {/* Dashboard route */}
                    <Route
                        path='/'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Home'
                                    clientDetail={clientDetail}
                                    Component={<Dashboard clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    {/* Appointment route */}
                    <Route
                        path='/appointment'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    clientDetail={clientDetail}
                                    name='Appointment'
                                    Component={<Appointment clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />

{/* /Explore Schedule/ */}

<Route
                        path='/exploreschedule'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    clientDetail={clientDetail}
                                    name='exploreschedule'
                                    Component={<ExploreServices/>}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
         {/* /Explore Schedule/ */}    

                    <Route
                        path='/appointment'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    clientDetail={clientDetail}
                                    name='Appointment'
                                    Component={<Appointment clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    <Route
                        path='/shop'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Shop'
                                    clientDetail={clientDetail}
                                    Component={<Shop clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    <Route
                        path='/profile'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Profile'
                                    clientDetail={clientDetail}
                                    Component={<Profile clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    <Route
                        path='/achievements'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Achievements'
                                    clientDetail={clientDetail}
                                    Component={<Achievements clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    <Route
                        path='/settings'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Settings'
                                    Component={<Settings clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    {/* Default route */}
                    <Route
                        path='/'
                        element={<Navigate to={loggedIn ? "/" : "/account"} />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;
