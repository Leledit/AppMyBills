import React from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../button';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../styles/globalStyles.js';
import {styles} from './styles';
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
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Descrição: </Text>
          {props.informacoes.descricao}
        </Text>
      </View>
      <View style={[styles.itemListInfos, {marginBottom: 20}]}>
        <View>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Valor: </Text>
            {props.informacoes.valor}
          </Text>
        </View>
        <View>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Data: </Text>25/01/2022
          </Text>
        </View>
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
