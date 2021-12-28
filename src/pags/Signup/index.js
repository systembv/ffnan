import React, {useState, useContext} from 'react';
import { View, Text, Platform } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';

import { Background, Conteiner, AreaInput, Logo, Input, SubmitButton, 
    SubmitText, Link, LinkText } from './styles';



export default function Signup() {
    const navigation = useNavigation();


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const { signUp } = useContext(AuthContext);


    function handleSignup(){
        signUp( email, senha, nome);
    };


 return (
    <Background>
        <Conteiner
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enable
        >
            <Logo source={require('../../assets/zaca6.png')}/>

            <AreaInput>
            <Input
                placeholder="Nome"
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={(text) => setNome(text)}
            />


            <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Input
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            value={senha}
            onChangeText={(text) => setSenha(text)}
            />

            <SubmitButton onPress={handleSignup}>
                <SubmitText>
                    CADASTRAR
                </SubmitText>
            </SubmitButton>

            <Link onPress={()=> navigation.navigate('Signin')}>
                <LinkText>Fazer LogIn!</LinkText>
            </Link>
            
            </AreaInput>

        </Conteiner>
    </Background>
  );
}