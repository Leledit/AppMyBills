import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ItemList from '../../componentes/itemList.js';
export default function ListaDeDespesas() {
  const route = useRoute();
  const [informacoes] = useState([
    {
      id: 1,
      descricao: 'Celular',
      valor: '25',
      data: '2022/05/20',
    },
    {
      id: 2,
      descricao: 'Internet',
      valor: '25',
      data: '2022/05/20',
    },
    {
      id: 3,
      descricao: 'financiamento carro',
      valor: '25',
      data: '2022/05/20',
    },
  ]);
  return (
    <ScrollView>
      <View style={styles.listaDespesas}>
        <View style={styles.header}>
          <Text style={styles.title}>{route.params.msg}</Text>
        </View>
        <View style={styles.despesasList}>
          <ItemList
            informacoes={informacoes[0]}
            btnVisible={true}
            urlbtn={'detalhesDespesa'}
          />
          <ItemList
            informacoes={informacoes[1]}
            btnVisible={true}
            urlbtn={'detalhesDespesa'}
          />
          <ItemList
            informacoes={informacoes[2]}
            btnVisible={true}
            urlbtn={'detalhesDespesa'}
          />
          <ItemList
            informacoes={informacoes[2]}
            btnVisible={true}
            urlbtn={'detalhesDespesa'}
          />
          <ItemList
            informacoes={informacoes[2]}
            btnVisible={true}
            urlbtn={'detalhesDespesa'}
          />
          <ItemList
            informacoes={informacoes[2]}
            btnVisible={true}
            urlbtn={'detalhesDespesa'}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listaDespesas: {
    width: '92%',
    marginLeft: '4%',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(0,0,0,0.5)',
  },
});
