import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, {useState} from "react";
import { MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';


export default function ListItem({ detail = false }) {

    const [isChecked, setChecked] = useState(false);
    const handleCheckbox= ()=> setChecked(!isChecked)

    return (
        <View classname={`border-[2px] border-white ${isChecked && 'border-main'} bg-white rounded-[6px]  mt-[10px] px-[10px] py-[10px]`}>
            <TouchableOpacity onPress={handleCheckbox} classname='flex-row justify-between items-center'>
            <View classname='flex-row gap-5 items-center'>
                <View>
                    <MaterialIcons name="directions-run" size={25} color="#3B5BDB" />
                </View>
                <View>
                    <Text classname='text-primary text-[13px]'>Akşam Yürüyüşü</Text>
                    <Text classname={`mt-[3px] text-secondary text-[11px] ${isChecked && 'line-through'}`}>Akşam 19.00'da yürüyüş yapılacak</Text>
                </View>
            </View>
            <View>
                <Checkbox
                style={{ borderColor: '#cfcfcf' }}
                    classname='rounded-[3px]'
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked && '#3B5BDB'}
                />
            </View>
        </TouchableOpacity>
        {
            detail &&
            <View classname='mt-[10px] border-t-[1px] border-border pt-[10px] flex-row justify-between'>
                <Pressable classname='flex-row items-center gap-[5px]' onPress={() => { console.log('selam') }}>
                    <Ionicons name="information-circle" size={16} color="#343A40" />
                    <Text classname='text-primary text-[13px]'>Detay</Text>
                </Pressable>
                <Pressable classname='flex-row items-center gap-[5px]' onPress={() => { console.log('selam') }}>
                <MaterialCommunityIcons name="delete-empty" size={16} color="#343A40" />
                    <Text classname='text-secondary text-[13px]'>Sil</Text>
                </Pressable>
            </View>
        }
        </View>
        
    )
}

const styles = StyleSheet.create({})
        