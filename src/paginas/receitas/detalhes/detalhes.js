/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';
import ButtonCustom from '../../../componentes/button';
import {styles} from './styles';
import {globalStyles} from '../../../styles/globalStyles';
import {excluirRegitroReceita, buscarReceita} from '../../../hooks/useManipularReceitas';
import { useNavigation, useRoute} from '@react-navigation/native';
export default function DetalhesReceita(){
  const route = useRoute();
  const idReceita = route.params.id;
  const [dadosReceita ,setDadosReceita] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  useEffect(()=>{
    const receita = buscarReceita(idReceita);
    let dataReceita = new Date(receita[0].dataCadastro);
    dataReceita = `${dataReceita.getDate()}/${dataReceita.getMonth() + 1}/${dataReceita.getFullYear()}`;
    const dadosReceita = {
      ...receita[0],
      dataFormatada: dataReceita,
    }
    setDadosReceita(dadosReceita);
  }, [idReceita]);
  function executarExclusaoRegistro(){
    excluirRegitroReceita(idReceita);
    setLoading(true);
    setTimeout(() => {
      navigate.navigate('Receitas');
     },2000);
  }
  function editarReceita(){
    navigate.navigate('editarReceita',dadosReceita);
  }
  return (
    <View style={styles.detalhesReceitas}>
      <View style={styles.detalhesReceita}>
        <Text style={styles.headerDetalhes}>Detalhes da receita</Text>
      </View>
      <View style={styles.detalhesReceita}>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Descrição: </Text>
          {dadosReceita.descricao}
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Valor: </Text>
          {dadosReceita.valor}
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Data: </Text>
          {dadosReceita.dataFormatada}
        </Text>
      </View>
      <View style={styles.detalhesReceita}>
        <Text style={styles.receitasAcoes}>Açoes</Text>
        <ButtonCustom 
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Excluir'}
          btnonPress={executarExclusaoRegistro}
        />
        <ButtonCustom 
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Editar'}
          btnonPress={editarReceita}
        />
        {loading && <ActivityIndicator color="red" size={48} style={{marginTop: 20}} /> }
      </View>
    </View>
  );
}