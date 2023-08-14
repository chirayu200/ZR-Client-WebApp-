import "./assets/fonts/fonts.css";
import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";

import { BrowserRouter as Router, Navigate, Route, Routes, } from "react-router-dom";
import { GetClientDetailByEmailId } from "./Services/APIs";

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
const Settings = withSuspense(lazy(() => import("./pages/Settings")));

const Profile = withSuspense(lazy(() => import("./pages/Profile/Profile")));
const ProfilePartners = withSuspense(lazy(() => import("./pages/Profile/ProfilePartners")));
const YourTeam = withSuspense(lazy(() => import("./pages/Profile/YourTeam")));
const AddUser = withSuspense(lazy(() => import("./pages/Profile/AddUser")));

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
    let token = localStorage.getItem('token');
    const [loggedIn, setLoggedIn] = useState(!!token);

    const [clientDetail, setClientDetail] = useState('');
    const handleLogin = (username) => {
        console.log(username);
        localStorage.setItem('token', username.accessToken);
        localStorage.setItem('user_detail', JSON.stringify(username.userDetails));
        callClientDetail(username.userDetails)
        setLoggedIn(true);
    };

    const callClientDetail = (username) => {

        GetClientDetailByEmailId(username.email).then((response) => {
            const [detail] = response.data.Items;
            setClientDetail(detail);

        })
    }
    useEffect(() => {
        if (token) {
            setLoggedIn(true);
            let userDetail = JSON.parse(localStorage.getItem('user_detail'))
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
                                    Component={<Profile clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    <Route
                        path='/Settings'
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
                    {/* Profile partner*/}
                    <Route
                        path='profile/profile-partner'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='Profilepartner'
                                    Component={<ProfilePartners clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    {/* Your team */}
                    <Route
                        path='profile/profile-partner/your-team'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='YourTeam'
                                    Component={<YourTeam clientDetail={clientDetail} />}
                                />
                            ) : (
                                <Navigate to='/account' />
                            )
                        }
                    />
                    {/* Add New User */}
                    <Route
                        path='profile/add-user'
                        element={
                            loggedIn ? (
                                <Layout
                                    loggedIn={loggedIn}
                                    name='AddUser'
                                    Component={<AddUser clientDetail={clientDetail} />}
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