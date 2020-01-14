import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    iconLeft: {
        alignSelf: 'center',
        marginLeft: 15,
    },
    iconRight:{
        alignSelf: 'center',
        marginRight: 15,
    },
    tabView: {
        flex: 1,
        //padding: 10,
    },
    linearGradient1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 10,
        backgroundColor: '#9aca40',
        // backgroundColor:'black'

    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        padding: 10,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
})