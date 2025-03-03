import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { categories } from "@/constants/categoriesImage_item";

export default function Categories() {
  const { push } = useRouter();
  return (
    <View className="py-4">
      <View className="flex-row justify-between items-center px-4 mb-4">
        <Text className="text-2xl font-rubik-bold">Categories</Text>
        <TouchableOpacity
          onPress={() => {
            push("/(no-tabs)/categories");
          }}
        >
          <Text className="text-base">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="pl-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {categories.map((item) => (
          <TouchableOpacity className="items-center mr-6" key={item.id}>
            <Image
              source={item.image}
              className="w-16 h-16 rounded-full mb-2"
            />
            <Text className="text-sm text-black">{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
