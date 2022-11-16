import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonCustom from '../../componentes/button.js';
import {useNavigation} from '@react-navigation/native';

export default function Receitas() {
  //configuraçoes de rota
  const navigate = useNavigation();
  function cadastrarReceita() {
    navigate.navigate('cadastroReceita');
  }
  return (
    <View>
      <View style={styles.receitaCabecalho}>
        <Text style={styles.receitaCabecalhoTitulo}>Suas receitas</Text>
        <TouchableOpacity onPress={cadastrarReceita}>
          <Icon
            size={36}
            color="rgba(100, 255, 104,0.5 )'"
            name="plus-circle"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.receitasItens}>
        <Text style={styles.receitasItensNoReceitas}>
          Nenhuma receita foi encontrada!!
        </Text>
        <View style={styles.receitasIten}>
          <View style={styles.receitasItenInfos}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
              asdasdasdasdasdsdas
            </Text>
          </View>
          <View style={[styles.receitasItenInfos, {marginBottom: 0}]}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
            </Text>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Data: </Text>{' '}
              25/01/2022
            </Text>
          </View>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'detalhesReceita'}
            textBotao={'Detalhes'}
            style={styles.btnDetalhes}
          />
        </View>
        <View style={styles.receitasIten}>
          <View style={styles.receitasItenInfos}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
              asdasdasdasdasdsdas
            </Text>
          </View>
          <View style={[styles.receitasItenInfos, {marginBottom: 0}]}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
            </Text>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Data: </Text>{' '}
              25/01/2022
            </Text>
          </View>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'detalhesReceita'}
            textBotao={'Detales'}
            style={styles.btnDetalhes}
          />
        </View>
        <View style={styles.receitasIten}>
          <View style={styles.receitasItenInfos}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
              asdasdasdasdasdsdas
            </Text>
          </View>
          <View style={[styles.receitasItenInfos, {marginBottom: 0}]}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
            </Text>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Data: </Text>{' '}
              25/01/2022
            </Text>
          </View>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'detalhesReceita'}
            textBotao={'Detales'}
            style={styles.btnDetalhes}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerReceitas: {
    flex: 1,
  },
  receitaCabecalho: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: '10%',
    paddingBottom: 15,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  receitaCabecalhoTitulo: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.4)',
    marginTop: 5,
  },
  receitasItens: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 30,
  },
  receitasItensNoReceitas: {
    color: '#FFC311',
    fontSize: 18,
    textAlign: 'center',
    display: 'none',
  },
  receitasIten: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  receitasItenInfos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 14,
    fontSize: 18,
  },
  receitasItenInfoLabel: {
    fontSize: 19,
    color: '#FFC311',
  },
});
