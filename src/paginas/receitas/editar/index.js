/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import {formStyles} from '../../../styles/formStyles.js';
import {globalStyles} from '../../../styles/globalStyles.js';
import ButtonCustom from '../../../componentes/button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {editarRegistroReceita} from '../../../hooks/useManipularReceitas';
export default function EditarReceita() {
  const route = useRoute();
  const dados = route.params;
  //criando states necessarios
  const [descricao, setDescicao] = useState(dados.descricao);
  const [valor, setValor] = useState(dados.valor);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  function editarDados() {
    //realizando validações
    if (descricao.trim().length < 3 || descricao.trim().length > 40) {
      setError('Quantidade invalida de carracteres no campo nome');
      return;
    } else if (valor.trim().length === 0) {
      setError('Quantidade invalida de carracteres no campo valor');
      return;
    }
    setLoading(true);
    const infoReceita = {
      descricao,
      valor,
      dataCadastro: new Date(),
      id: dados.id,
    };
    editarRegistroReceita(infoReceita);
    setTimeout(() => {
      navigate.navigate('Receitas');
    }, 2000);
  }
  return (
    <View style={globalStyles.containerSmallMargin}>
      <View style={globalStyles.containerHerder}>
        <Text style={formStyles.smallTitle}>Editando Receita</Text>
      </View>
      <View style={formStyles.containerFormColor}>
        <View style={formStyles.formCamp}>
          <Text style={formStyles.formLambel}>Descrição:</Text>
          <TextInput
            style={formStyles.formImput}
            onChangeText={setDescicao}
            value={descricao}
          />
        </View>
        <View style={formStyles.formCamp}>
          <Text style={formStyles.formLambel}>Valor:</Text>
          <TextInput
            style={formStyles.formImput}
            onChangeText={setValor}
            value={valor}
          />
        </View>
        <ButtonCustom
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Enviar'}
          btnonPress={editarDados}
        />
        {loading && (
          <ActivityIndicator color="red" size={48} style={{marginTop: 20}} />
        )}
      </View>
      {error ? <Text style={formStyles.msgErro}>{error}</Text> : ''}
    </View>
  );
}
