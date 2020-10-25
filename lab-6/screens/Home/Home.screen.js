import React, { useState, useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import * as FileSystem from 'expo-file-system';

// import studentsData from '../../assets/data.json';
import styles from './Home.styles';


function HomeScreen() {

  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      setData(await FileSystem.readAsStringAsync('file:///C:/Users/mrred/Desktop/react-native/lab-6/assets/data.json', {}));
    })();
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>

    </View>
  );
}

export default HomeScreen;
