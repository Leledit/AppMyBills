import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  despesasHeader: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '80%',
    marginLeft: '10%',
    paddingBottom: 15,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    marginBottom: 20,
  },
  receitaCabecalhoTitulo: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.4)',
    marginTop: 5,
  },
  containerDespesas: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 20,
  },
  tituloDespesa: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 30,
    borderBottomWidth: 1,
    width: 200,
    textAlign: 'center',
    paddingBottom: 8,
    borderColor: 'rgba(0,0,0,0.3)',
    marginBottom: 20,
  },
  btnArea: {
    alignItems: 'flex-end',
  },
  btnAreaLista: {
    width: '50%',
    marginBottom: 40,
    marginRight: 40,
    marginTop: -20,
  },
});
