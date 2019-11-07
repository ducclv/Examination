import {
    StyleSheet,
    Dimensions,
} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#ffe6e6',
    },
    bg: {
        width: Dimensions.get('window').width,
        height: 180,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawer: {
        width: 24,
        marginTop: 30,
    },
    home: {
        width: 24,
        marginTop: 30,
        marginLeft: Dimensions.get('window').width - 90,
    },
    travel: {
        backgroundColor: 'red',
        justifyContent: 'center',
        width: 150,
        height: 50,
        borderRadius: 20,
        marginTop: -25,
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    txt: {
        textAlign: 'center',
        color: 'gray',
        marginTop:5,
        width: 60,
    },
    btn: {
        backgroundColor:'white',
        marginTop: 20,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 120,
        marginLeft:8,
        marginRight:8,

    }
});