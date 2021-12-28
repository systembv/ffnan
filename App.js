//import 'react-native-gesture-handler';
import React, {useState} from 'react';
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StatusBar } from 'react-native';
import firebase from './src/services/firebaseConnection';
import AuthProvider from './src/contexts/auth';


import Routes from './src/routes';

import { LogBox } from 'react-native';
//LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();


export default function App() {
 return (
   <NavigationContainer>
     <AuthProvider>
          <StatusBar backgroundColor="#131313" barStyle="light-content"/>
          <Routes/>
      </AuthProvider>
  </NavigationContainer>
  );
}



// import React from 'react';
// import { View, Text } from 'react-native';

// export default function App() {
// 	return (
// 		<View>
// 			<Text>HELLO WORLD!2</Text>
// 		</View>
// 	);
// }



