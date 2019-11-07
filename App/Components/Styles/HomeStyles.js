import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    head: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    body: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
    },
    icon: {
        width: 40,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 40,
        marginRight: 280,
        marginTop: 30,
    },
    txt: {
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 25,
        color: 'white',
    },
    bglogo: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    logo: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 30,
    },
    title: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 20,
    },
    iconButtom: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleButtom: {
        width: 90,
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        marginTop: -15,
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
});