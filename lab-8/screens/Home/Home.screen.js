import React, { useState, useCallback } from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './Home.styles';

function HomeScreen() {
  const [urlHistory, setUrlHistory] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(null);

  const onOpenUrl = useCallback((url, urlLabel) => {
    setUrlHistory([
      ...urlHistory,
      urlLabel,
    ]);
    setCurrentUrl(url);
    setTimeout(() => setCurrentUrl(null), 10000)
  }, [urlHistory]);

  const onClearHistory = useCallback(() => {
    setUrlHistory([]);
  }, [setUrlHistory]);

  if (currentUrl) {
    return <WebView source={{ uri: currentUrl }} />;
  }

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
          title="Telegram"
          onPress={() => onOpenUrl('https://t.me/elaray', 'Telegram')}
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
