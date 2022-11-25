/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import ButtonCustom from '../../../componentes/button';
import {formStyles} from '../../../styles/formStyles.js';
import {globalStyles} from '../../../styles/globalStyles.js';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  buscarDespesa,
  editarDespesa,
} from '../../../hooks/useManipulandoDespesas';
import {TextInputMask} from 'react-native-masked-text';
export default function EditarDespesas() {
  const route = useRoute();
  const idDespesa = route.params;
  const [dadosDespesa, setDadosDespesa] = useState(buscarDespesa(idDespesa.id));
  const [nome, setNome] = useState(dadosDespesa[0].nome);
  const [valor, setValor] = useState(dadosDespesa[0].valor);
  const [descricao, setDescricao] = useState(dadosDespesa[0].descricao);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const navigate = useNavigation();

  function editarDespesaSelecionada() {
    //realizando validações no campo
    if (nome.length < 3 || nome.length > 40) {
      setErro('Quantidade invalida de caracteres para o campo nome!');
      return;
    } else if (valor.length === 0) {
      setErro('O campo valor nao pode esta vazio');
      return;
    } else if (descricao.length < 3 || descricao.length > 40) {
      setErro('O campo valor nao pode esta vazio');
      return;
    }
    let newInfoDespesas;
    setLoading(true);
    if (dadosDespesa[0].tipo === 'Despesa fixa') {
      newInfoDespesas = {
        id: idDespesa.id,
        nome,
        valor,
        descricao,
        tipo: dadosDespesa[0].tipo,
      };
    } else {
      newInfoDespesas = {
        id: idDespesa.id,
        nome,
        valor,
        descricao,
        tipo: dadosDespesa[0].tipo,
        vencimento: new Date(),
      };
    }
    editarDespesa(newInfoDespesas);
    setTimeout(() => {
      navigate.navigate('Despesas');
    }, 2000);
  }
  return (
    <ScrollView style={globalStyles.spaceTop}>
      <View style={globalStyles.containerSmallMargin}>
        <View style={globalStyles.containerHerder}>
          <Text style={formStyles.smallTitle}>Editando despesa</Text>
        </View>
        <View style={formStyles.containerFormColor}>
          <View style={formStyles.formCamp}>
            <Text style={formStyles.formLambel}>Nome</Text>
            <TextInput
              style={formStyles.formImput}
              onChangeText={setNome}
              value={nome}
            />
          </View>
          <View style={formStyles.formCamp}>
            <Text style={formStyles.formLambel}>Valor:</Text>
            <TextInputMask
              type={'money'}
              value={valor}
              onChangeText={setValor}
              style={formStyles.formImput}
              keyboardType="numeric"
            />
          </View>
          <View style={formStyles.formCamp}>
            <Text style={formStyles.formLambel}>Descrição</Text>
            <TextInput
              style={formStyles.formImput}
              onChangeText={setDescricao}
              value={descricao}
            />
          </View>
          <ButtonCustom
            btnAcao={'event'}
            btnUrl={null}
            textBotao={'Enviar'}
            btnonPress={editarDespesaSelecionada}
          />
          {loading && (
            <ActivityIndicator color="red" size={48} style={{marginTop: 20}} />
          )}
          {erro && <Text style={formStyles.msgErro}>{erro}</Text>}
        </View>
      </View>
    </ScrollView>
  );
}
