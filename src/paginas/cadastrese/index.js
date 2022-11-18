import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import ButtonCustom from '../../componentes/button';
import {useAuthentication} from '../../hooks/useAuthentication.js';
import {globalStyles} from '../../styles/globalStyles.js';
import {formStyles} from '../../styles/formStyles.js';
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
    <View style={globalStyles.container}>
      <ScrollView>
        <View style={globalStyles.containerLargeMargem}>
          <Text style={formStyles.manTitleForm}>Cadastre-se</Text>
          <Text style={formStyles.textForm}>
            Para realizar o cadastro é necessario prencher os campos abaixo,
            sendotodos eles obrigatorios
          </Text>
          <View style={formStyles.containerForm}>
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Nome:</Text>
              <TextInput style={formStyles.formImput} onChangeText={setNome} />
            </View>
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Email:</Text>
              <TextInput style={formStyles.formImput} onChangeText={setEmail} />
            </View>
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Senha:</Text>
              <TextInput style={formStyles.formImput} onChangeText={setSenha} />
            </View>
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Confirmar senha:</Text>
              <TextInput
                style={formStyles.formImput}
                onChangeText={setConfSenha}
              />
            </View>
            {loading && (
              <ActivityIndicator
                color={'red'}
                size={45}
                style={formStyles.animationIndicator}
              />
            )}
            <ButtonCustom
              btnAcao={'event'}
              btnUrl={null}
              textBotao={'Enviar'}
              btnonPress={realizarCadastro}
            />
          </View>
          <Text style={formStyles.msgErro}>{erro}</Text>
        </View>
      </ScrollView>
    </View>
  );
}
