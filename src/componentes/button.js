import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

const styles = StyleSheet.create({
  btnArea: {
    marginTop: 30,
    width: '100%',
  },
  btntext: {
    width: '100%',
    height: 38,
    backgroundColor: 'rgba(215, 255, 216,1)',
    textAlign: 'center',
    borderRadius: 10,
    borderColor: 'rgba(100, 255, 104,0.5)',
    borderWidth: 1,
    color: 'rgba(0,0,0,0.4)',
    paddingTop: 7,
  },
});
