import { Text, View, Image } from 'react-native'
import React from 'react'
import CustomTextInput from '../components/shared/TextInput'
import { Button } from 'react-native-elements'
import TextArea from '../components/shared/TextArea'
import Dropdown from '../components/shared/Dropdown'

export default function AddTaskScreen() {
    return(
        <View className='flex-1 m-[10px] p-[10px] rounded-[6px] bg-white items-center'>
            <Image
                    style={{ width: 290, height: 200, alignSelf: 'flex-end' }}
                    className='w-full h-full'
                    source={require('../../assets/images/AddTaskScreen.png')}
                />
            <View className='mt-5 w-full'>
                <CustomTextInput/>
            </View>
            <View className='mt-5 w-full'>
                <Dropdown/>
            </View>
            <View className='mt-5 w-full'>
                <TextArea/>
            </View>

            <View className='w-1/2 mt-5 '>
                <Button title={"Ekle"} />
            </View>
        </View>
    )
}