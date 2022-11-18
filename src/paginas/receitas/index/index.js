import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {buscarReceitas} from '../../../hooks/buscarDados';
import ItemList from '../../../componentes/itemList/itemList';
export default function Receitas() {
  //configuraçoes de rota
  const navigate = useNavigation();
  function cadastrarReceita() {
    navigate.navigate('cadastroReceita');
  }
  const receitas = buscarReceitas();
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
          data={receitas}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemList
              informacoes={item}
              btnVisible={true}
              urlbtn={'detalhesReceita'}
            />
          )}
        />
      </View>
    </View>
  );
}
