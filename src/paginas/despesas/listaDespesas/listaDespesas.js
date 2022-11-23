import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ItemList from '../../../componentes/itemList/itemList';
import {styles} from './styles';
import {buscarDespesas} from '../../../hooks/useManipulandoDespesas';
export default function ListaDeDespesas() {
  const route = useRoute();
  const tipoDespesa = route.params.msg;
  let [tituloPagina, setTituloPagina] = useState('');
  const [listaDespesas, setListaDespesas] = useState('');
  useEffect(() => {
    const dadosDespesas = buscarDespesas();
    let listaDados = [];
    switch (tipoDespesa) {
      case 'despesasFixas':
        setTituloPagina('Despesas Fixas');
        dadosDespesas.fixa.forEach(despesa => {
          listaDados.push(despesa);
        });
        break;
      case 'despesasParceladas':
        setTituloPagina('Despesas Parceladas');
        dadosDespesas.parceladas.forEach(despesa => {
          listaDados.push(despesa);
        });
        break;
      case 'despesasMes':
        setTituloPagina('Despesas Mes');
        dadosDespesas.mes.forEach(despesa => {
          listaDados.push(despesa);
        });
        break;
    }
    setListaDespesas(listaDados);
  }, [tipoDespesa]);

  return (
    <View style={styles.listaDespesas}>
      <View style={styles.header}>
        <Text style={styles.title}>{tituloPagina}</Text>
      </View>
      <View style={styles.despesasList}>
        {listaDespesas.length === 0 && (
          <Text style={styles.listNull}>Nenhuma despesa disponivel</Text>
        )}
        <FlatList
          data={listaDespesas}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemList
              informacoes={item}
              btnVisible={true}
              urlbtn={'detalhesDespesa'}
            />
          )}
        />
      </View>
    </View>
  );
}
