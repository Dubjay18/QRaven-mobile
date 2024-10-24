import React from "react";
import { Card } from "./card";
import { Heading } from "./heading";
import { Text } from "./text";
import { HStack } from "./hstack";
import { Image } from "./image";
import { VStack } from "./vstack";
import LikeButton from "../LikeButton";
import { Pressable, View } from "react-native";
import { Icon } from "./icon";
import { CalendarIcon } from "lucide-react-native";
import { Link } from "expo-router";

export default function EventCard({ id, name, date, ticketPrice }: TEvent) {
  return (
    <Link href={`/main/${id}`} asChild>
      <Pressable className="flex-1">
        <Card size="lg" variant="elevated" className="m-3 bg-input">
          <HStack space="lg">
            <Image
              source={require("@/assets/images/qraven-logo.png")}
              className="rounded-lg"
              alt="qraven"
              size="md"
            />
            <VStack space="xl">
              <HStack space="md">
                <Heading
                  //   isTruncated
                  size="lg"
                  className="font-semibold min-w-[200px] font-poppins-semibold max-w-[220px]"
                >
                  {truncateEventName(name)}
                </Heading>
                <LikeButton />
              </HStack>
              <HStack space="4xl" className="w-[84%]">
                <View className="flex-row items-center gap-2  ">
                  <Icon
                    as={CalendarIcon}
                    size="sm"
                    className="text-neutral-600"
                  />
                  <Text className="text-sm font-poppins-regular text-neutral-600">
                    {date}
                  </Text>
                </View>
                <Text className="font-poppins-regular ml-auto">
                  #{ticketPrice}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Card>
      </Pressable>
    </Link>
  );
}
function truncateEventName(eventName: string): string {
  const maxChars = 27;
  if (eventName.length > maxChars) {
    return eventName.slice(0, maxChars) + "....";
  }
  return eventName;
}
