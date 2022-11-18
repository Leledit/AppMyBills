import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonCustom from '../../../componentes/button';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
export default function Receitas() {
  //configuraçoes de rota
  const navigate = useNavigation();
  function cadastrarReceita() {
    navigate.navigate('cadastroReceita');
  }
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
        <Text style={styles.receitasItensNoReceitas}>
          Nenhuma receita foi encontrada!!
        </Text>
        <View style={styles.receitasIten}>
          <View style={styles.receitasItenInfos}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
              asdasdasdasdasdsdas
            </Text>
          </View>
          <View style={[styles.receitasItenInfos, {marginBottom: 0}]}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
            </Text>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Data: </Text>{' '}
              25/01/2022
            </Text>
          </View>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'detalhesReceita'}
            textBotao={'Detalhes'}
            style={styles.btnDetalhes}
          />
        </View>
        <View style={styles.receitasIten}>
          <View style={styles.receitasItenInfos}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
              asdasdasdasdasdsdas
            </Text>
          </View>
          <View style={[styles.receitasItenInfos, {marginBottom: 0}]}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
            </Text>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Data: </Text>{' '}
              25/01/2022
            </Text>
          </View>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'detalhesReceita'}
            textBotao={'Detales'}
            style={styles.btnDetalhes}
          />
        </View>
        <View style={styles.receitasIten}>
          <View style={styles.receitasItenInfos}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Descrição: </Text>{' '}
              asdasdasdasdasdsdas
            </Text>
          </View>
          <View style={[styles.receitasItenInfos, {marginBottom: 0}]}>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Valor: </Text> 25.50
            </Text>
            <Text style={styles.receitasItenInfo}>
              <Text style={styles.receitasItenInfoLabel}>Data: </Text>{' '}
              25/01/2022
            </Text>
          </View>
          <ButtonCustom
            btnAcao={'redirect'}
            btnUrl={'detalhesReceita'}
            textBotao={'Detales'}
            style={styles.btnDetalhes}
          />
        </View>
      </View>
    </View>
  );
}
