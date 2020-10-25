import React, { useState, useEffect } from 'react';
import { Text, View, Button, ScrollView, Image, SafeAreaView, Modal, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import Constants from 'expo-constants';

import styles from './Home.styles';

// function HomeScreen() {
//   const [imagesList, setImagesList] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       if (Constants.platform.ios) {
//         const { status } = await MediaLibrary.requestPermissionsAsync();
//         if (status !== 'granted') {
//           alert('Sorry, we need camera roll permissions to make this work!');
//         } else {
//           const result = await MediaLibrary.getAssetsAsync({
//             first: 20,
//           });
//           const imagesList = result.assets.map((el) => {
//             if (el.width >= el.height) {
//               return {
//                 ...el,
//                 width: 300,
//                 height: el.height * 300 / el.width,
//               };
//             }
//             return {
//               ...el,
//               height: 300,
//               width: el.width * 300 / el.height,
//             };
//           });
//           setImagesList(imagesList);
//         }
//       }
//     })();
//   }, []);


//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         style={{ width: '100%' }}
//         contentContainerStyle={styles.scrollView}
//       >
//         {imagesList && imagesList.map((el, index) => {
//           return (
//               <TouchableOpacity key={index} onPress={() => { setSelectedImage(el); setModalVisible(true) }}>
//                 <Image
//                   key={index}
//                   source={{ uri: el.uri }}
//                   style={{ ...styles.image, width: el.width, height: el.height }}
//                 />
//               </TouchableOpacity>
//           );
//         })}
//       </ScrollView>
//       {modalVisible &&
//         <Modal
//           animationType="slide"
//           transparent={true}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//               <TouchableOpacity onPress={() => { setSelectedImage(null); setModalVisible(false) }}>
//                 <Image
//                   source={{ uri: selectedImage.uri }}
//                   style={{ ...styles.image, width: selectedImage.width * 1.5, height: selectedImage.height * 1.5 }}
//                 />
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal>}
//     </SafeAreaView>
//   );
// }

function HomeScreen() {

  const [image, setImage] = useState(null);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.cancelled) {
      let width;
      let height;
      if (result.width >= result.height) {
        width = 300;
        height = result.height * width / result.width;
      } else {
        height = 300;
        width = result.width * height / result.height;
      }
      setSize({ width, height });
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Pick an image" onPress={pickImage} color="#fff" />
      </View>
      {image && <Image source={{ uri: image }} style={{ width: size.width, height: size.height }} />}
    </View>
  );
}

export default HomeScreen;
