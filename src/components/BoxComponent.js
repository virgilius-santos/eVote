import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity, FlatList, SafeAreaView, Text, View } from 'react-native';


export default class BoxComponent extends React.Component {
  constructor(props){BoxComponent
    super(props);
  }

  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" }, 
      {color:"#333333"}]
  }
}