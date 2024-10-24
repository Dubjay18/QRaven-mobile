import CategorySelector from "@/components/CategorySelector";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";

function categories() {
  const router = useRouter();
  const [categories, setCategories] = React.useState([
    "Health",
    "Education",
    "Technology",
    "Science",
    "Sports",
    "Entertainment",
  ]);

  const [selectedCategories, setSelectedCategories] = React.useState([]);

  const addCategory = (category: any) => {
    setSelectedCategories([...selectedCategories, category] as any);
  };
  const removeCategory = (category: any) => {
    setSelectedCategories(selectedCategories.filter((c) => c !== category));
  };
  return (
    <VStack
      style={{
        flex: 1,
      }}
      className="bg-background p-4"
    >
      <Text className="text-white text-4xl font-semibold font-poppins-semibold">
        Categories
      </Text>

      <View className="mt-4">
        <Text className="text-neutral-400 font-poppins-regular text-lg ">
          Select a few categories based on your interests
        </Text>
      </View>
      <CategorySelector
        categories={categories}
        selectedCategories={selectedCategories}
        addCategory={addCategory}
        removeCategory={removeCategory}
      />
      <Button
        // onPress={() => {
        //   router.push("categories");
        // }}
        size="lg"
        className="mt-auto mb-5"
      >
        <ButtonText>Continue</ButtonText>
      </Button>
    </VStack>
  );
}

export default categories;
