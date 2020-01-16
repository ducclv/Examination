import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    input: {
        backgroundColor: 'white',
        color: 'black',
        margin: 15,
        height: 40,
        width: Dimensions.get('screen').width - 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
    },
    passwordViewContainer: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        top: 25,
        right: 30,
        color: 'gray',
    },
    iconLeft: {
        alignSelf: 'center',
        marginLeft: 15,
    },
    iconRight: {
        alignSelf: 'center',
        marginRight: 15,
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    },
    submitButton: {
        backgroundColor: 'green',
        padding: 10,
        marginTop: 30,
        marginLeft: 130,
        height: 40,
        width: 120,
        borderRadius: 60,
        marginBottom: 60,
    },
    submitButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
    },
    linearGradient1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: '#9aca40',
    },
});