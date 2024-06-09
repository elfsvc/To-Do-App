import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyB0IFkzQgDw7LGwiDMi3vWbJswtcHYiKmM",
  authDomain: "todoapp-5a749.firebaseapp.com",
  projectId: "todoapp-5a749",
  storageBucket: "todoapp-5a749.appspot.com",
  messagingSenderId: "480519388063",
  appId: "1:480519388063:web:b63142c0b3a5e40ffb9baa"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default app;