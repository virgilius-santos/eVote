import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BoxComponent = (/*{ endereco, navigation }*/) => (
//   <TouchableOpacity 
//     onPress={() => navigation.navigate(endereco)}
//   >
    <SafeAreaView>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        />
    </SafeAreaView>
    // {/* <Icon style={styles.icon} 
    //   name="ios-add-circle" size={80} 
    //   color="#00C551" 
    // /> */}
//   </TouchableOpacity>
);

const data =
    [
        { id: "00", name: "Relâmpago McQueen" },
        { id: "01", name: "Agente Tom Mate" },
        { id: "02", name: "Doc Hudson" },
        { id: "03", name: "Cruz Ramirez" }
    ];

const styles = StyleSheet.create({
  icon: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
});

export default BoxComponent;

// BotaoNovaSala.propTypes = {
//   endereco: PropTypes.string.isRequired,
//   navigation: PropTypes.object.isRequired
// }