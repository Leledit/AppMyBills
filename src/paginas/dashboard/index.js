import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Dashboard() {
  return (
    <View style={styles.dashboard}>
      <View style={styles.dashboardContainer}>
        <Text style={styles.dashboardTitle}>Balanço</Text>
        <View style={styles.dashInfos}>
          <Text style={styles.dashInfo}>
            <Text style={styles.dashInfoLabel}>Total Entradas: </Text>5
          </Text>
          <Text style={styles.dashInfo}>
            <Text style={styles.dashInfoLabel}>Total Saidas: </Text>5
          </Text>
          <Text style={styles.dashInfo}>
            <Text style={styles.dashInfoLabel}>Quantidade de parcelas: </Text>5
          </Text>
        </View>
        <View style={styles.dashInfoStatus}>
          <Text style={styles.dashInfo}>
            <Text style={styles.dashInfoLabel}>Status Mes: </Text>Postitiva
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    marginTop: 30,
  },
  dashboardContainer: {
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 20,
    width: '96%',
    marginLeft: '2%',
  },
  dashboardTitle: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
  },
  dashInfos: {
    marginLeft: 20,
    marginTop: 10,
  },
  dashInfo: {
    fontSize: 17,
    marginBottom: 12,
  },
  dashInfoStatus: {
    alignItems: 'flex-end',
    marginRight: 30,
    marginTop: 20,
  },
  dashInfoLabel: {
    color: '#FFC311',
  },
});
