import { Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import Input from '../shared/Input';
import { Button } from 'react-native';
import { registerForm } from '../../utils/const/authForm';

export default function Register({ navigation }){
    return (
        <View className='bg-white flex-1 items-center justify-center px-5'>
         <View>
             <Image     
                source={require('../../../assets/images/auth-logo.png')}
                
            />
        </View>

         
         <View className='w-full'>
         <FlatList
         data={registerForm}
         renderItem={({ item }) =>  (

            <View className='mt-5 w-full'>
            <Input title={item.title} icon = {item.icon} /> 
         </View>

         )}

         keyExtractor={item => item.id}
      />
         </View>

         <View className='w-full mt-5'>
            <Button title={'Kayıt Ol'} />
         </View>

         <View className='w-full mt-5 flex-row'>
            <Text className='text-primary'>Hesabınız var mı? </Text>
            <TouchableOpacity onPress={() => NavigationPreloadManager.navigate('Login')}>
                <Text className='font-[600] ml-[7px] text-primary underline'>Giriş Yap</Text>
            </TouchableOpacity>
         </View>

        </View>
    )
}