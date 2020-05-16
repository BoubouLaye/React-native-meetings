import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function HomeScreen() {


  return (


    <View style={styles.container}>
     
        <SafeAreaView style={styles.container}>
         
          <FlatList
            data={Reuinions}
            style={styles.liste}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Item title={item.title} />}
          />
        </SafeAreaView> 
      
    </View>



  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#111d4a'


  },
  item: {
    
    backgroundColor: '#111d4a',
    borderWidth:3,
    borderColor: '#e63946',
    borderWidth: 1,
    padding: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 7
    

  },
  title: {
    fontSize: 25,
    color:'#fff8f0'
  },
  liste: {
    marginTop:15
  },

 
  
});


function Item({ title }) {
  return (

    <View style={styles.item}>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const Reuinions = [
  {
    id: '1',
    title: 'echanges commerciaux',
  },
  {
    id: '2',
    title: 'reconstitution du personnel',
  },
  {
    id: '3',
    title: 'payement des factures',
  },
  {
    id: '4',
    title: 'emploi du temps',
  },
  {
    id: '5',
    title: 'mr gauthier',
  },
];


