import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { getUserDetails, getUserFulldata, isUserAuthenticated } from '../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction, signInAction } from '../actions'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


const UserInfo = () => {
    const [userData, setUserSData] = useState({})
    useEffect(() => {

        const dummyFunc = async () => {
            const res = await getUserFulldata()
            setUserSData(res.data)
            console.log(userData)
        }
        dummyFunc()

    }, [])

    return (
        <div className="user-details">
            <h1>Full user details</h1>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default UserInfo