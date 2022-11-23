import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useAuthentication} from '../../hooks/useAuthentication';
export default function CustomDrawer(props) {
  const {logout} = useAuthentication();

  //configuraçoes de rota
  const navigate = useNavigation();

  function deslogar() {
    logout();
    navigate.goBack();
    navigate.navigate('credenciais');
  }
  function acessarPerfil() {
    navigate.navigate('perfil');
  }
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.containerDrawer}>
        <TouchableOpacity onPress={acessarPerfil}>
          <Image
            source={require('../../../assets/img/perfil.png')}
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
