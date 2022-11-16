/* eslint-disable no-dupe-keys */
import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ButtonCustom from '../../componentes/button.js';

export default function Credenciais() {
  //configuraçoes de rota
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerCredenciais}>
        <Text style={styles.titulo}>Bem vindo ao My Bills</Text>
        <Image
          style={styles.imagem}
          source={require('../../../assets/img/credenciais.jpg')}
        />
        <Text style={styles.mensagem}>
          Para usar o app My Bills é necessario ter uma conta, voce possui uma ?
          caso nao tenha é facil criar uma
        </Text>
        <View style={styles.areaBtn}>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'cadastreSe'}
            textBotao={'Criar conta'}
          />
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'login'}
            textBotao={'Login'}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCredenciais: {
    margin: 50,
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: '100%',
    height: 300,
  },
  mensagem: {
    marginTop: 5,
    fontSize: 16,
    color: 'rgba(0,0,0,0.4)',
  },
});
