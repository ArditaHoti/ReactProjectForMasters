import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import Homescreen from "../screens/Homescreen";

const Auth = createNativeStackNavigator();


export default function AuthStack (){
    return(
        <Auth.Navigator>
            <Auth.Screen
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false
                }}
            />
             
             <Auth.Screen
                name = "HomeScreen"
                component = {Homescreen}
                options = {{
                    headerShown: false
                }}
            />
            
        </Auth.Navigator>
    )
}