import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ButtonCustom from '../../componentes/button.js';
export default function DetalhesDespesa() {
  const route = useRoute();
  console.log(route.params.informacoes);
  return (
    <View style={styles.detalhesDespesas}>
      <View style={styles.detalhesDespesa}>
        <Text style={styles.headerDetalhes}>Detalhes da Despesa</Text>
      </View>
      <View style={styles.detalhesDespesa}>
        <Text style={styles.despesaItenInfo}>
          <Text style={styles.despesaItenInfoLabel}>Descrição: </Text>{' '}
          asdasdasdasdasdsdas
        </Text>
        <Text style={styles.despesaItenInfo}>
          <Text style={styles.despesaItenInfoLabel}>Valor: </Text> 25.50
        </Text>
        <Text style={styles.despesaItenInfo}>
          <Text style={styles.despesaItenInfoLabel}>Data: </Text> 25/01/2022
        </Text>
      </View>
      <View style={styles.detalhesDespesa}>
        <Text style={styles.receitasAcoes}>Açoes</Text>
        <ButtonCustom
          btnAcao={'redirect'}
          btnUrl={''}
          textBotao={'Excluir'}
        />
        <ButtonCustom
          btnAcao={'redirect'}
          btnUrl={''}
          textBotao={'Editar'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detalhesDespesas: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detalhesDespesa: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    width: '92%',
    marginLeft: '4%',
    marginBottom: 20,
  },
  headerDetalhes: {
    textAlign: 'center',
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
  },
  despesaItenInfo: {
    fontSize: 18,
    marginBottom: 14,
  },
  despesaItenInfoLabel: {
    fontSize: 19,
    color: '#FFC311',
  },
});
