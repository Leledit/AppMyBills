import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import ButtonCustom from '../../../componentes/button';
import {styles} from './styles';
import {globalStyles} from '../../../styles/globalStyles';

import {
  buscarDespesa,
  excluirDespesa,
} from '../../../hooks/useManipulandoDespesas';
export default function DetalhesDespesa() {
  const [loading, setLoading] = useState(false);
  const [dadosDespesa, setDadosDespesa] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const route = useRoute();
  const idDespesa = route.params;
  const navigate = useNavigation();
  useEffect(() => {
    let despesa = buscarDespesa(idDespesa.id);
    despesa = despesa[0];

    setDadosDespesa(despesa);

    if (despesa.vencimento) {
      let data = new Date(despesa.vencimento);
      data = `${data.getDay()}/${data.getMonth()}/${data.getFullYear()}`;
      setDataVencimento(data);
    }
  }, [idDespesa]);

  function excluirDespesaSelecionada() {
    excluirDespesa(dadosDespesa.id);
    setLoading(true);
    setTimeout(() => {
      navigate.navigate('Despesas');
    }, 2000);
  }
  function editarDespesa() {
    navigate.navigate('editarDespesa', {id: dadosDespesa.id});
  }

  return (
    <View style={styles.detalhesDespesas}>
      <View style={styles.detalhesDespesa}>
        <Text style={styles.headerDetalhes}>Detalhes da Despesa</Text>
      </View>
      <View style={styles.detalhesDespesa}>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Nome: </Text>{' '}
          {dadosDespesa.nome}
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Descrição: </Text>{' '}
          {dadosDespesa.descricao}
        </Text>
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Valor: </Text>
          {dadosDespesa.valor}
        </Text>
        {dadosDespesa.vencimento && (
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Data Vencimento: </Text>
            {dataVencimento}
          </Text>
        )}
        <Text style={globalStyles.textCamp}>
          <Text style={globalStyles.textCampLabel}>Tipo de despesa: </Text>
          {dadosDespesa.tipo}
        </Text>
      </View>
      {dadosDespesa.tipo !== 'Despesa parcelada' && (
        <View style={styles.detalhesDespesa}>
          <Text style={styles.receitasAcoes}>Açoes</Text>
          <ButtonCustom
            btnAcao={'event'}
            btnUrl={null}
            textBotao={'Excluir'}
            btnonPress={excluirDespesaSelecionada}
          />
          <ButtonCustom
            btnAcao={'event'}
            btnUrl={null}
            textBotao={'Editar'}
            btnonPress={editarDespesa}
          />
          {loading && (
            <ActivityIndicator color="red" size={48} style={{marginTop: 20}} />
          )}
        </View>
      )}
    </View>
  );
}
