import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black'
  },
  container: {
    flex: 1
  },
  section: {
    fontSize: 14,
    color: '#9E9E9E',
    paddingBottom: 5
  },
  label: {
    fontSize: 14,
    color: 'black',
    paddingLeft: 5,
  },
  content2: {
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    margin: 20,
    minHeight: 100,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginLeft: 40,
    paddingTop: 20,
  },
  containerFlatList: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 0.4,
    borderColor: '#e8e8e8',
    padding: 10,
    margin: 5,
    flexDirection:'row'
  }
})
