import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("../Image/BG.jpg")}>
        <View style={styles.form}>
          <View>
            <Text style={styles.text}>EMAIL</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.text}>EMAIL</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
            <Text style={styles.bntTitle}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
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
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    height: 50,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  form: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#ff7f50",
    height: 40,
    borderRadius: 8,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  bntTitle: {
    color: "#fff",
    fontSize: 18,
  },
});
