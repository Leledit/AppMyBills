import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
export default function ButtonCustom(props) {
  //configuraçoes de rota
  const navigate = useNavigation();

  function clickBtn() {
    if (props.btnAcao === 'redirect') {
      return navigate.navigate(props.btnUrl);
    } else if (props.btnAcao === 'event') {
      return props.btnonPress();
    }
  }

  return (
    <TouchableOpacity onPress={clickBtn} style={styles.btnArea}>
      <Text style={styles.btntext}>{props.textBotao}</Text>
    </TouchableOpacity>
  );
}
