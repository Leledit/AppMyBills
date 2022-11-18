import React from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../../../componentes/button';
import {styles} from './styles';
import {useRoute} from '@react-navigation/native';
import {globalStyles} from '../../../styles/globalStyles';
export default function DetalhesReceita(){
  const route = useRoute();
  console.log(route.params);
  return (
    <View style={styles.detalhesReceitas}>
      <View style={styles.detalhesReceita}>
        <Text style={styles.headerDetalhes}>Detalhes da receita</Text>
      </View>
      <View style={styles.detalhesReceita}>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Descrição: </Text>{' '}
          asdasdasdasdasdsdas
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Valor: </Text> 25.50
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Data: </Text> 25/01/2022
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