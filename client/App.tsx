import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/componets/homepage/Homepage'
import CreatePost from "./src/componets/post/createPost/CreatePost";
import ProfilePage from "./src/componets/profile/profilePage/ProfilePage";
import ProfileEditing from "./src/componets/profile/profileEditing/ProfileEditing";

export type StackParamList = {
    Homepage: undefined;
    CreatePost: undefined;
    ProfilePage: undefined;
    ProfileEditing: undefined
    // Country: {
    //     countryName: string,
    //     countryFlag: string
    // };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
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
                />
                <Stack.Screen
                    name='ProfileEditing'
                    component={ProfileEditing}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
