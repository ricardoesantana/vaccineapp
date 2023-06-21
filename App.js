import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PreHomeScreen from './screens/preHomeScreen';
import HomeScreen from './screens/homeScreen';
import CadastroScreen from './screens/cadastroScreen';
import ListaScreen from './screens/listaScreen';
import CadastroContatoScreen from './screens/cadastroContatoScreen';
import AlterarContatoScreen from './screens/alterarContatoScreen';
import InicialScreen from './screens/inicialScreen';
import HistVacScreen from './screens/histVacScreen';
import UnidadesScreen from './screens/unidadesScreen';
// import AuthContextProvider from './contexts/AuthContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    // <AuthContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="PreHome" component={PreHomeScreen} options={{headerShown:false, title: 'Primeira Tela do APP'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false, title: 'Tela de Login'}} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown:false, title: 'Cadastro de Usuário'}} />
        <Stack.Screen name="Lista" component={ListaScreen} options={{headerShown:false, title: 'Lista de Contatos'}} />
        <Stack.Screen name="Contato" component={CadastroContatoScreen} options={{headerShown:false, title: 'Cadastro de Contatos'}} />
        <Stack.Screen name="AlterarContato" component={AlterarContatoScreen} options={{headerShown:false, title: 'Alteração de Contatos'}} />
        <Stack.Screen name="Inicial" component={InicialScreen} options={{headerShown:false, title: 'Tela Inicial'}} />
        <Stack.Screen name="HistVac" component={HistVacScreen} options={{headerShown:false, title: 'Tela Inicial'}} />
        <Stack.Screen name="Unidades" component={UnidadesScreen} options={{headerShown:false, title: 'Tela Inicial'}} />
      </Stack.Navigator>
    </NavigationContainer>
    // </AuthContextProvider>
  );
}

export default App;