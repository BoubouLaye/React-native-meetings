import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'

export default function HomeScreen() {


  return (


    <View style={styles.container}>

      <SafeAreaView style={styles.container}>

        <FlatList
          data={Reuinions}
          style={styles.liste}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <Item reunion={item} />}
        />
      </SafeAreaView>

    </View>



  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111d4a'


  },
  item: {

    backgroundColor: '#111d4a',
    borderWidth: 3,
    borderColor: '#e63946',
    borderWidth: 1,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 7


  },
  title: {
   
    color: '#fff8f0'
  },
  liste: {
    marginTop: 15
  },



});


function Item({ reunion }) {
  return (

    <View style={styles.item}>

      <Text style={styles.title}>{reunion.title}</Text>
      <Text style={styles.title}>Date : {reunion.date}</Text>
      <Text style={styles.title}>Salle : {reunion.salle}</Text>
      <View style={{alignItems: 'flex-end'}}>
      <Icon
        name='delete'
        color='red'        
      />
      </View>
    </View>
  );
}

const Reuinions = [
  {
    id: '1',
    title: 'echanges commerciaux',
    date: '17 april 2020',
    salle: '2',
    participants: ''

  },
  {
    id: '2',
    title: 'reconstitution du personnel',
    date: '17 april 2020',
    salle: '2',
    participants: ''
  },
  {
    id: '3',
    title: 'payement des factures',
    date: '17 april 2020',
    salle: '2',
    participants: ''
  },
  {
    id: '4',
    title: 'emploi du temps',
    date: '17 april 2020',
    salle: '2',
    participants: ''
  },
  
   
];

