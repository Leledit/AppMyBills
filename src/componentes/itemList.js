import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonCustom from './button.js';
import {useNavigation} from '@react-navigation/native';
export default function ItemList(props) {
  const navigate = useNavigation();
  function passarDadosDetalhes() {
    navigate.navigate(props.urlbtn, {...props});
  }
  return (
    <View style={styles.itemList}>
      <View
        style={[
          styles.itemListInfos,
          {justifyContent: 'flex-start', marginLeft: 30},
        ]}>
        <Text>
          <Text style={styles.itenListaInfoLabel}>Descrição: </Text>
          {props.informacoes.descricao}
        </Text>
      </View>
      <View style={[styles.itemListInfos, {marginBottom: 20}]}>
        <Text>
          <Text style={styles.itenListaInfoLabel}>Valor: </Text>
          {props.informacoes.valor}
        </Text>
        <Text>
          <Text style={styles.itenListaInfoLabel}>Data: </Text>25/01/2022
        </Text>
      </View>
      {props.btnVisible && (
        <ButtonCustom
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Detalhes'}
          style={styles.btnDetalhes}
          btnonPress={() => {
            passarDadosDetalhes();
          }}
        />
      )}
      <View style={styles.bordaEntreItens}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemList: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  itemListInfos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 14,
    fontSize: 18,
  },
  itenListaInfoLabel: {
    fontSize: 19,
    color: '#FFC311',
  },
  bordaEntreItens: {
    borderWidth: 0.2,
    borderColor: 'rgba(0,0,0,0.1)',
    width: '80%',
    marginLeft: '10%',
  },
});
