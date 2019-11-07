import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E7DCDC',
        alignItems: 'center',
    },
    img: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    containerstyle: {
        backgroundColor: 'gray',
        justifyContent: 'space-around',
    },
    tracuu: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 100,
        marginRight: 10,
        marginLeft: 10,
        marginTop: -30,
    },
    row: {
        flexDirection: 'row',
    },
    kiennghi: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 100,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 20,
    },
    txt: {
        color: 'gray',
        width: 80,
        textAlign:'center',
    },
});
