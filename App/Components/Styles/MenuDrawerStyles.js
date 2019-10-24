import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        backgroundColor: 'white',
    },
    row: {
        flexDirection: 'row',
        marginLeft: 25,
    },
    title: {
        marginTop: 5,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    infor: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    home: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    setting: {
        width: 250,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    bgw:{
        width: 250,
        height: 150,
    },
    icon: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 40,
        marginTop: 60,
        marginRight: 180,
    },
    txt: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25,
        color: 'white',
    },
}
);
