import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, ButtonText } from "./ui/button";

enum eMode {
  View,
  Edit,
}

export default function ProfilePic({
  mode = eMode.Edit,
  defaultImage,
}: {
  mode?: eMode;
  defaultImage?: string;
}) {
  const [image, setImage] = useState(defaultImage || null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (mode === eMode.View) {
    return (
      <View style={styles.container}>
        {image && (
          <Image
            source={{ uri: image }}
            className="rounded-full"
            style={styles.image}
          />
        )}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {image ? (
        <Image
          source={{ uri: image }}
          className="rounded-full"
          style={styles.image}
        />
      ) : (
        <View style={styles.image} className="bg-input rounded-full"></View>
      )}
      <Button variant="link" onPress={pickImage}>
        <ButtonText>Add photo</ButtonText>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderRadius: 60,
    width: 100,
    height: 100,
  },
});
