import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "./ui/text";

const TabComp = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const tabs = ["Upcoming", "Completed", "Cancelled"];

  return (
    <View className="flex-row justify-around items-center border-b-2 border-input">
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          className={`flex-1 py-2 ${
            activeTab === tab
              ? "border-b-2 border-white"
              : "border-b-2 border-transparent"
          }`}
          onPress={() => setActiveTab(tab)}
        >
          <Text
            className={`text-center font-poppins-regular text-xl ${
              activeTab === tab ? "" : "text-input"
            }`}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabComp;
