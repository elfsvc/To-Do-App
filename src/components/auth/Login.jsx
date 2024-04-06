import { View, Image, Text, Button, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Input from '../shared/Input'
import { loginForm } from '../../utils/const/authForm'

export default function Register(){
    return (
        <View className='bg-white flex-1 items-center justify-center px-5'>
         <View>
             <Image     
                source={require('../../../assets/images/auth-logo.png')}
                
            />
        </View>
         
         <View className='w-full'>
         <FlatList
         data={loginForm}
         renderItem={({ item }) => (
            <View className='mt-5 w-full'>
            <Input title={item.title} icon = {item.icon} /> 

         </View>  
         )}
         keyExtractor={item => item.id}
      />
         </View>

         <View className='w-full mt-5'>
            <Button title={'Giriş Yap'} />
         </View>

         <View className='w-full mt-5 flex-row'>
            <Text className='text-primary'>Hesabınız yok mu? </Text>
            <TouchableOpacity onPress={() => NavigationPreloadManager.navigate('Register')}>
                <Text className='font-[600] ml-[7px] text-primary underline'>Kayıt Olun</Text>
            </TouchableOpacity>
         </View>

        </View>
    )
}
