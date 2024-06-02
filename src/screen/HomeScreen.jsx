import React from 'react' //6.9k (gzipped: 2.7k)
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/home/Header';
import List from '../components/home/List';

export default function HomeScreen() {
    return (
     <SafeAreaView className='flex-1'>
         <Header />
         <List />
     </SafeAreaView>

     )
     }