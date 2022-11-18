import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  containerReceitas: {
    flex: 1,
  },
  receitaCabecalho: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: '10%',
    paddingBottom: 15,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  receitaCabecalhoTitulo: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.4)',
    marginTop: 5,
  },
  receitasItens: {
    width: '80%',
    marginLeft: '10%',
    marginTop: 30,
  },
  receitasItensNoReceitas: {
    color: '#FFC311',
    fontSize: 18,
    textAlign: 'center',
    display: 'none',
  },
  receitasIten: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  receitasItenInfos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 14,
    fontSize: 18,
  },
  receitasItenInfoLabel: {
    fontSize: 19,
    color: '#FFC311',
  },
});
