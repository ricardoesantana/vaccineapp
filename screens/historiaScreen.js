import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
/*import {reactscroll} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";*/
import { Button, Avatar, Input, Overlay } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

function HistoriaScreen({ route, navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>História das Vacinas</Text>
      <Image
        style={styles.avatar}
        source={{uri: 'https://s2.glbimg.com/3Q5hkztBR6St-JFN52_1Q-DkGvs=/e.glbimg.com/og/ed/f/original/2021/05/13/qqed_82_historia_da_vacina_site_capa.jpg'}}
      />
      <Text style={styles.title2}>Introdução</Text>
      <Text style={{ color: 'white', textAlign: 'center', }}>
      {`Era uma vez uma doença antiga chamada varíola, que assolou a humanidade por séculos, causando mortes e deixando marcas físicas e sociais. As pessoas lutavam para encontrar maneiras de controlar essa doença mortal e melhorar suas condições de vida.

      Em um lugar distante, na China, no século X, os médicos já praticavam uma forma de prevenção contra a varíola, usando pó das feridas dos doentes e soprando-o nas narinas das pessoas em busca de proteção. Os turcos também faziam algo parecido, usando veneno de varíola humana para imunizar. No entanto, esses métodos eram arriscados e não tinham o apoio da sociedade.

      Em meio ao medo da doença, surgiu um herói improvável chamado Edward Jenner. Ele observou que pessoas que ordenhavam vacas não pegavam varíola humana, mas uma doença semelhante chamada vacínia. Inspirado por essa descoberta, Jenner criou a primeira vacina antivariólica usando a vacínia das vacas.`}
  </Text>
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


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#497e99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
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
});

export default HistoriaScreen;