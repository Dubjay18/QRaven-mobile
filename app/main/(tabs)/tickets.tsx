import TabComp from "@/components/TabComp";
import TicketCard from "@/components/TicketCard";
import { Grid, GridItem } from "@/components/ui/grid";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { BellIcon } from "lucide-react-native";
import React from "react";
import { FlatList } from "react-native";
import { Dimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
var { width } = Dimensions.get("screen");
export default function tickets() {
  const safeArea = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: safeArea.top,
        paddingBottom: safeArea.bottom,
        paddingLeft: safeArea.left,
        paddingRight: safeArea.right,
      }}
    >
      <Grid
        _extra={{
          className: "grid-cols-3",
        }}
        className="gap-5"
      >
        <GridItem
          _extra={{
            className: "col-span-2",
          }}
          className="p-4"
        >
          <VStack
            space="xs"
            className=""
            style={{
              width: width - 150,
            }}
          >
            <Text className="text-neutral-400 font-poppins-regular">Your</Text>
            <Text className="text-sm">
              <Text className="font-semibold font-poppins-semibold" size="2xl">
                Tickets
              </Text>
            </Text>
          </VStack>
        </GridItem>
        <GridItem
          _extra={{
            className: "col-span-1",
          }}
          className="p-4"
        >
          <Icon as={BellIcon} size="xl" className="ml-auto" />
        </GridItem>
      </Grid>
      <TabComp />
      <View className="h-4" />
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        contentContainerClassName="px-5"
        renderItem={() => (
          <TicketCard
            date="12"
            location="New York"
            eventName="New York Fashion Week"
            tickets="2"
            time="12:00 PM"
            key={Math.random()}
          />
        )}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
    </View>
  );
}
