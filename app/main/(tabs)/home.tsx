import TicketCard from "@/components/TicketCard";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import EventCard from "@/components/ui/EventCard";
import { Heading } from "@/components/ui/heading";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { Link } from "expo-router";
import { BellIcon } from "lucide-react-native";
import React from "react";
import { Dimensions, FlatList, ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

var { width, height } = Dimensions.get("screen");

export default function home() {
  const safe = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: safe.top,
        paddingBottom: safe.bottom,
        paddingLeft: safe.left,
        paddingRight: safe.right,
      }}
    >
      <VStack space="lg" className="px-4 pt-3">
        <HStack space="2xl">
          <HStack space="md">
            <Avatar size="md">
              <AvatarFallbackText>Jane Doe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
              />
              <AvatarBadge />
            </Avatar>
            <VStack
              space="xs"
              className=""
              style={{
                width: width - 150,
              }}
            >
              <Text className="font-semibold font-poppins-semibold">
                Hi, Tijani
              </Text>
              <Text className="text-sm">
                <Text className="text-neutral-400 font-poppins-regular">
                  Find your favourite events
                </Text>
              </Text>
            </VStack>
          </HStack>
          <Icon as={BellIcon} size="xl" className="" />
        </HStack>
        <VStack space="md">
          <Heading size="xl" className="font-semibold font-poppins-semibold">
            Your Ticket Events
          </Heading>
          <ScrollView
            className="mt-6"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row gap-4">
              <TicketCard
                date="12"
                location="New York"
                eventName="New York Fashion Week"
                tickets="2"
                time="12:00 PM"
              />
              <TicketCard
                date="12"
                location="New York"
                eventName="New York Fashion Week"
                tickets="2"
                time="12:00 PM"
              />
            </View>
          </ScrollView>
        </VStack>
        <VStack>
          <HStack className="flex-row justify-between items-center mt-6 px-3 max-w-[400px]">
            <Text className="font-poppins-regular text-lg">More Events</Text>
            <View>
              <Link href={"/"} className="text-primary-0">
                View all
              </Link>
            </View>
          </HStack>
          <FlatList
            data={[
              {
                id: "1",
                name: "$1000 Giveaway Event Point 29- 30",
                date: "July 31, 10.00PM",
                ticketPrice: "10.29",
              },
              {
                id: "2",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "3",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "4",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "5",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "6",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "7",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "8",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "9",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
              {
                id: "10",
                name: "$1000 Giveaway",
                date: "12",
                ticketPrice: "Free",
              },
            ]}
            scrollEnabled={true}
            keyExtractor={(item) => item.id}
            className="pb-44 "
            style={{
              maxHeight: height / 2,
            }}
            renderItem={({ item }) => (
              <EventCard
                date={item.date}
                name={item.name}
                ticketPrice={item.ticketPrice}
              />
            )}
          />
        </VStack>
      </VStack>
    </View>
  );
}
