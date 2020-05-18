import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Reuinions from './HomeScreen'

var width = Dimensions.get('window').width; //full width

export default class LinksScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      choosenDate: ''
    }


  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      choosenDate: moment(datetime).format(' D MMMM YYYY, HH:mm')
    })
  }
  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titre}>Merci de renseigner les champs suivants</Text>

        <TextInput
          placeholder='Lieu'
          style={styles.simpleInput}
        />

        <DateTimePickerModal
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode="datetime"
          is24Hour={false}
        />
        <TouchableOpacity
          style={styles.buttonDate}
          onPress={this.showPicker}>
          <Text style={styles.date}>choisir la date</Text>
        </TouchableOpacity>

        <Text style={{ color: '#ffcf99', fontSize: 20 }}>
          {this.state.choosenDate}
        </Text>

        <TextInput
          placeholder='Sujet de la reuinion'
          style={styles.simpleInput}
        />

        <TextInput
          placeholder='liste des participants '
          multiline={true}
          numberOfLines={4}
          style={styles.textAreaInput}
        />

        <TouchableOpacity
          style={styles.buttonSave}>           
          <Text style={styles.txtbutton}>Enregistrer</Text>
        </TouchableOpacity>

      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111d4a',
    alignItems: 'center',
  },
  simpleInput: {
    width: width - 40,
    marginTop: 30,
    borderRadius: 7,
    height: 40,
    borderColor: '#ffcf99',

    paddingHorizontal: 10,
    borderWidth: 1
  },

  buttonSave: {

    marginTop: 40,
    backgroundColor: '#92140c',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fff8f0',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  txtbutton: {
    color: '#fff8f0',
    fontSize: 18,
  },
  buttonDate: {
    marginTop: 10,

    borderRadius: 20,
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textAreaInput: {
    borderRadius: 7,
    width: width - 40,
    marginTop: 30,
    height: 100,
    borderColor: '#ffcf99',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 30
  },
  titre: {
    marginTop: 30,
    marginBottom: 25,
    fontSize: 20,
    color: '#ffcf99'

  },
  date: {
    fontSize: 20,
    color: '#ffcf99',
    width: 150

  }

});


