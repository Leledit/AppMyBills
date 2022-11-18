import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../styles/globalStyles';
export default function Dashboard() {
  return (
    <View style={styles.dashboard}>
      <View style={styles.dashboardContainer}>
        <Text style={[globalStyles.mainTitle, globalStyles.titleAlignCenter]}>
          Balanço
        </Text>
        <View style={styles.dashboardInfos}>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Total Entradas: </Text>5
          </Text>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>Total Saidas: </Text>5
          </Text>
          <Text style={globalStyles.textCamp}>
            <Text style={globalStyles.textCampLabel}>
              Quantidade de parcelas:{' '}
            </Text>
            5
          </Text>
        </View>
        <Text style={[globalStyles.textCamp, styles.dashInfoStatus]}>
          <Text style={globalStyles.textCampLabel}>Status conta: </Text>
          Postitiva
        </Text>
      </View>
    </View>
  );
}
