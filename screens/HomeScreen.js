import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';

export default function HomeScreen () {

  
    return (

     <View style={styles.container}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.titre}>Liste des Reuinions</Text>
            <FlatList
              data={Reuinions}
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
    marginTop: 30,


  },
  item: {
    alignItems: 'center',
    backgroundColor: '#f2e9e4',
    borderColor: '#5bc0be',
    borderWidth: 1,
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 16,
    borderRadius: 5

  },
  title: {
    fontSize: 25,
  },

  titre: {
    color: 'black',
    marginTop: 40,
    marginBottom: 30,
    fontSize: 40,
    marginLeft: 30
  },
  linearGradient: {
    flex: 1,


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


