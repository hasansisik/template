// Onboarding Screen
import { View, FlatList } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Slides from "@/components/Onboard/Slides";

interface Slide {
  id: number;
  image: any;
  header: string;
  title: string;
}

const Onboarding: React.FC = () => {
  const navigation = useNavigation();
  const [activeSlide, setActiveSlide] = useState(0);
  const slides: Slide[] = [
    {
      id: 1,
      image: require("../assets/images/onboarding/onboarding-1.png"),
      header: "Kurstanbula Hoşgeldiniz",
      title: "Ehliyet kursumuza hoş geldiniz! Siz de uygulama yardımıyla kayıt olun ve sürücü ehliyetinizi alın.",
    },
    {
      id: 2,
      image: require("../assets/images/onboarding/onboarding-2.png"),
      header: "Discover the world",
      title: "Discover the world",
    },
    {
      id: 3,
      image: require("../assets/images/onboarding/onboarding-3.png"),
      header: "Find the best Hotels in the world",
      title: "Find the best Hotels in the world",
    },
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <Slides item={item} navigation={navigation} activeSlide={activeSlide} />
        )}
        onScroll={(event) => {
          const slideIndex = Math.round(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setActiveSlide(slideIndex);
        }}
      />
    </View>
  );
};

export default Onboarding;