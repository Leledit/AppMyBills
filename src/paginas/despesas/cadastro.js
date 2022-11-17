import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import ButtonCustom from '../../componentes/button.js';

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
    <ScrollView>
      <View style={styles.containerCadastro}>
        <View style={styles.cadastroHeader}>
          <Text style={styles.cadastroTitle}>Cadastro de despesas</Text>
        </View>
        <View style={styles.receitaForm}>
          <View>
            <Text style={styles.formLabel}>Nome</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setNome}
              value={nome}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Valor</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setValor}
              value={valor}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Descrição</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={setDescricao}
              value={descricao}
            />
          </View>
          <View>
            <Text style={styles.formLabel}>Tipo de despesa</Text>
            <View style={styles.formPicker}>
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
            <View>
              <Text style={styles.formLabel}>Nº</Text>
              <View style={styles.formPicker}>
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

const styles = StyleSheet.create({
  containerCadastro: {
    width: '92%',
    marginLeft: '4%',
    flex: 1,
    justifyContent: 'center',
  },
  cadastroHeader: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  cadastroTitle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'rgba(0,0,0,0.5)',
  },
  receitaForm: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 30,
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 20,
    color: '#FFC311',
    marginBottom: 12,
    marginTop: 20,
  },
  formInput: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  formPicker: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
});
