import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import ButtonCustom from '../../componentes/button.js';
import {useAuthentication} from '../../hooks/useAuthentication';

export default function Login() {
  //criando estados
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  //exportando funçoes e valores vindo do kooks de gerenciamento de usuarios
  const {login, error: authError, loading} = useAuthentication();

  //função responsavel por realizar o login
  async function realizarLogin() {
    setErro('');
    //realizando validaçoes
    if (email.length < 5 || email.length > 40) {
      setErro('Quantidade invalida de caracteres para o campo email');
      return;
    } else if (email.split('@').length <= 1) {
      setErro('Email invalido');
      return;
    } else if (senha.length < 6) {
      setErro('Quantidade invalida de caracteres para o campo Senha');
      return;
    }

    //criando objeto com as info do usuario
    const usuario = {
      email,
      senha,
    };

    //efetuando o login
    await login(usuario);
    setErro(authError);
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerLogin}>
        <Text style={styles.titulo}>Login</Text>
        <Text style={styles.descricao}>
          Para realizar o login, é necessario entrar com o seu E-mail e senha
        </Text>
        <View style={styles.containerForm}>
          <Text style={styles.formLambel}>E-mail cadastrado</Text>
          <TextInput style={styles.formCamp} onChangeText={setEmail} />
        </View>
        <View style={styles.containerForm}>
          <Text style={styles.formLambel}>Senha</Text>
          <TextInput style={styles.formCamp} onChangeText={setSenha} />
        </View>
        <ButtonCustom
          btnAcao={'event'}
          btnUrl={null}
          textBotao={'Login'}
          btnonPress={realizarLogin}
        />
      </View>
      {loading && (
        <ActivityIndicator
          color={'red'}
          size={45}
          style={styles.animacaoIndicator}
        />
      )}
      <View>
        <Text style={styles.textErro}>{erro}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogin: {
    margin: 50,
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
    marginBottom: 40,
  },
  containerForm: {
    marginBottom: 20,
  },
  formLambel: {
    marginBottom: 15,
    fontSize: 17,
  },
  formCamp: {
    borderWidth: 1,
    borderColor: 'rgba(100, 255, 104,0.5 )',
    height: 40,
    padding: 10,
    marginLeft: 10,
  },
  textErro: {
    color: '#FFC311',
    marginLeft: 50,
    fontSize: 18,
  },
  animacaoIndicator: {
    marginTop: 20,
  },
});
