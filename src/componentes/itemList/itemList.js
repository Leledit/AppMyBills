import React from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../button';
import {useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../styles/globalStyles.js';
import {styles} from './styles';
import {converterMoeda} from '../../helper/helper';
export default function ItemList(props) {
  const navigate = useNavigation();
  let renderInfo;
  if (props.tipoDados === 'receitas') {
    let datatCadastro = new Date(props.informacoes.dataCadastro);
    datatCadastro = `${datatCadastro.getDate()}/${
      datatCadastro.getMonth() + 1
    }/${datatCadastro.getFullYear()}`;
    renderInfo = (
      <>
        <View style={[styles.itemListInfos, {marginTop: -12}]}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Descrição: </Text>
            {props.informacoes.descricao}
          </Text>
        </View>
        <View style={[styles.itemListInfos]}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Valor: </Text>
            {converterMoeda(props.informacoes.valor)}
          </Text>
        </View>
        <View style={[styles.itemListInfos, {marginBottom: 0}]}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Cadastrada em: </Text>
            {datatCadastro}
          </Text>
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
      </>
    );
  } else {
    let data = new Date(props.informacoes.vencimento);
    let infoLabel = '';
    let infoValue = '';
    if (props.informacoes.tipo === 'Despesa fixa') {
      infoLabel = 'Id:';
      infoValue = props.informacoes.id;
    } else {
      infoLabel = 'Vencimento:';
      infoValue = `${data.getDate()}/${
        data.getMonth() + 1
      }/${data.getFullYear()}`;
    }
    renderInfo = (
      <>
        <View style={styles.itemListInfos}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Nome: </Text>
            {props.informacoes.nome}
          </Text>
        </View>
        <View style={styles.itemListInfos}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>{infoLabel} </Text>
            {infoValue}
          </Text>
        </View>
        <View style={[styles.itemListInfos, {marginBottom: 0}]}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Valor: </Text>
            {converterMoeda(props.informacoes.valor)}
          </Text>
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
      </>
    );
  }
  function passarDadosDetalhes() {
    navigate.navigate(props.urlbtn, {
      id: props.informacoes.id,
    });
  }
  return <View style={styles.itemList}>{renderInfo}</View>;
}
