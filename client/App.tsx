import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/componets/homepage/Homepage'
import CreatePost from "./src/componets/post/createPost/CreatePost";
import ProfilePage from "./src/componets/profile/profilePage/ProfilePage";
import ProfileEditing from "./src/componets/profile/profileEditing/ProfileEditing";
import Login from "./src/componets/auth/login/Login";
import SingUp from "./src/componets/auth/singUp/SingUp";

export type StackParamList = {
    Login: undefined;
    SingUp: undefined;
    Homepage: undefined;
    CreatePost: undefined;
    ProfilePage: undefined;
    ProfileEditing: undefined
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name='SingUp'
                    component={SingUp}
                    options={{ title: 'Sing up' }}
                />
                <Stack.Screen
                    name='Homepage'
                    component={Homepage}
                    options={{ title: 'Instagram' }}
                />
                <Stack.Screen
                    name='CreatePost'
                    component={CreatePost}
                />
                <Stack.Screen
                    name='ProfilePage'
                    component={ProfilePage}
                    options={{
                        title: 'Profile',
                        presentation: 'transparentModal'

                    }}
                />
                <Stack.Screen
                    name='ProfileEditing'
                    component={ProfileEditing}
                    options={{
                        title: 'Edit',
                        presentation: 'transparentModal'

                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
