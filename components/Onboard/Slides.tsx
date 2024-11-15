import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ReusableText from "@/components/ui/ReusableText";
import { Colors } from "@/constants/Colors";
import { FontSizes } from "@/constants/Fonts";
import styles from "./slides.style";

interface SlideProps {
  item: {
    image: any;
    header: string;
    title: string;
  };
  navigation: any;
  activeSlide: number;
}

const Slides: React.FC<SlideProps> = ({ item, navigation, activeSlide }) => {
  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < 3; i++) {
      dots.push(
        <View
          key={i}
          style={{
            width: i === activeSlide ? 25 : 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 5,
            backgroundColor:
              i === activeSlide ? Colors.light.black : Colors.light.white,
            borderWidth: 0.5,
            borderColor: Colors.light.description,
          }}
        />
      );
    }
    return dots;
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.stack}>
        <View style={styles.columnGap}>
          <ReusableText
            text={item.header}
            family="bold"
            size={FontSizes.large}
            color={Colors.light.black}
          />
          <ReusableText
            text={item.title}
            family="medium"
            size={FontSizes.small}
            color={Colors.light.description}
            align="center"
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Login")}
          >
            <AntDesign name="arrowright" size={20} color={Colors.light.white} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Bottom")}
            style={styles.continueText}
          >
            <ReusableText
              text={"giriş yapmadan devam et"}
              family="regular"
              size={FontSizes.small}
              color={Colors.light.description}
            />
          </TouchableOpacity>
          <View style={styles.dotsContainer}>{renderDots()}</View>
        </View>
      </View>
    </View>
  );
};

export default Slides;
