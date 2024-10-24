import EventCard from "@/components/ui/EventCard";
import { Grid, GridItem } from "@/components/ui/grid";
import { HStack } from "@/components/ui/hstack";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { BellIcon } from "lucide-react-native";
import React from "react";
import { Dimensions, FlatList, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
var { width } = Dimensions.get("screen");
export default function favourites() {
  const safeArea = useSafeAreaInsets();
  const randoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
                Favorites
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
      <FlatList
        data={randoArray}
        ListFooterComponent={() => (
          <View
            style={{
              height: 84,
            }}
          />
        )}
        renderItem={() => (
          <EventCard
            date="Jan 12, 2022"
            ticketPrice="15.00"
            name="New York Fashion Week week week week"
            id={`${Math.random()}`}
          />
        )}
      />
    </View>
  );
}
