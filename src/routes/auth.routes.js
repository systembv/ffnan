import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from '../pags/Signin';
import Signup from '../pags/Signup';



const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name="Signin"  
            component={Signin}
            options={{ headerShown: false, title: 'teste'}}
            />
            <AuthStack.Screen 
            name="Signup"  
            component={Signup}
            options={{ headerShown: false, title: 'teste'}}
            />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;