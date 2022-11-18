import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {useAuthValue} from '../../context/AuthContext';
import {globalStyles} from '../../styles/globalStyles';
export default function Perfil() {
  const {user} = useAuthValue();
  const dataCadastro = new Date(user.metadata.creationTime);
  const dataUltimoLogin = new Date(user.metadata.lastSignInTime);
  return (
    <View style={globalStyles.containerCenter}>
      <View style={styles.perfilDados}>
        <Text style={[globalStyles.mainTitle, globalStyles.titleAlignCenter]}>
          Suas informaçoes
        </Text>
        <View style={styles.perfilInfo}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Nome: </Text>
            {user.displayName}
          </Text>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Email: </Text>
            {user.email}
          </Text>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Data Cadastro: </Text>
            {`${dataCadastro.getDate()}/${
              dataCadastro.getMonth() + 1
            }/${dataCadastro.getFullYear()}`}
          </Text>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Ultimo login: </Text>
            {`${dataUltimoLogin.getDate()}/${
              dataUltimoLogin.getMonth() + 1
            }/${dataUltimoLogin.getFullYear()}`}
          </Text>
        </View>
      </View>
    </View>
  );
}
