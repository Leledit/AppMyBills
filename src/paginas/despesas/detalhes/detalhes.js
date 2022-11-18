import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ButtonCustom from '../../../componentes/button';
import {styles} from './styles';
import {globalStyles} from '../../../styles/globalStyles';
export default function DetalhesDespesa() {
  const route = useRoute();
  return (
    <View style={styles.detalhesDespesas}>
      <View style={styles.detalhesDespesa}>
        <Text style={styles.headerDetalhes}>Detalhes da Despesa</Text>
      </View>
      <View style={styles.detalhesDespesa}>
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
      <View style={styles.detalhesDespesa}>
        <Text style={styles.receitasAcoes}>Açoes</Text>
        <ButtonCustom btnAcao={'event'} btnUrl={null} textBotao={'Excluir'} />
        <ButtonCustom btnAcao={'event'} btnUrl={null} textBotao={'Editar'} />
      </View>
    </View>
  );
}
