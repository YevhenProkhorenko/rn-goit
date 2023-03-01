import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("../Image/BG.jpg")}>
        {/* <Text style={styles.text}>Registration</Text> */}
        <TextInput style={styles.input} textAlign={"center"} />
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: "#E8E8E8",
    marginHorizontal: 20,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  form: {
    flex: 1,
    alignItems: "start",
  },
});
