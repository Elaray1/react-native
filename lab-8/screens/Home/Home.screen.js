import React, { useState, useCallback } from 'react';
import { Text, View, Linking, TouchableOpacity, Button } from 'react-native';

import styles from './Home.styles';

function HomeScreen() {
  const [urlHistory, setUrlHistory] = useState([]);

  const onOpenUrl = useCallback((url, urlLabel) => {
    setUrlHistory([
      ...urlHistory,
      urlLabel,
    ]);
    Linking.openURL(url);
  }, [urlHistory, setUrlHistory]);

  const onClearHistory = useCallback(() => {
    setUrlHistory([]);
  }, [setUrlHistory]);

  return (
    <View style={styles.container}>
      <View style={styles.urlHistory}>
        <Text>{urlHistory.join(', ')}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Button
          title="VK"
          onPress={() => onOpenUrl('https://vk.com/elaray', 'VK')}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Button
          title="LinkedIn"
          onPress={() => onOpenUrl('https://www.linkedin.com/in/egor-emelyanov-33a2101a0/', 'LinkedIn')}
          color="#fff"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
      >
        <Button
          title="GitHub"
          onPress={() => onOpenUrl('https://github.com/Elaray1', 'Github')}
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.clearButton]}
        activeOpacity={0.7}
      >
        <Button
          title="Clear History"
          onPress={onClearHistory}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen;
