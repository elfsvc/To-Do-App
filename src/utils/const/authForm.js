import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export const loginForm = [
    {
        id: 1,
        title: "E-mail",
        type: 'email',
        icon : <Feather name="mail" size={20} color="black" />
    },
    {
        id: 2,
        title: "Şifre",
        type: 'password',
        icon : <Ionicons name="key-outline" size={20} color="black" />,
        isSecure: true,
        secureIcon: {
            visible: <Feather name="eye" size={20} color="black" />,
            notVisible: <Feather name="eye-off" size={20} color="black" />
        },
        
    }
];


export const registerForm = [
    
    {
        id: 1,
        title: "E-mail",
        type: 'email',
        icon : <Feather name="mail" size={20} color="black" />,
    },
    {
        id: 2,
        title: "Şifre",
        type: 'password',
        icon : <Ionicons name="key-outline" size={20} color="black" />,
        isSecure: true,
        SecureIcon: <Feather name="eye" size={20} color="black" />
    },
    {
        id: 3,
        title: "Şifre Tekrar",
        type: 'rpassword',
        icon : <Ionicons name="key-outline" size={20} color="black" />,
        isSecure: true,
        SecureIcon: <Feather name="eye" size={20} color="black" />
    }
];
    