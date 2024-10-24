import React from "react";
import { Dimensions, View } from "react-native";
import { Image } from "./ui/image";
import { Text } from "./ui/text";
import { Box } from "./ui/box";

var { width } = Dimensions.get("window");

function TicketCard({
  eventName,
  time,
  location,
  date,
  tickets,
}: {
  eventName: string;
  time: string;
  location: string;
  date: string;
  tickets: string;
}) {
  return (
    <View
      className="bg-input w-full flex-1  p-5 rounded-2xl"
      style={{
        minWidth: width - 40,
      }}
    >
      <View className="flex-row items-center gap-4">
        <Image
          className="h-10 w-10 rounded-lg"
          source={require("@/assets/images/qraven-logo.png")}
          alt="qraven"
        />
        <Text className="font-semibold font-poppins-regular" size="lg">
          Event Name
        </Text>
      </View>
      <View className="relative flex-row mt-5 w-full">
        <View className="rounded-full h-10 w-10 bg-black absolute z-10 -left-8" />

        <Text
          className="text-sm text-neutral-600 absolute "
          style={{
            left: 60,

            top: 10,
          }}
        >
          - - - - - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <View className="rounded-full h-10 w-10 bg-black absolute -right-8" />
      </View>
      <View className="flex-row items-center mt-10 justify-between">
        <View className=" items-center gap-1">
          <Text className="text-sm text-neutral-600 font-poppins-regular">
            Time
          </Text>
          <Text className="font-poppins-regular  text-lg">{time}</Text>
        </View>
        <View className=" items-center gap-1">
          <Text className="text-sm text-neutral-600 font-poppins-regular">
            Location
          </Text>
          <Text className="text-sm font-poppins-regular">{location}</Text>
        </View>
        <View>
          <View className="rounded-full bg-black px-3 py-2 mt-4">
            <Text className="text-base font-semibold font-poppins-semibold">
              Vip ticket x10
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default TicketCard;
