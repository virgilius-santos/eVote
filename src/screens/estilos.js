import {StyleSheet} from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
  }
    
});