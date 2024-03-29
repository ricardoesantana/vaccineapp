import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
=======
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
/*import {reactscroll} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";*/
>>>>>>> ea3d31a2b5120b357f81e4dc40ff4137400051f0
import { Button, Avatar, Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function UnidadesScreen({ route, navigation }) {

<<<<<<< HEAD
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (route.params) {
      
      const { name = '', avatar = '', id = '' } = route.params;
      
      setNome(name);
      setAvatar(avatar);
      setId(id);
    }
  }, []);

  return (

    <View style={styles.container}>
        
      <Text style={styles.title}> Unidades de Saúde </Text>

      <Avatar size="xlarge" rounded
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZZ7KTb_bocTUTck4oAIUghCvFNhLBiLd9A&usqp=CAU"
        }} style={styles.avatar}
        onPress={()=>navigation.navigate('Home')} />
    {/* <Text style={styles.title2}> Histórico de Vacinação </Text> */}

      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Inicial')}>
        <Text style={styles.buttonText} > VOLTAR </Text>
      </TouchableOpacity>

    </View>
  );
=======
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unidades de Saúde</Text>
      <Image
        style={styles.avatar}
        source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZZ7KTb_bocTUTck4oAIUghCvFNhLBiLd9A&usqp=CAU'}}
      />
 
  <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Inicial')}>
          <Text style={styles.buttonText} > VOLTAR </Text>
        </TouchableOpacity>
</View>

 );  
     
return (
    <View style={styles.container}>
      <Text style={styles.title}>História das Vacinas</Text>
      <Image
        style={styles.avatar}
        source={{uri: 'https://s2.glbimg.com/3Q5hkztBR6St-JFN52_1Q-DkGvs=/e.glbimg.com/og/ed/f/original/2021/05/13/qqed_82_historia_da_vacina_site_capa.jpg'}}
      />
      <Text style={styles.title2}>Introdução</Text>
      <Text style={{ color: 'white', textAlign: 'center', }}>
      {`Claro, sua ideia enfrentou resistência e zombaria, mas com o tempo, a vacinação ganhou força e se espalhou por diferentes países, salvando milhares de vidas. Houve protestos e objeções, alguns até acreditavam que a vacina faria as pessoas parecerem vacas, mas a verdade prevaleceu.

      Com o passar dos anos, a vacinação antivariólica tornou-se gratuita para todos, reduzindo o impacto da doença e trazendo mais saúde e igualdade para a sociedade. As pessoas finalmente perceberam que a vacinação era uma ferramenta poderosa na luta contra doenças.

      E assim, a varíola foi derrotada, graças à coragem e perseverança de Edward Jenner e à vontade das pessoas de aceitar a ciência e a prevenção. A vacinação tornou-se uma estratégia governamental em muitos países, ajudando a erradicar a varíola em todo o mundo.`}
  </Text>
</View>
 ); 
      return (
        <View style={styles.container}>
          <Text style={styles.title}>História das Vacinas</Text>
          <Image
            style={styles.avatar}
            source={{uri: 'https://s2.glbimg.com/3Q5hkztBR6St-JFN52_1Q-DkGvs=/e.glbimg.com/og/ed/f/original/2021/05/13/qqed_82_historia_da_vacina_site_capa.jpg'}}
          />
          <Text style={styles.title2}>Introdução</Text>
          <Text style={{ color: 'white', textAlign: 'center', }}>
          {`E assim termina essa história sobre as vacinas, um caminho histórico que nos mostrou que a ciência, mesmo enfrentando desafios, pode trazer esperança e saúde para todos. Vamos lembrar sempre da importância das vacinas e continuar a lutar contra as doenças juntos! 
      </Text>
      <Text style={{ color: 'white', textAlign: 'right', }}>Fim!`}
      </Text>
      {/* Mais conteúdo histórico aqui */}
    </View>
  );


>>>>>>> ea3d31a2b5120b357f81e4dc40ff4137400051f0
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#497e99',
<<<<<<< HEAD
    alignItems: 'flex-start',
=======
    alignItems: 'center',
>>>>>>> ea3d31a2b5120b357f81e4dc40ff4137400051f0
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
<<<<<<< HEAD
    // marginBottom: 24,
    // marginLeft: 24,
    // padding: (5,5,0,20),
=======
>>>>>>> ea3d31a2b5120b357f81e4dc40ff4137400051f0
    color: 'white',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
<<<<<<< HEAD
    padding: (5,5,0,20),
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
=======
    padding: 5,
    color: 'white',
  },
  avatar: {
    width: 300,
    height: 200,
    borderRadius: 175,
    borderWidth: 3,
    borderColor: '#1c313a',
    margin: 2,
>>>>>>> ea3d31a2b5120b357f81e4dc40ff4137400051f0
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
<<<<<<< HEAD
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#1c313a',
    margin: (0,0,0,20),
  },
=======
>>>>>>> ea3d31a2b5120b357f81e4dc40ff4137400051f0
});

export default UnidadesScreen;