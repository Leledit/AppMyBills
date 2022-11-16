import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {useAuthentication} from '../hooks/useAuthentication';

export default function CustomDrawer(props) {
  const {logout} = useAuthentication();

  //configuraçoes de rota
  const navigate = useNavigation();

  async function deslogar() {
    await logout();
  }
  function acessarPerfil() {
    navigate.navigate('perfil');
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerDrawer}>
        <TouchableOpacity onPress={acessarPerfil}>
          <Image
            source={require('../../assets/img/perfil.png')}
            style={styles.imgPerfil}
          />
          <Text style={styles.mensagemInicial}>Bem vindo!</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.areaiconeSair} onPress={deslogar}>
          <Icon
            size={30}
            color="red"
            name="sign-out-alt"
            style={styles.iconeSair}
          />
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  containerDrawer: {
    width: '100%',
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  imgPerfil: {
    width: 65,
    marginTop: 10,
    height: 65,
    marginLeft: 10,
  },
  mensagemInicial: {
    color: '#000',
    fontSize: 17,
    marginTop: 5,
    marginBottom: 40,
  },
  areaiconeSair: {
    flex: 1,
    marginBottom: 20,
  },
  iconeSair: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});
