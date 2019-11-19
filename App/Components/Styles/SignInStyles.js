import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  scrollView: {
    flex: 1,
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
    marginTop: 60,
  },
  row: {
    flexDirection: 'row',
    justifyContent:'center',
    textAlign:'center',
    alignItems:'center',
  },
  icon: {
    position: 'absolute',
    right: 10,
    color: 'gray',
  },
  iconUser: {
    left: 15,
    color:'white',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 30,
    marginTop: 30,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    color: 'white',
    margin: 15,
    height: 40,
    width: 300,
  },
  line:{
    flexDirection:'row',
    height:1,
    width: 350,
    backgroundColor:'white',
    opacity: 0.2,
    marginTop: -10,
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
