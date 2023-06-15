import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Button, Avatar, Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// import { consultarUsuario } from '../backend/dados.js';
import { firebaseConfig } from '../backend/autentica.js';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function HomeScreen({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function logar() {
    // Aqui você pode implementar a lógica para cadastrar o usuário
    // console.log(`Email: ${email}, Senha: ${password}`);
    if(email !== '' && password !== '' && email !== null && password !== null){
      // if(consultarUsuario(email, password)){
      //   return navigation.navigate('Lista');
      // }else{
      //   alert("Login ou Senha inválidos!")
      // }
      setErrorEmail('');
      setErrorPassword('');
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // login bem sucedido
        const user = userCredential.user;
        alert("Usuário logado: "+ user.email);
        navigation.navigate('Lista');
      })
      .catch((error) => {
        // erro ao fazer login
        alert("Login ou Senha inválidos!");
      });

    }else{
      // alert('Favor inserir Login e Senha!');
      if(email == ''){
        setErrorEmail('Preencha seu e-mail corretamente');
      }
      if(password == ''){
        setErrorPassword('Preecha sua senha corretamente');
      }

    }
    
  }

  function cadastrar() {
    // Aqui você pode implementar a lógica para cadastrar o usuário
    // console.log(`opa!!!`);
    ()=>navigation.navigate('Cadastro');
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    // Lógica para lidar com o esquecimento da senha
    console.log('Esqueceu a senha?');
  };

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Usuário logado com sucesso:', userInfo);
      // Lógica para lidar com o login com o Google
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Login com o Google cancelado');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Login com o Google em andamento');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Serviços do Google Play indisponíveis ou desatualizados');
      } else {
        console.log('Erro ao fazer login com o Google:', error.message);
      }
    }
  };

  return (

    <View style={styles.container}>

      <Avatar size="xlarge" rounded
        source={{
          uri: "https://ifmr-sa.org/wp-content/uploads/2022/10/Ze-gotinha.png"
        }} style={styles.avatar} />
        
        <Text style={styles.title}> VACCINE APP </Text>

      <Input
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail}
        leftIcon={
          <Icon
            name='envelope'
            size={24}
            color='black'
          />
        }
        onChangeText={(text) => {
          setEmail(text);
          setErrorEmail(null);
        }}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <Input
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaaaaa"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        errorStyle={{ color: 'red' }}
        errorMessage={errorPassword}
        secureTextEntry={!showPassword}
        onChangeText={(text) => {
          setPassword(text);
          setErrorPassword(null);
        }}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        rightIcon={
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            type="feather"
            onPress={toggleShowPassword}
          />
        }
      />
      <TouchableOpacity 
        onPress={handleForgotPassword} 
        style={styles.forgotPasswordContainer}>
        <Text style={styles.forgotPasswordText}>
          Esqueceu a senha?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={logar}>
        <Text style={styles.buttonText}>Entrar </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText} >Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoogleSignIn} style={styles.googleButton}>
        <Icon name="google" size={20} color="red" style={styles.googleIcon} title='Teste' />
        <Text style={styles.googleButtonText}>Entrar com Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#497e99',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#f2f2f2',
    margin: 10,
    padding: 8,
    color: '#000000',
    borderRadius: 14,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#1c313a',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#1c313a',
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    //marginTop: 10,
    paddingRight: 40,
    //padding: 20,
  },
  forgotPasswordText: {
    color: '#1c313a',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  googleButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 10,
    borderRadius: 14,
    width: '80%',
    alignItems: 'center',
  },
  googleButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  googleIcon: {
    marginRight: 10,
  },
});

export default HomeScreen;