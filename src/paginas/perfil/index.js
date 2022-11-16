import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
//imporção dos hooks necessarios
import {useAuthValue} from '../../context/AuthContext';

export default function Perfil() {
  const {user} = useAuthValue();
  const dataCadastro = new Date(user.metadata.creationTime);
  const dataUltimoLogin = new Date(user.metadata.lastSignInTime);
  return (
    <View style={styles.containerPerfil}>
      <View style={styles.perfilDados}>
        <Text style={styles.titlePrincipal}>Suas informaçoes</Text>
        <View>
          <Text style={styles.perfilCamp}>
            <Text style={styles.perfilCampLabel}>Nome: </Text>
            {user.displayName}
          </Text>
          <Text style={styles.perfilCamp}>
            <Text style={styles.perfilCampLabel}>Email: </Text>
            {user.email}
          </Text>
          <Text style={styles.perfilCamp}>
            <Text style={styles.perfilCampLabel}>Data Cadastro: </Text>
            {`${dataCadastro.getDate()}/${
              dataCadastro.getMonth() + 1
            }/${dataCadastro.getFullYear()}`}
          </Text>
          <Text style={styles.perfilCamp}>
            <Text style={styles.perfilCampLabel}>Ultimo login: </Text>
            {`${dataUltimoLogin.getDate()}/${
              dataUltimoLogin.getMonth() + 1
            }/${dataUltimoLogin.getFullYear()}`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPerfil: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilDados: {
    width: '94%',
    marginLeft: '2%',
    height: 350,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  titlePrincipal: {
    fontSize: 26,
    textAlign: 'center',
    marginTop: 20,
  },
  perfilCamp: {
    width: '86%',
    marginLeft: '7%',
    fontSize: 18,
    marginTop: 30,
    lineHeight: 26,
  },
  perfilCampLabel: {
    fontSize: 20,
    color: '#FFC311',
  },
});
