import { Tabs } from "expo-router";
import { Heart, Home, Search, Ticket } from "lucide-react-native";
import { Image, Text, View } from "react-native";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
}: {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}) => {
  return (
    <View className="flex items-center justify-center gap-2">
      {icon}
      <Text
        className={`${focused ? "font-poppins-semibold font-semibold" : "font-poppins-regular"} text-xs`}
        style={{
          color: color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8FB680",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#292929",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Home"
              icon={<Home color={color} className="h-4 w-4" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Explore"
              icon={<Search color={color} className="h-4 w-4" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Favourites"
              icon={<Heart color={color} className="h-4 w-4" />}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: "Tickets",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Tickets"
              icon={<Ticket color={color} className="h-4 w-4" />}
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              color={color}
              name="Profile"
              icon={
                <Image
                  source={{ uri: "https://i.pravatar.cc/100" }}
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: 12,
                    borderColor: color,
                    borderWidth: 1,
                  }}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
