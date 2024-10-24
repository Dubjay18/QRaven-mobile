import MenuItem from "@/components/MenuItem";
import { Icon } from "@/components/ui/icon";
import {
  Bell,
  Calendar,
  LogOut,
  MessageCircle,
  Shield,
  Ticket,
  TicketCheck,
} from "lucide-react-native";
import React from "react";
import { Dimensions, FlatList, Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

let { width, height } = Dimensions.get("window");

export default function profile() {
  const safeArea = useSafeAreaInsets();
  const upperMenuData = [
    {
      label: "Calendar",
      icon: <Icon as={Calendar} size="xl" />,
      onPress: () => {},
    },
    {
      label: "Message Center",
      icon: <Icon as={MessageCircle} size="xl" />,
      onPress: () => {},
    },
  ];
  const lowerMenuData = [
    {
      label: "Notifications",
      icon: <Icon as={Bell} size="xl" />,
      onPress: () => {},
    },
    {
      label: "Payments",
      icon: <Icon as={TicketCheck} size="xl" />,
      onPress: () => {},
    },
    {
      label: "Privacy Policy",
      icon: <Icon as={Shield} size="xl" />,
      onPress: () => {},
    },
    {
      label: "Logout",
      icon: <Icon as={LogOut} size="xl" />,
      onPress: () => {},
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        paddingTop: safeArea.top,
      }}
      className="bg-background p-5"
    >
      <View className="mt-10 items-center gap-4">
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={{
            width: 104,
            height: 104,
            borderRadius: 102,
          }}
        />
        <Text className="text-white text-xl ">Tijani G.</Text>
      </View>
      <View className="flex-row gap-5 justify-around mt-10">
        <View className="items-center">
          <Text className="text-white text-xl">12</Text>
          <Text className="text-neutral-400">Events</Text>
        </View>
        <View className="items-center">
          <Text className="text-white text-xl">8,000</Text>
          <Text className="text-neutral-400">Followers</Text>
        </View>
        <View className="items-center">
          <Text className="text-white text-xl">125</Text>
          <Text className="text-neutral-400">Following</Text>
        </View>
      </View>
      <View className="h-10" />
      <FlatList
        data={upperMenuData}
        className="h-10"
        renderItem={({ item: { label, icon, onPress } }) => (
          <MenuItem label={label} icon={icon} onPress={onPress} />
        )}
        ItemSeparatorComponent={() => <View className="h-4" />}
        ListFooterComponent={() => (
          <View className="h-3 w-full border-t mt-3 border-input" />
        )}
      />
      <FlatList
        data={lowerMenuData}
        renderItem={({ item: { label, icon, onPress } }) => (
          <MenuItem label={label} icon={icon} onPress={onPress} />
        )}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </View>
  );
}
