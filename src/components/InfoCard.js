import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const InfoCard = ({ leftInfo, rightInfo }) => (
  <View
    style={styles.container}
  >
    <View style={styles.left}>
      <Text style={styles.leftInfo}>{leftInfo}</Text>
    </View>
    <View style={styles.right}>
      <Text style={styles.rightInfo}>{rightInfo}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 86,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#f1f1f1',
    shadowOffset: { width: -2, height: -2},
    shadowOpacity: 0.75,
    shadowRadius: 2,
    elevation: 6
  },
  left: {
    flex: 1,
    left: 0,
    justifyContent: 'center'
  },
  right: {
    flex: 1,
    right: 0,
    justifyContent: 'center'
  },
  leftInfo: {
    color: '#7500CF',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  rightInfo: {
    color: '#00C551',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
});

InfoCard.propTypes = {
  leftInfo: PropTypes.string.isRequired,
  rightInfo: PropTypes.string
}

export default InfoCard;
