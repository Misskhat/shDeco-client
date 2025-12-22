import React, { useEffect } from 'react';
import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';

const axiosInstance = axios.create({
    baseURL: "https://sh-deco-server.vercel.app"
})

const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        const requestIntercepter = axiosInstance.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${user.accessToken}`
            return config
        })

        const responseIntercepter = axiosInstance.interceptors.response.use((response) => {
            return response
        },
            (error) => {
                if (error.response.status === 401 || error.response.status === 403) {
                    logOutUser().then(() => {
                        navigate('/login')
                    })
                }
                return Promise.reject(error)
            })

        return () => {
            axiosInstance.interceptors.request.eject(requestIntercepter)
            axiosInstance.interceptors.response.eject(responseIntercepter)
        }
    }, [user, logOutUser, navigate])
    return axiosInstance;
};

export default useAxiosSecure;