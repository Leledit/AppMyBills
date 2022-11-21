import React from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../button';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../styles/globalStyles.js';
import {styles} from './styles';
export default function ItemList(props) {
  const navigate = useNavigation();
  let data = new Date(props.informacoes.dataCadastro);
  function passarDadosDetalhes() {
    let info = props.informacoes;
    navigate.navigate(props.urlbtn, {
      descricao: info.descricao,
      valor: info.valor,
      data: `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`,
      id: info.id,
    });
  }

  return (
    <View style={styles.itemList}>
      <View style={[styles.itemListInfos, {justifyContent: 'flex-start'}]}>
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
            <Text style={globalStyles.textCampLabel}>Data: </Text>
            {`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`}
          </Text>
        </View>
      </View>
      {props.btnVisible && (
        <ButtonCustom
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Detalhes'}
          btnonPress={() => {
            passarDadosDetalhes();
          }}
        />
      )}
      <View style={styles.bordaEntreItens} />
    </View>
  );
}
