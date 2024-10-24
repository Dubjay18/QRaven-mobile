import { Button, ButtonText } from "@/components/ui/button";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { View } from "react-native";
import { Dimensions, Image, ImageBackground, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
var { width, height } = Dimensions.get("screen");

function onboarding() {
  const swiperRef = useRef(null); // Reference to the Swiper
  const router = useRouter();
  const handleNextSlide = () => {
    // Scroll to the next slide\
    if (swiperRef.current) {
      (swiperRef.current as any).scrollBy(1); // Move forward by 1 slide
    }
  };
  const onboardingScreens = [
    {
      image: require("@/assets/images/onboard1.jpg"),
      title: "Grab all events now only in your hands",
      description:
        "Qraven is here to help you find the best events based on your events.",
    },
    {
      image: require("@/assets/images/onboard2.jpg"),
      title: "Easy payment & fast event ticket",
      description:
        "Qraven is here to help you find the best events based on your events.",
    },
    {
      image: require("@/assets/images/onboard3.jpg"),
      title: "Let's go to your favourite event now",
      description:
        "Qraven is here to help you find the best events based on your events.",
    },
  ];
  return (
    <>
      <Swiper loop={false} ref={swiperRef} showsPagination={false}>
        {onboardingScreens.map((page, index) => (
          <ImageBackground
            key={index}
            source={page.image}
            style={styles.imageBackground}
          >
            <View style={styles.overlay}>
              <View className="absolute top-16 left-5 bg-white rounded-full">
                <Image
                  source={require("@/assets/images/app-icon-nobg.png")}
                  style={{
                    width: 70,
                    height: 70,
                  }}
                  alt="logo"
                />
              </View>
              <View className="absolute left-3 bottom-14 p-4">
                <Text
                  className="font-poppins-semibold font-semibold "
                  size="4xl"
                >
                  {page.title}
                </Text>
                <Text className="text-neutral-400 my-5 font-poppins-regular text-lg">
                  {page.description}
                </Text>
                {index < onboardingScreens.length - 1 ? (
                  <Button size="lg" onPress={handleNextSlide}>
                    <ButtonText>Next</ButtonText>
                  </Button>
                ) : (
                  <HStack space="md" reversed={false}>
                    <Button
                      size="xl"
                      className="flex-1"
                      action="secondary"
                      onPress={() => {
                        router.push("/login");
                      }}
                    >
                      <ButtonText>Login</ButtonText>
                    </Button>
                    <Button
                      size="xl"
                      className="flex-1"
                      onPress={() => {
                        router.push("/(auth)/signup");
                      }}
                    >
                      <ButtonText>Signup</ButtonText>
                    </Button>
                  </HStack>
                )}
              </View>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </>
  );
}
const styles = StyleSheet.create({
  imageBackground: {
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darken the background image

    borderRadius: 10,
    position: "relative",
    paddingBottom: 80,
    paddingTop: 70,
    height: "100%",
    width: "100%",
    bottom: 0,
  },
  title: {
    color: "#fff",
    fontSize: 40,
  },
});

export default onboarding;
