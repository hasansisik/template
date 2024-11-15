import { Colors } from "@/constants/Colors";
import { Sizes } from "@/constants/Sizes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Sizes.screenWidth,
    height: '50%', 
  },
  stack: {
    width: Sizes.screenWidth,
    alignItems: "center",
    height: '50%',
  },
  columnGap:{
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 5,
  },
  footer:{
    alignItems: "center",
    position: "absolute",
    bottom: 0, 
    width: '100%',
    paddingBottom: 40, 
    gap: 20,
  },
  btn: {
    backgroundColor: Colors.light.primary,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50, // Space between title and button
  },
  continueText: {
    marginTop: 20, // Space between button and continue text
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20, // Space between continue text and dots
  },
});

export default styles;