import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        justifyContent: 'center',
        padding: 10,
        marginBottom: 25,
    },
    titleText: {
        fontSize: 27,
        fontWeight: "bold",
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 15
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#191970',
        fontSize: 15,
        marginBottom: 5,
        textAlign: 'center'
    },
    textInput: {
        width: 261,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: '#E5E7E9',
        borderRadius: 10,
    },
    mathOperationsContainer: {
        flexDirection: 'row',
        padding: 10,
        marginBottom: 25,
        marginTop: 10
    },
    mathIcons: {
        marginLeft: 45,
    },
    iconStyle: {
        borderWidth: 2,
        borderRadius: 50
    },
    eraseIconButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        marginLeft: 5
    },
    secondaryContainer: {
        marginBottom: 10
    }
});

export default styles;