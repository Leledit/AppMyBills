import React, {useState} from 'react';
import {View, Text, TextInput, ActivityIndicator} from 'react-native';
import ButtonCustom from '../../componentes/button/index';
import {useAuthentication} from '../../hooks/useAuthentication';
import {globalStyles} from '../../styles/globalStyles.js';
import {formStyles} from '../../styles/formStyles.js';
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
    <View style={globalStyles.container}>
      <View style={globalStyles.containerLargeMargem}>
        <Text style={formStyles.manTitleForm}>Login</Text>
        <Text style={formStyles.textForm}>
          Para realizar o login, é necessario entrar com o seu E-mail e senha
        </Text>
        <View style={formStyles.containerForm}>
          <View style={formStyles.formCamp}>
            <Text style={formStyles.formLambel}>E-mail cadastrado</Text>
            <TextInput style={formStyles.formImput} onChangeText={setEmail} />
          </View>
          <View style={formStyles.formCamp}>
            <Text style={formStyles.formLambel}>Senha</Text>
            <TextInput style={formStyles.formImput} onChangeText={setSenha} />
          </View>
          <ButtonCustom
            btnAcao={'event'}
            btnUrl={null}
            textBotao={'Login'}
            btnonPress={realizarLogin}
          />
        </View>
        <Text style={formStyles.msgErro}>{erro}</Text>
        {loading && (
          <ActivityIndicator
            color={'red'}
            size={45}
            style={formStyles.animationIndicator}
          />
        )}
      </View>
    </View>
  );
}
