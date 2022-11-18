import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonCustom from '../../../componentes/button';
import ItemList from '../../../componentes/itemList/itemList';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
export default function Despesas() {
  const navigate = useNavigation();
  function cadastrarDespesas() {
    navigate.navigate('cadastrarDespesa');
  }

  const [informacoes] = useState([
    {
      id: 1,
      descricao: 'Celular',
      valor: '25',
      data: '2022/05/20',
    },
    {
      id: 2,
      descricao: 'Internet',
      valor: '25',
      data: '2022/05/20',
    },
    {
      id: 3,
      descricao: 'financiamento carro',
      valor: '25',
      data: '2022/05/20',
    },
  ]);

  function redirecionarPage(tipoDespesas) {
    let messagem = '';
    if (tipoDespesas === 'despesasFixas') {
      messagem = 'Lista de despesas Fixas';
    } else if (tipoDespesas === 'despesasParceladas') {
      messagem = 'Lista de Parcelas para o mes';
    } else {
      messagem = 'Lista de Comprar para o mes';
    }
    navigate.navigate('listaDespesas', {msg: messagem});
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
          <ItemList informacoes={informacoes[0]} btnVisible={false} />
          <ItemList informacoes={informacoes[1]} btnVisible={false} />
          <ItemList informacoes={informacoes[2]} btnVisible={false} />
        </View>
        <View style={styles.btnArea}>
          <View style={styles.btnAreaLista}>
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Lista completa'}
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
          <ItemList informacoes={informacoes[0]} btnVisible={false} />
          <ItemList informacoes={informacoes[1]} btnVisible={false} />
          <ItemList informacoes={informacoes[2]} btnVisible={false} />
        </View>
        <View style={styles.btnArea}>
          <View style={styles.btnAreaLista}>
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Lista completa'}
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
          <ItemList informacoes={informacoes[0]} btnVisible={false} />
          <ItemList informacoes={informacoes[1]} btnVisible={false} />
          <ItemList informacoes={informacoes[2]} btnVisible={false} />
        </View>
        <View style={styles.btnArea}>
          <View style={styles.btnAreaLista}>
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Lista completa'}
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
