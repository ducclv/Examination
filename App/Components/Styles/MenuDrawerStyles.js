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
    modal: {
        backgroundColor: 'white',
    },
    titleModal: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 20,
        margin: 20,
    },
    txtModal:{
        color: 'gray',
        marginLeft: 20,
        fontSize: 15,
    },
    txtInforModal:{
        fontSize:14,
        marginLeft: 20,
        margin: 5
    },
    closeModal:{
        margin: 20,
    },
    txtCloseModal:{
        color: 'blue',
        fontWeight:'bold',
        fontSize: 18,
    },
    rowModal: {
        flexDirection: 'row',
        backgroundColor:'white'
    },
    txtSingOutModal:{
        color: 'red',
        fontWeight:'bold',
        fontSize: 18,
    },
    SignOutModal:{
        marginLeft: 140,
        marginTop: 20,
    },
}
);
