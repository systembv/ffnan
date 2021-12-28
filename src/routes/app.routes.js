import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../pags/Home';


const AppDrawer = createStackNavigator ();

function AppRoutes(){
    return(
        <AppDrawer.Navigator>
            <AppDrawer.Screen name="Home"  component={Home}/>
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;



