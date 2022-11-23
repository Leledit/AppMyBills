import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonCustom from '../../../componentes/button';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
export default function Despesas() {
  const navigate = useNavigation();

  function cadastrarDespesas() {
    navigate.navigate('cadastrarDespesa');
  }
  function redirecionarPage(tipoDespesas) {
    navigate.navigate('listaDespesas', {
      msg: tipoDespesas,
    });
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.despesasHeader}>
        <Text style={styles.receitaCabecalhoTitulo}>Suas Despesas</Text>
        <TouchableOpacity onPress={cadastrarDespesas}>
          <Icon size={36} color="rgba(100, 255, 104,0.5 )" name="plus-circle" />
        </TouchableOpacity>
      </View>
      <View style={styles.containerDespesas}>
        <View>
          <Text style={styles.tituloDespesa}>Despesas fixas</Text>
        </View>
        <View style={styles.btnArea}>
          <View style={styles.btnAreaLista}>
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Exibir'}
              btnonPress={() => {
                redirecionarPage('despesasFixas');
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerDespesas}>
        <View>
          <Text style={styles.tituloDespesa}>Despesas Parceladas</Text>
        </View>
        <View style={styles.btnArea}>
          <View style={styles.btnAreaLista}>
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Exibir'}
              btnonPress={() => {
                redirecionarPage('despesasParceladas');
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.containerDespesas}>
        <View>
          <Text style={styles.tituloDespesa}>Despesas Do mes</Text>
        </View>
        <View style={styles.btnArea}>
          <View style={styles.btnAreaLista}>
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Exibir'}
              btnonPress={() => {
                redirecionarPage('despesasMes');
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
