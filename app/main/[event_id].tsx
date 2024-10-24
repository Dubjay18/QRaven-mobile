import LikeButton from "@/components/LikeButton";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";

import { Text } from "@/components/ui/text";
import { Stack } from "expo-router";
import { Share } from "lucide-react-native";
import React from "react";
import { Image, ImageBackground, TouchableOpacity, View } from "react-native";

export default function event() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={require("@/assets/images/qraven-logo.png")}
          style={{
            height: 250,
            width: "100%",
            bottom: 0,
            left: 0,
            position: "absolute",
          }}
          alt="header"
        />
      }
      headerBackgroundColor={{
        dark: "black",
        light: "white",
      }}
    >
      <Stack.Screen
        options={{
          title: "New york tijani show 2024",
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTintColor: "white",
          headerRight: () => (
            <HStack space="md">
              <LikeButton />
              <TouchableOpacity>
                <Icon as={Share} size="md" color="white" />
              </TouchableOpacity>
            </HStack>
          ),
        }}
      />
      <Text size="3xl" className="font-poppins-semibold font-semibold">
        New york tijani show 2024
      </Text>
      <Text className="font-medium font-poppins-medium" size="lg">
        About us
      </Text>
      <Text size="md" className="font-poppins-regular">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eaque
        explicabo id sint sit tempore repudiandae pariatur magnam, corporis
        corrupti ut sequi minus omnis culpa distinctio dolor placeat commodi
        unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Fugiat eaque explicabo id sint sit tempore repudiandae pariatur magnam,
        corporis corrupti ut sequi minus omnis culpa distinctio dolor placeat
        commodi unde!
      </Text>
    </ParallaxScrollView>
  );
}
