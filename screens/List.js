/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('screen').width;

 const List = props => {
  return (
    <View style={styles.container}>
      <View style={styles.genreCard}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
     </View> 
  ); 
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: width - 20,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
    shadowOffset: {
      width: 1,
      height: 13,
    },
    elevation: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'rgba(211, 209, 238, 0.5)',
    shadowOpacity: 0.8,
    shadowRadius: 15,
    backgroundColor: 'white',
  },
  genreCard: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
  },
  title: {
    color: '#333333',
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
  },
});

export default List;