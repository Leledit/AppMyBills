import React from 'react';
import {View, Text, Image} from 'react-native';
import ButtonCustom from '../../componentes/button/index';
import {globalStyles} from '../../styles/globalStyles';
export default function Apresentacao() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.containerLargeMargem}>
        <Image
          style={globalStyles.imgDisplay}
          source={require('../../../assets/img/apresentacaoArt.jpg')}
        />
        <Text style={globalStyles.mainTitle}>Problemas com as contas?</Text>
        <Text style={globalStyles.defaltText}>
          com o My Bills é facil gerenciar todas as sua contas, sendo elas
          decorrentes, ou ate mesmos as pacelas, gostou dessa ideia? entao click
          no botao "Confira" para acessar o app
        </Text>
        <ButtonCustom
          btnAcao={'redirect'}
          btnUrl={'credenciais'}
          textBotao={'Confira'}
        />
      </View>
    </View>
  );
}
