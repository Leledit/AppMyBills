import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ButtonCustom from '../../../componentes/button';
import {formStyles} from '../../../styles/formStyles.js';
import {globalStyles} from '../../../styles/globalStyles.js';
export default function CadastroDespesa() {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [numeroParcelas, setNumeroParcelas] = useState('');
  const [tipoDespesa, setTipoDespesa] = useState('');

  function cadastrarDespesas() {
    alert('cadastrando Despesa');
  }

  return (
    <ScrollView style={globalStyles.spaceTop}>
      <View style={globalStyles.containerSmallMargin}>
        <View style={globalStyles.containerHerder}>
          <Text style={formStyles.smallTitle}>Cadastro de despesas</Text>
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
            <Text style={formStyles.formLambel}>Valor</Text>
            <TextInput
              style={formStyles.formImput}
              onChangeText={setValor}
              value={valor}
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
          <View style={formStyles.formCamp}>
            <Text style={formStyles.formLambel}>Tipo de despesa</Text>
            <View style={formStyles.formPicker}>
              <Picker
                selectedValue={tipoDespesa}
                mode={'dropdown'}
                onValueChange={(itemValue, itemIndex) =>
                  setTipoDespesa(itemValue)
                }>
                <Picker.Item label="Despesa do mes" value={'Despesa do mes'} />
                <Picker.Item label="Despesa fixa" value={'Despesa fixa'} />
                <Picker.Item
                  label="Despesa parcelada"
                  value={'Despesa parcelada'}
                />
              </Picker>
            </View>
          </View>
          {tipoDespesa === 'Despesa parcelada' && (
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Nº</Text>
              <View style={formStyles.formPicker}>
                <Picker
                  selectedValue={numeroParcelas}
                  mode={'dropdown'}
                  onValueChange={(itemValue, itemIndex) =>
                    setNumeroParcelas(itemValue)
                  }>
                  <Picker.Item label="1" value={'1'} />
                  <Picker.Item label="2" value={'2'} />
                  <Picker.Item label="3" value={'3'} />
                  <Picker.Item label="4" value={'4'} />
                  <Picker.Item label="5" value={'5'} />
                  <Picker.Item label="6" value={'6'} />
                  <Picker.Item label="7" value={'7'} />
                  <Picker.Item label="8" value={'8'} />
                  <Picker.Item label="9" value={'9'} />
                  <Picker.Item label="10" value={'10'} />
                  <Picker.Item label="11" value={'11'} />
                  <Picker.Item label="12" value={'12'} />
                </Picker>
              </View>
            </View>
          )}
          <ButtonCustom
            btnAcao={'event'}
            btnUrl={null}
            textBotao={'Enviar'}
            btnonPress={cadastrarDespesas}
          />
        </View>
      </View>
    </ScrollView>
  );
}
