import {StyleSheet} from 'react-native';
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLargeMargem: {
    margin: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSmallMargin: {
    width: '92%',
    marginLeft: '4%',
    flex: 1,
    justifyContent: 'center',
  },
  containerHerder: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  imgDisplay: {
    width: '100%',
    height: 300,
  },
  mainTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
  },
  defaltText: {
    marginTop: 5,
    fontSize: 16,
    color: 'rgba(0,0,0,0.4)',
  },
  spaceTop: {
    marginTop: 30,
  },
  titleAlignCenter: {
    textAlign: 'center',
  },
  textCamp: {
    width: '100%',
    fontSize: 18,
    marginTop: 30,
    lineHeight: 26,
  },
  textCampLabel: {
    fontSize: 20,
    color: '#FFC311',
  },
});
