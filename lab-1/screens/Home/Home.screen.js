import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

import styles from './Home.styles';

function HomeScreen() {
  const [isGreeting, setIsGreeting] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          onPress={() => setIsGreeting(!isGreeting)}
          title={isGreeting ?  'Say goodbye' : 'Say hello'}
          color="#fff"
        />
      </View>
      <Text
        style={styles.text}
      >
        {isGreeting !== null && (isGreeting ?  'Hi (づ｡◕‿‿◕｡)づ' : 'See you later |◔◡◉|')}
      </Text>
    </View>
  );
}

export default HomeScreen;
