import React, { useState } from 'react' //6.9k (gzipped: 2.7k)
import Header from '../components/home/Header';
import List from '../components/home/List';
import PremiumBanner from '../components/shared/PremiumBanner';
import { SafeAreaView } from 'react-native-safe-area-context';
import Completed from '../components/home/Completed';
import { ScrollView, Text } from 'react-native';
import Notification from '../components/home/Notification';
// import Modal from '../components/shared/Modal';

export default function HomeScreen() {
   const [modalVisible, setModalVisible] = useState(false);
   return (
      <SafeAreaView className='flex-1'>
         <ScrollView showsVerticalScrollIndicator={false}>
            <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <List />
            <PremiumBanner />
            <Completed />
         </ScrollView>

         {/* <Modal setModalVisible={setModalVisible} modalVisible={modalVisible} animation={'fade'}>
            <Notification setModalVisible={setModalVisible} />
         </Modal> */}


      </SafeAreaView>

   )
}