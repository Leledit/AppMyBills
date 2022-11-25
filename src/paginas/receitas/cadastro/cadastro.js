/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import ButtonCustom from '../../../componentes/button';
import {formStyles} from '../../../styles/formStyles.js';
import {globalStyles} from '../../../styles/globalStyles.js';
import {adicionarReceita} from '../../../hooks/useManipularReceitas';
import {retornarIdUltimaReceita} from '../../../hooks/useManipularReceitas';
import {useNavigation} from '@react-navigation/native';
import {TextInputMask} from 'react-native-masked-text';
import {convertendoValorParaCadastrar} from '../../../helper/helper';
export default function CadastroReceita(){
  //criando states necessarios  
  const [descricao, setDescicao] = useState('');
  const [valor, setValor] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();
  function cadastrarReceita(){
    //realizando validações
    if ((descricao.trim().length < 3 )||(descricao.trim().length > 40)){
      setError('Quantidade invalida de carracteres no campo nome');
      return;
    } else if (valor.trim().length === 0 ){
      setError('Quantidade invalida de carracteres no campo valor');
      return;
    }
    setLoading(true);
    let valorConvertido = convertendoValorParaCadastrar(valor);
    const infoReceita = {
      descricao,
      valor: valorConvertido.slice(2),
      dataCadastro: new Date(),
      id: retornarIdUltimaReceita(),
    };
   adicionarReceita(infoReceita);
  setTimeout(() => {
    navigate.navigate('Dashboard');
   },2000);
  } 
  return (
    <View style={globalStyles.containerSmallMargin}>
      <View style={globalStyles.containerHerder}>
        <Text style={formStyles.smallTitle}>Cadastro de receitas</Text>
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
          <TextInputMask
            type={'money'}
            value={valor}
            onChangeText={setValor}
            style={formStyles.formImput}
            keyboardType='numeric'
          />
        </View>
        <ButtonCustom 
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Enviar'}
          btnonPress={cadastrarReceita}
        />
        {loading && (<ActivityIndicator color="red" size={48} style={{marginTop: 20}} />) }
      </View>
      {error ? <Text style={formStyles.msgErro}>{error}</Text> :''}
    </View>
  );
}
