import { StyleSheet } from 'react-native';
import * as Colors from '../../themes/colors';
export default StyleSheet.create({
  container: { 
    flex: 1,  
    backgroundColor:Colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formSubmit: {
    alignSelf:'center',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 25,
    padding: 5,
    backgroundColor:Colors.yellow,
    color:Colors.black,
    borderRadius:10,
    borderWidth: 1,
    borderColor:Colors.black,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    marginBottom:20,
    width:'50%',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor:Colors.lightgrey,
    margin: 10,
    borderWidth: 1,
    borderRadius:5,
    color:Colors.white
  },
  valid: {
    borderColor:Colors.white,
  },
  invalid: {
    borderColor:Colors.red
  },
  loginFbText:{
    fontFamily: 'Arial', fontSize: 15,color:Colors.white,
  },
  headertitle:{
    fontWeight: 'bold',fontSize:50,color:Colors.white, textAlign: 'center',fontFamily: 'Helvetica',
  },
  iconStyle:{
    flex: 1,  
    marginTop:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pwd:{
    marginTop:20,padding:5,color:Colors.white,
  }

});
