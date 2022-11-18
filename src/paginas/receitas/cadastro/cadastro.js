/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import ButtonCustom from '../../../componentes/button';
import {formStyles} from '../../../styles/formStyles.js';
import {globalStyles} from '../../../styles/globalStyles.js';

export default function CadastroReceita(){
  //criando states necessarios
  const [descricao, setDescicao] = useState('');
  const [valor, setValor] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  function cadastrarReceita(){
    //realizando validações
    if ((descricao.trim().length < 3 )||(descricao.trim().length > 40)){
      setError('Quantidade invalida de carracteres no campo nome');
      return;
    } else if (valor.trim().length === 0 ){
      setError('Quantidade invalida de carracteres no campo valor');
      return;
    }

    const infoReceita = {
      descricao,
      valor,
      dataCadastro:new Date(),
    };
    console.log(infoReceita);
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
          btnonPress={cadastrarReceita}
        />
      </View>
      {error ? <Text style={formStyles.msgErro}>{error}</Text> :''}
    </View>
  );
}
