import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import ButtonCustom from '../../componentes/button.js';
import {useAuthentication} from '../../hooks/useAuthentication.js';

export default function CadastreSe() {
  //criando estados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confiSenha, setConfSenha] = useState('');
  const [erro, setErro] = useState('');

  //exportando funçoes e valores vindo do kooks de gerenciamento de usuarios
  const {createUser, error: authError, loading} = useAuthentication();

  async function realizarCadastro() {
    setErro('');

    //realizando validações
    if (nome.length < 3 || nome.length > 40) {
      setErro('Quantidade invalida de caracteres para o campo nome');
      return;
    } else if (email.length < 5 || email.length > 40) {
      setErro('Quantidade invalida de caracteres para o campo email');
      return;
    } else if (email.split('@').length <= 1) {
      setErro('Email invalido');
      return;
    } else if (senha.length < 6) {
      setErro('Quantidade invalida de caracteres para o campo Senha');
      return;
    } else if (confiSenha.trim().length < 6) {
      setErro('O campo confirmar senha ');
      return;
    }
    if (senha !== confiSenha) {
      setErro('Os campos senha e confirmar senha devem ser iguais');
      return;
    }
    const usuario = {
      nome,
      email,
      senha,
    };
    await createUser(usuario);
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cadastreSe}>
          <Text style={styles.titulo}>Cadastre-se</Text>
          <Text style={styles.descricao}>
            Para realizar o cadastro é necessario prencher os campos abaixo,
            sendotodos eles obrigatorios
          </Text>
          <View>
            <View style={styles.containerForm}>
              <Text style={styles.formLabel}>Nome:</Text>
              <TextInput style={styles.formInput} onChangeText={setNome} />
            </View>
            <View style={styles.containerForm}>
              <Text style={styles.formLabel}>Email:</Text>
              <TextInput style={styles.formInput} onChangeText={setEmail} />
            </View>
            <View style={styles.containerForm}>
              <Text style={styles.formLabel}>Senha:</Text>
              <TextInput style={styles.formInput} onChangeText={setSenha} />
            </View>
            <View style={styles.containerForm}>
              <Text style={styles.formLabel}>Confirmar senha:</Text>
              <TextInput style={styles.formInput} onChangeText={setConfSenha} />
            </View>
            {loading && (
              <ActivityIndicator
                color={'red'}
                size={45}
                style={styles.animacaoIndicator}
              />
            )}
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Enviar'}
              btnonPress={realizarCadastro}
            />
          </View>
          <View>
            <Text style={styles.textErro}>{erro}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cadastreSe: {
    margin: 50,
    marginTop: 20,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  descricao: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.4)',
    marginBottom: 20,
  },
  containerForm: {
    marginBottom: 25,
  },
  formLabel: {
    marginBottom: 15,
    fontSize: 17,
  },
  formInput: {
    borderWidth: 1,
    borderColor: 'rgba(100, 255, 104,0.5 )',
    height: 40,
    padding: 10,
    marginLeft: 10,
  },
  textErro: {
    color: '#FFC311',
    marginLeft: 0,
    fontSize: 18,
    marginTop: 20,
  },
});
