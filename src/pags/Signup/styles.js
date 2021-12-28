import styled from 'styled-components/native';



export const Background = styled.View`
    flex: 1;
    background-color: #ff8f2e;
`;
export const Conteiner = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const AreaInput = styled.View`
    align-items: center;
    justify-content: center;
    width: 100%;
`;
export const Logo = styled.Image`
    margin-left: 40px;
    margin-right: 40px;
    width: 180px;
    max-height: 160px;
    //background-color: white;
    //background: rgba(0,0,0,0.20);
    padding-bottom: 30px;
    margin-bottom: 30px;
    //border-radius: 100px;
    border-radius: 20px;
    //border-width: 1px;
`;
export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.80)'
})`
    background: rgba(0,0,0,0.20);
    width: 90%;
    font-size: 17px;
    color: #FFF;
    margin-Bottom: 15px;
    padding: 10px;
    border-radius: 7px;
    
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 20px;
    color: white;
    font-weight: bold;

`;

export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
    align-items: center;
    justify-content: center;
`;

export const LinkText = styled.Text`
    color: #0c53ed;
    padding-top: 20px;
    font-size: 15px;
`;











