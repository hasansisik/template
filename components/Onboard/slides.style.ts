
import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Sizes.screenWidth,
    height: '100%',
  },
  stack: {
    position: "absolute",
    bottom: 0,
    marginBottom: 60,
    marginHorizontal: 30,
    alignItems: "center",
  },
  btn: {
    backgroundColor: Colors.light.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;