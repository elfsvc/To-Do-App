import { Text, View } from 'react-native'
import React from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { Ionicons } from '@expo/vector-icons';

export default function Dropdown(){
    const countries = ["Egypt", "Canada", "Australia", "Ireland"];
    const [selected, setSelected] = React.useState([]);
    
    return (
        <SelectList 
            boxStyles={{ borderColor: '#cfcfcf' }}
            setSelected={(val) => setSelected(val)} 
            data={countries} 
            arrowicon={<Ionicons name="chevron-expand" size={16} color="#868E96" />}
            save="value"
            onSelect={() => alert(selected)}
            search={false} 
            defaultOption={{ key: '1', value: 'Seçiniz' }}
           
        />
    )
}