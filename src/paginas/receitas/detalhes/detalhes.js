/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text,ActivityIndicator} from 'react-native';
import ButtonCustom from '../../../componentes/button';
import {styles} from './styles';
import {globalStyles} from '../../../styles/globalStyles';
import {excluirRegitroReceita} from '../../../hooks/useManipularReceitas';
import { useNavigation, useRoute} from '@react-navigation/native';
export default function DetalhesReceita(){
  const route = useRoute();
  const dados = route.params;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  function executarExclusaoRegistro(){
    excluirRegitroReceita(dados.id);
    setLoading(true);
    setTimeout(() => {
      navigate.navigate('Receitas');
     },2000);
  }
  function editarReceita(){
    navigate.navigate('editarReceita',dados);
  }
  return (
    <View style={styles.detalhesReceitas}>
      <View style={styles.detalhesReceita}>
        <Text style={styles.headerDetalhes}>Detalhes da receita</Text>
      </View>
      <View style={styles.detalhesReceita}>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Descrição: </Text>{' '}
          {dados.descricao}
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Valor: </Text>  {dados.valor}
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Data: </Text>   {dados.data}
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