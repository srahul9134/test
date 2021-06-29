import React, { useState, useEffect, useRef } from "react";
import { View, Text,Image,StyleSheet,Touchable, TouchableOpacity } from 'react-native';
import { color } from "react-native-reanimated";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Profile({ route, navigation }) {

  const [list, setList] = useState([]);
  const [value,setValue] = useState([]);

  const saveValue = () =>{
      AsyncStorage.setItem('any_key_here',team);
      setList([]);
      alert('Data saved');    
  } 

  const getValue = () =>{
    AsyncStorage.getItem('any_key_here')
    .then((value)=>{
      setValue(value);
    })
  }

  const { title } = route.params;
  const { photo } = route.params;
  const { id } = route.params;
  const { code } = route.params;
  const { team } = route.params;
  const { role } = route.params;

  return (
    <View>
      <View style={{marginLeft:30,marginRight:30,borderRadius:20
        ,backgroundColor:"#5E56E7",height:35,marginTop:30,justifyContent: 'center',}}>
        <Text style={{alignSelf:"center",fontFamily: 'Montserrat-SemiBold',
    color: '#fff',fontSize:20}}>Profile</Text>
      </View>
      <Image style={styles.image} source={{uri:photo}}/>
      <View style={styles.profile}>
        <Text style={styles.info}>Account Id : {JSON.stringify(id)}</Text>
        <Text style={styles.info}>Country Code : {JSON.stringify(code)}</Text>
        <Text style={styles.info}>Team Name : {JSON.stringify(team)}</Text>
        <Text style={styles.info}>Fantasy Role : {JSON.stringify(role)}</Text>
      </View>
     
      <TouchableOpacity onPress={saveValue}>
      <View style={styles.button}>
        <Text style={{alignSelf:"center",fontFamily: 'Montserrat-SemiBold',
      color: '#fff',fontSize:20}}>Add to favourites</Text>
      </View>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={getValue}>
      <View style={styles.button}>
        <Text style={{alignSelf:"center",fontFamily: 'Montserrat-SemiBold',
      color: '#fff',fontSize:20}}>Show favourite Item</Text>
      </View>
      </TouchableOpacity>
      <Text style={styles.val}>{value}</Text>
    </View>
  ); 
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F7FF',
  },
  image:{
    height:200,
    marginLeft:30,
    marginRight:30,
    marginTop:30,
    borderRadius:20
  },
  info:{
    alignSelf:"center",
    fontSize:20,
    marginTop:10,
    color:"#FFF"
  },
  val:{
    alignSelf:"center",
    fontSize:20,
    marginTop:10,
   // color:"#FFF"
  },
  profile:{
    marginLeft:30,marginRight:30,
    borderRadius:20,
    backgroundColor:"#5E56E7",
    marginTop:30,
    justifyContent:'center',
    paddingBottom:20,
    borderColor:"black",
    borderBottomWidth:4,
    borderRightWidth:4
  },
  button:{
    marginLeft:30,marginRight:30,borderRadius:20
    ,backgroundColor:"grey",height:35,marginTop:30,justifyContent: 'center'
  }
});