import React from 'react';
import {View, Text, Image} from 'react-native';
import ButtonCustom from '../../componentes/button/index';
import {globalStyles} from '../../styles/globalStyles';
export default function Credenciais() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerLargeMargem}>
        <Text style={globalStyles.mainTitle}>Bem vindo ao My Bills</Text>
        <Image
          style={globalStyles.imgDisplay}
          source={require('../../../assets/img/credenciais.jpg')}
        />
        <Text style={globalStyles.defaltText}>
          Para usar o app My Bills é necessario ter uma conta, voce possui uma ?
          caso nao tenha é facil criar uma
        </Text>
        <ButtonCustom
          btnAcao={'redirect'}
          btnUrl={'cadastreSe'}
          textBotao={'Criar conta'}
        />
        <ButtonCustom
          btnAcao={'redirect'}
          btnUrl={'login'}
          textBotao={'Login'}
        />
      </View>
    </View>
  );
}
