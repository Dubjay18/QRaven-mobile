import React, { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { Text } from "./ui/text";
import { Grid, GridItem } from "./ui/grid";

function CategorySelector({
  addCategory,
  removeCategory,
  categories,
  selectedCategories,
}: {
  addCategory: (category: string) => void;
  removeCategory: (category: string) => void;
  categories: string[];
  selectedCategories: string[];
}) {
  return (
    <Grid
      className="gap-5"
      _extra={{
        className: "grid-cols-6",
      }}
    >
      {categories.map((item, index) => (
        <GridItem
          _extra={{
            className: "col-span-2",
          }}
          className="p-4"
        >
          <TouchableOpacity
            onPress={() => {
              if (selectedCategories.includes(item)) {
                removeCategory(item);
              } else {
                addCategory(item);
              }
            }}
            key={item}
            className={`${
              selectedCategories.includes(item) ? "bg-primary-0" : "bg-input"
            } rounded-full flex items-center justify-center `}
            style={{
              width: 100,
              height: 100,
            }}
          >
            <Text className="text-white font-poppins-regular">{item}</Text>
          </TouchableOpacity>
        </GridItem>
      ))}
      {/* <FlatList
        data={categories}
        key={"##"}
        renderItem={({ item, index }) => (
          <GridItem
            _extra={{
              className: "col-span-2",
            }}
            className="p-4"
          >
            <TouchableOpacity
              onPress={() => {
                if (selectedCategories.includes(item)) {
                  removeCategory(item);
                } else {
                  addCategory(item);
                }
              }}
              key={item}
              className={`${
                selectedCategories.includes(item) ? "bg-primary-0" : "bg-input"
              } rounded-full flex items-center justify-center ml-5 ${
                index % 3 == 0 ? "" : "ml-3"
              }`}
              style={{
                width: 100,
                height: 100,
              }}
            >
              <Text className="text-white font-poppins-regular">{item}</Text>
            </TouchableOpacity>
          </GridItem>
        )}
        keyExtractor={(item) => item}
      /> */}
    </Grid>
  );
}

export default CategorySelector;
