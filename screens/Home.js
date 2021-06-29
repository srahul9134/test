import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import List from './List';

const width = Dimensions.get('screen').width;


const url = 'https://api.opendota.com/api/proPlayers';

const Home = ({navigation}) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState();
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => response.json())
      .then(results => {
        setDetails(results);
        console.log(details);
        setLoading(false); 
      })
      .catch(err => {
        setLoading(false);
        setError(err);
      });
  }, []);

  let lists = details.map((item, key) => {

    
    return (
      <View>
        <TouchableOpacity
          style={{top: 20}}
          key={key}
          onPress={() => {
            navigation.navigate('Profile', {
              title: item.name,
              photo: item.avatarfull,
              id: item.account_id,
              team: item.team_name,
              code: item.loccountrycode,
              role: item.fantasy_role
            });
          }}>
          <List title={item.personaname} />
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Pattern.jpg')}
        style={{width: width}}>
        <View style={{marginLeft: 10, padding: 5}}>
          <Text style={styles.heading}>Pro Players (MBowser)</Text>
        </View>
      </ImageBackground>
      <ScrollView>{lists}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F7FF',
  },
  heading: {
    fontSize: 48,
    fontFamily: 'Montserrat-SemiBold',
    color: '#5E56E7',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#333333',
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 10,
  },
});

export default Home;