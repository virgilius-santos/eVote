import {StyleSheet} from "react-native"

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
    innerContainer: {
        justifyContent: 'space-around'
    },
    title2: {
        alignSelf: 'center',
        color: '#9B9B9B',
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20
    }
});