import {  Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems:'center',
    },
    scrollView:{
    },
    bglogo: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height-24,
    },
    logo: {
      flexDirection:'column',
      alignItems: 'center',
      width: 100,
      height: 100,
      marginTop: 60,
    },
    passwordViewContainer: {
      flexDirection: 'row'
    },
    icon: {
      position: 'absolute',
      top: 25,
      right: 10,
      color: 'gray',
    },
    title: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 26,
      marginBottom: 30,
      marginTop:30,
    },
    searchIcon: {
      padding: 10,
    },
    input: {
      color: 'white',
      margin: 15,
      height: 40,
      width: 310,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
    },
    submitButton: {
      backgroundColor: 'white',
      padding: 10,
      marginTop: 40,
      height: 40,
      width: 120,
      borderRadius: 60,
    },
    submitButtonText: {
      color: 'blue',
      textAlign: 'center',
      fontWeight: "bold",
    },
    txt: {
      textAlign: 'center',
      color: 'white',
    },
    btnSignup: {
      color: 'coral',
      paddingLeft: 5,
    },
    signup: {
      marginTop: 30,
      flexDirection: 'row',
      
    },
    forgetButton: {
      marginLeft: 250,
      flexDirection: 'row',
      
    },
    forgetButtonText: {
      fontSize: 12,
      color: 'white',
    }
  });
  