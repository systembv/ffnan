import React, { useContext } from 'react';
import { View, Text, Button  } from 'react-native';

import { AuthContext } from '../../contexts/auth'

export default function Home() {

const { user, signOut } = useContext(AuthContext);

 return (
   <View>
       <Text>
           Bem Vindo {user && user.nome}!!
       </Text>
       <Text>
           Seu email é {user && user.email}!!
       </Text>
       <Button
       title="Sair da conta"
       onPress={()=> signOut()}
       />
    </View>
  );
}

