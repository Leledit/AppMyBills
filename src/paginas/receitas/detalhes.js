import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ButtonCustom from '../../componentes/button.js';
export default function DetalhesReceita(){
  return (
    <View style={styles.detalhesReceitas}>
      <View style={styles.detalhesReceita}>
        <Text style={styles.headerDetalhes}>Detalhes da receita</Text>
      </View>
      <View style={styles.detalhesReceita}>
        <Text style={styles.receitasItenInfo}>
          <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
          asdasdasdasdasdsdas
        </Text>
        <Text style={styles.receitasItenInfo}>
          <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
        </Text>
        <Text style={styles.receitasItenInfo}>
          <Text style={styles.receitasItenInfoLabel}>Data: </Text> 25/01/2022
        </Text>
      </View>
      <View style={styles.detalhesReceita}>
        <Text style={styles.receitasAcoes}>Açoes</Text>
        <ButtonCustom 
          btnAcao={'redirect'}
          btnUrl={'detalhesReceita'}
          textBotao={'Excluir'}
          style={styles.btnDetalhes}
        />
        <ButtonCustom 
          btnAcao={'redirect'}
          btnUrl={'detalhesReceita'}
          textBotao={'Editar'}
          style={styles.btnDetalhes}
        />
      </View>
    </View>
  );
} 

const styles = StyleSheet.create({
  detalhesReceitas:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerDetalhes: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
  },
  detalhesReceita: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding:15,
    width: '92%',
    marginLeft: '4%',
    marginBottom: 20,
  },
  receitasItenInfoLabel: {
    fontSize: 19,
    color: '#FFC311',
  },
  receitasItenInfo: {
    fontSize: 18,
    marginBottom: 14,
  },
  receitasAcoes: {
    marginLeft:10,
    marginTop: 10,
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
  },
});