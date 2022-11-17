import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonCustom from '../../componentes/button.js';
import ItemList from '../../componentes/itemList.js';
import {useNavigation} from '@react-navigation/native';

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

const styles = StyleSheet.create({
  despesasHeader: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: '10%',
    paddingBottom: 15,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    marginBottom: 20,
  },
  receitaCabecalhoTitulo: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.4)',
    marginTop: 5,
  },
  containerDespesas: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  tituloDespesa: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    width: 200,
    textAlign: 'center',
    paddingBottom: 8,
    borderColor: 'rgba(0,0,0,0.3)',
    marginBottom: 20,
  },
  btnArea: {
    alignItems: 'flex-end',
  },
  btnAreaLista: {
    width: '50%',
    marginBottom: 40,
    marginRight: 40,
    marginTop: -20,
  },
});
