/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import ButtonCustom from '../../componentes/button.js';
import {useAuthValue} from '../../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {collection, addDoc} from 'firebase/firestore';
import '../../firebase/config';
import {db} from '../../firebase/config';
export default function CadastroReceita(){
  //criando states necessarios
  const [descricao, setDescicao] = useState('');
  const [valor, setValor] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  //pegando contento do usuario
  const {user} = useAuthValue();
  const navigate = useNavigation;
  async function cadastrarReceita() {
    console.log("cadastrei");
    const docRef = await addDoc(collection(db, "cities"), {
      name: "Tokyo",
      country: "Japan"
    });
    console.log(docRef);
  }
  return (
    <View style={styles.cadastroReceita}>
      <View style={styles.cadastroHeader}>
        <Text style={styles.cadastroTitle}>Cadastro de receitasss</Text>
      </View>
      <View style={styles.receitaForm}>
        <View>
          <Text style={styles.formLabel}>Descrição:</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={setDescicao}
            value={descricao}
          />
        </View>
        <View>
          <Text style={styles.formLabel}>Valor:</Text>
          <TextInput
            style={styles.formInput}
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
      {error ? <Text>{error}</Text> :''}
    </View>
  );
}

const styles = StyleSheet.create({
  cadastroReceita: {
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
  formLabel:{
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
});
