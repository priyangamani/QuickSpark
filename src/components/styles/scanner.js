import { StyleSheet } from 'react-native';
import * as Colors from '../../themes/colors';
export default StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderColor:Colors.lightgrey,
    margin: 10,
    borderWidth: 1,
    borderRadius:5,
    color:Colors.black
  },
  valid: {
    borderColor: Colors.black,
  },
  invalid: {
    borderColor: Colors.red
  },
  container: {
    flex: 1,
    backgroundColor:Colors.ash,
  },
  actionButtonIcon: {
    fontSize: 25,
    height: 22,
    color:Colors.white,
    fontWeight: '500'
  },
  viewcontainer:{
   justifyContent:'center',
   backgroundColor: Colors.white
  },
  section: {
    alignItems: 'center',
    marginTop: 10,
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  btnContainer: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    marginTop: 10,
    borderColor: Colors.pink,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.pink,
  },
  titleText: {
    fontWeight: 'bold', padding:5,fontSize:20,color:Colors.lightgrey, textAlign: 'center',marginBottom:10
  },
 text:{
  textAlign: 'left', 
  fontWeight: 'bold',
  fontSize: 18,
  marginTop: 20,
  marginLeft:10
 },
 flexQR:{
  flexDirection: 'row',
  justifyContent:'center',backgroundColor:Colors.white,marginBottom:30
 },
 generateQR: {
  alignSelf: 'flex-end',
  fontWeight: 'bold',
  fontSize: 15,
  marginTop: 25,
  padding: 5,
  backgroundColor: Colors.green,
  color:Colors.white,
  borderRadius:19,
  borderWidth: 1,
  borderColor:Colors.white,
  lineHeight: 30,
  textAlign: 'center',
  width: 300,
},
activityIndicator: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: 80,
  marginTop:20
}
 
});
