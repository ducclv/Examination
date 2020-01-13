import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
    },
    input: {
      backgroundColor: 'white',
      color: 'black',
      margin: 15,
      height: 40,
      width: 310,
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
      color:'gray',
    },
    title: {
      alignContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      margin: 10,
      marginTop: 20,
    },
    gender: {
      flexDirection: "row",
      marginLeft: 15,
    },
    btnGender: {
      flexDirection: "row",
      paddingLeft: 30,
      fontSize: 18,
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
  });