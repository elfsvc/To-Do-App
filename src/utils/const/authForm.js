import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const loginForm = [
    {
        id: 1,
        title: "E-mail",
        icon : <Feather name="mail" size={20} color="black" />
    },
    {
        id: 2,
        title: "Şifre",
        icon : <Ionicons name="key-outline" size={20} color="black" />,
        isSecure: true,
        SecureIcon: {
            visible: <Feather name="eye" size={20} color="black" />,
            notVisible: <Feather name="eye-off" size={20} color="black" />
        },
        
    }
];


export const registerForm = [
    {
        id: 1,
        title: "Ad",
        icon : <AntDesign name="user" size={20} color="black" />,
    },
    {
        id: 2,
        title: "Soyad",
        icon : <AntDesign name="user" size={20} color="black" />,
    },
    {
        id: 3,
        title: "E-mail",
        icon : <Feather name="mail" size={20} color="black" />,
    },
    {
        id: 4,
        title: "Şifre",
        icon : <Ionicons name="key-outline" size={20} color="black" />,
        isSecure: true,
        SecureIcon: <Feather name="eye" size={20} color="black" />
    },
    {
        id: 5,
        title: "Şifre Tekrar",
        icon : <Ionicons name="key-outline" size={20} color="black" />,
        isSecure: true,
        SecureIcon: <Feather name="eye" size={20} color="black" />
    }
];
    