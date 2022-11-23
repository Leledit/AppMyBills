import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {globalStyles} from '../../styles/globalStyles';
import {prepararDadosDashboard} from '../../hooks/useDashboard';
export default function Dashboard() {
  const dadosDashboard = prepararDadosDashboard();
  let status = '';
  let totalDespesas =
    dadosDashboard.valorDespesasFixas +
    dadosDashboard.valorDespesasMes +
    dadosDashboard.valorDespesasParcela;
  if (dadosDashboard.totalReceita < totalDespesas) {
    status = 'Negativado';
  } else {
    status = 'Positivado';
  }
  return (
    <ScrollView style={styles.dashboard}>
      <View style={styles.dashboardContainer}>
        <Text style={[globalStyles.mainTitle, globalStyles.titleAlignCenter]}>
          Balanço
        </Text>
        <View>
          <View style={styles.dashboardInfos}>
            <Text style={styles.dashboardInfosTitle}>Quantidade</Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>Receitas: </Text>
              {dadosDashboard.qtdReceitas}
            </Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>Despesas Fixas: </Text>
              {dadosDashboard.qtdDespesasFixa}
            </Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>Despesas do mes: </Text>
              {dadosDashboard.qtdDespesasMes}
            </Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>
                Despesas Parcelada:{' '}
              </Text>
              {dadosDashboard.qtdDespesasParcela}
            </Text>
          </View>
          <View style={styles.dashboardInfos}>
            <Text style={styles.dashboardInfosTitle}>Valores Totais</Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>Receitas: </Text>
              {dadosDashboard.totalReceita}
            </Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>Despesas Fixas: </Text>
              {dadosDashboard.valorDespesasFixas}
            </Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>Despesas do mes: </Text>
              {dadosDashboard.valorDespesasMes}
            </Text>
            <Text style={globalStyles.textCamp}>
              <Text style={globalStyles.textCampLabel}>
                Despesas Parcelada:{' '}
              </Text>
              {dadosDashboard.valorDespesasParcela}
            </Text>
          </View>
        </View>
        <Text style={[globalStyles.textCamp, styles.dashInfoStatus]}>
          <Text style={globalStyles.textCampLabel}>Status conta: </Text>
          {status}
        </Text>
      </View>
    </ScrollView>
  );
}
