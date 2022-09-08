import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        cookies.remove('token')
        navigate('/')
    }, [])
    return (
        <div>Logout</div>
    )
}

export default Logout