import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonCustom from '../../componentes/button.js';

export default function Apresentacao() {
  //configuraçoes de rota
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerApresentacao}>
        <Image
          style={styles.img}
          source={require('../../../assets/img/apresentacaoArt.jpg')}
        />
        <Text style={styles.title}>Problemas com as contas?</Text>
        <Text style={styles.text}>
          com o My Bills é facil gerenciar todas as sua contas, sendo elas
          decorrentes, ou ate mesmos as pacelas, gostou dessa ideia? entao click
          no botao "Confira" para acessar o app
        </Text>
        <ButtonCustom
          btnAcao={'redirect'}
          btnUrl={'credenciais'}
          textBotao={'Confira'}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerApresentacao: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 300,
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.4)',
  },
  btnArea: {
    marginTop: 30,
  },
});
