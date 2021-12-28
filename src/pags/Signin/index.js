import React, {useState, useContext} from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { Background, Conteiner, AreaInput, Logo, Input, SubmitButton, 
    SubmitText, Link, LinkText } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth'


export default function Signin() {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaOculta, setSenhaOculta] = useState('');
    
    const { signIn } = useContext(AuthContext);

    function handleLogin(){
        signIn(email, senha, limparCampos);
    };

    function limparCampos(){
        setSenha('')
        setEmail('')
    };

    function ocultarSenha(text){
        setSenha(text)
        setSenhaOculta(text)
        //if(isNaN(text) ? setSenhaOculta(text.substring(0, text.length - 1) + '*') : setSenhaOculta(text));
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
            value={senhaOculta}
            onChangeText={(text) => ocultarSenha(text)}
            />

            <SubmitButton onPress={handleLogin}>
                <SubmitText>
                    ENTRAR
                </SubmitText>
            </SubmitButton>

            <Link onPress={()=> navigation.navigate('Signup')}>
                <LinkText>Criar uma conta!</LinkText>
            </Link>
            
            </AreaInput>

        </Conteiner>
    </Background>
  );
}