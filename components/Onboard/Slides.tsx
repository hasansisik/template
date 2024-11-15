import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "@/components/ui/ReusableText";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/Fonts";
import HeightSpacer from "@/components/ui/HeightSpacer";
import styles from "./slides.style";

interface SlideProps {
  item: {
    image: any;
    header: string;
    title: string;
  };
  navigation: any;
}

const Slides: React.FC<SlideProps> = ({ item, navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <ReusableText
          text={item.header}
          family="bold"
          size={FontSizes.large}
          color={Colors.light.black}
        />
        <HeightSpacer height={10} />
        <ReusableText
          text={item.title}
          family="medium"
          size={FontSizes.small}
          color={Colors.light.description}
        />
        <HeightSpacer height={125} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign name="arrowright" size={20} color={Colors.light.white} />
        </TouchableOpacity>
        <HeightSpacer height={30} />
        <TouchableOpacity onPress={() => navigation.navigate("Bottom")}>
          <ReusableText
            text={"giriş yapmadan devam et"}
            family="regular"
            size={FontSizes.small}
            color={Colors.light.description}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slides;
