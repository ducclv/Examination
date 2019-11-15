import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#E7DCDC',
        // alignItems: 'center',
    },
    row: {
        height:1,
        width: Dimensions.get('screen').width-20,
        backgroundColor:'gray',
        opacity: 0.2,
        marginLeft: 10,
    },
    containerstyle:{
        backgroundColor:'gray'
    },
    input:{
        marginLeft: 10,
        marginTop: 20,
    },
    search:{
       justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop: 50,
        backgroundColor: 'red',
        height: 50,
        // width: 50,
    }

});
