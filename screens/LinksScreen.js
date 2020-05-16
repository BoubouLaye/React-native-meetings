import * as React from 'react';
import { StyleSheet, Text,   View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
var width = Dimensions.get('window').width; //full width



export default class LinksScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible : false,
      choosenDate:''
    }
  }
 
    
     
  render() {
  return (
    <View style={styles.container}>       
       <Text style={styles.titre}>Merci de renseigner les champs suivants</Text>
          <TextInput
            placeholder='Lieu'          
            style={styles.simpleInput}
            />  
        
          <TextInput
            placeholder='Sujet de la reuinion'
            style={styles.simpleInput}
            />

          
          <TextInput
            placeholder='liste des participants '
            multiline = {true}
            numberOfLines = {4}
            style={styles.textAreaInput}
            />    
          <TouchableOpacity
            style={styles.buttonSave}>
            <Text>Enregistrer</Text>
          </TouchableOpacity>
      </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  simpleInput: {
    width: width - 40,
    marginTop: 30,
    borderRadius:7,
    height: 40, 
    borderColor: '#7f8c8d', 
    paddingHorizontal: 10,
    borderWidth: 1
  },

  buttonSave: {
    marginTop:40,
    backgroundColor: '#27ae60',
    borderRadius: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonDate: {
    marginTop:10,
    
    borderRadius: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAreaInput: {
    borderRadius:7,
    width: width - 40,
    marginTop: 30,
    height: 100, 
    borderColor: '#7f8c8d', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  titre: {
    marginTop :50,
    marginBottom: 40,
    fontSize:20,
   
  },
  
});
