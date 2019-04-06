import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15
  },
  flowButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  SegundaView: {
    justifyContent: 'flex-end'
  },
  PrimeiraView: {
    justifyContent: 'flex-start'
  },
  PrincipalView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  innerContainer: {
    flex: 0.9,
    justifyContent: 'space-around'
  },
  title2: {
    alignSelf: 'center',
    color: '#9B9B9B',
    fontSize: 16,
    marginTop: -10,
    marginBottom: 10,

  }
});