import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {buscarReceitas} from '../../../hooks/useManipularReceitas';
import ItemList from '../../../componentes/itemList/itemList';
export default function Receitas() {
  //configuraçoes de rota
  const navigate = useNavigation();
  const [receiteList, setReceiteList] = useState('');
  function cadastrarReceita() {
    navigate.navigate('cadastroReceita');
  }
  useEffect(() => {
    const receitas = buscarReceitas();
    setReceiteList(receitas);
  }, []);

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
        <FlatList
          data={receiteList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemList
              informacoes={item}
              btnVisible={true}
              urlbtn={'detalhesReceita'}
              tipoDados={'receitas'}
            />
          )}
        />
      </View>
    </View>
  );
}
