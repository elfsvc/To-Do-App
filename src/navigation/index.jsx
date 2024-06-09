import React from 'react'
import UserStack from './UserStack';
import AuthStack from './AuthStack';
import Loader from '../components/shared/Loader';
import { useSelector } from 'react-redux'
import app from '../../fireBaseConfig';



export default function NavigationStack() {
    const { loader } = useSelector((state) => state.general);
    const isLogin = true;

    return (
        <>
            {
                isLogin ? <UserStack /> : <AuthStack />
                // <HomeScreen />
            }
            {
                loader && < Loader loader={loader} />
            }
        </>
    )
}