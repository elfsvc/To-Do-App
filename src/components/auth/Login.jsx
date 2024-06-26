import { View, Image, Text, Button, TouchableOpacity, FlatList } from 'react-native'
import React, {useEffect, useReducer} from 'react'
import Input from '../shared/Input'
import { loginForm } from '../../utils/const/authForm'
import { setLoader, setErrorMessage } from '../../redux/generalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { inputReducer } from '../../reducer/inputReducer';
import { loginWithEmailAndPassword } from '../../auth';
import { errorMessages } from '../../utils/errorHandling';
import ErrorInfo from '../messageHandling/ErrorInfo';

export default function Login({ navigation }){
    const reduxDispatch = useDispatch();


    const {errorMessage} = useSelector((state) => state.general);
    const initialState = {
        email: '',
        password: '',
       
    }

    const [state, dispatch] = useReducer(inputReducer, initialState);

    const loginApp = async () => {
        try{
            reduxDispatch(setLoader());
         const userData = await loginWithEmailAndPassword(state.email, state.password);
         console.log("User Data: ", userData)
        } catch (error) {
            reduxDispatch(setErrorMessage(errorMessages(error.code)));

        }   
    }

    useEffect(() => {
        if(errorMessage.statusCode) {
            setTimeout(() => {
                reduxDispatch(setErrorMessage({statusCode: false, message: ''}));
            }, 3000);
        }
    }, [errorMessage.statusCode])
    
   
    return (
        <View className='bg-white flex-1 items-center justify-center px-5'>
            <View>
            <Image
            source={require('../../../assets/images/auth-logo.png')}
            style={{ width: 350, height: 350 }}
        />

        </View>
         
         <View className='w-full'>
            <FlatList
                data={loginForm}
                renderItem={({ item }) => (
            
                <View className='mt-5 w-full'>
                <Input item={item} dispatch={dispatch} state={state} /> 

         </View>  
         )}
         keyExtractor={item => item.id}
      />
         </View>

         <TouchableOpacity onPress={loginApp} className='w-full mt-5'>
            <Button title={'Giriş Yap'} />
         </TouchableOpacity>

         <View className='w-full mt-5 flex-row'>
            <Text className='text-primary'>Hesabınız yok mu? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text className='font-[600] ml-[7px] text-primary underline'>Kayıt Olun</Text>
            </TouchableOpacity>
         </View>


         {
            errorMessage.statusCode && <ErrorInfo message={errorMessage.message}/>
         }
        </View>
    )
}

