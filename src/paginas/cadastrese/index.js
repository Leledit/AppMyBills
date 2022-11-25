import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ButtonCustom from '../../componentes/button';
import {useAuthentication} from '../../hooks/useAuthentication.js';
import {globalStyles} from '../../styles/globalStyles.js';
import {formStyles} from '../../styles/formStyles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function CadastreSe() {
  //criando estados
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confiSenha, setConfSenha] = useState('');
  const [erro, setErro] = useState('');
  const [passwordVisble, setPasswordVisible] = useState(true);
  const [passwordVisbleComfiSenha, setPasswordVisbleComfiSenha] =
    useState(true);
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
              <TextInput
                style={formStyles.formImput}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Senha</Text>
              <View style={formStyles.contentFormIcon}>
                <TextInput
                  placeholder="Insira sua senha"
                  placeholderTextColor={'rgba(0, 200, 104,1 )'}
                  style={[formStyles.formImput, {width: '90%'}]}
                  onChangeText={setSenha}
                  value={senha}
                  secureTextEntry={passwordVisble}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisble)}>
                  {passwordVisble ? (
                    <Ionicons
                      name="eye"
                      color="rgba(100, 255, 104,0.5 )"
                      size={25}
                      style={formStyles.iconPassword}
                    />
                  ) : (
                    <Ionicons
                      name="eye-off"
                      color="rgba(100, 255, 104,0.5 )"
                      size={25}
                      style={formStyles.iconPassword}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={formStyles.formCamp}>
              <Text style={formStyles.formLambel}>Confirmar senha:</Text>
              <View style={formStyles.contentFormIcon}>
                <TextInput
                  placeholder="Confirme a sua senha"
                  placeholderTextColor={'rgba(0, 200, 104,1 )'}
                  style={[formStyles.formImput, {width: '90%'}]}
                  onChangeText={setConfSenha}
                  value={confiSenha}
                  secureTextEntry={passwordVisbleComfiSenha}
                />
                <TouchableOpacity
                  onPress={() => {
                    setPasswordVisbleComfiSenha(!passwordVisbleComfiSenha);
                  }}>
                  {passwordVisbleComfiSenha ? (
                    <Ionicons
                      name="eye"
                      color="rgba(100, 255, 104,0.5 )"
                      size={25}
                      style={formStyles.iconPassword}
                    />
                  ) : (
                    <Ionicons
                      name="eye-off"
                      color="rgba(100, 255, 104,0.5 )"
                      size={25}
                      style={formStyles.iconPassword}
                    />
                  )}
                </TouchableOpacity>
              </View>
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
