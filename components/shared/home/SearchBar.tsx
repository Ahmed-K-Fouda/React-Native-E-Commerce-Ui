import { View, Text, TextInput } from "react-native";
import React from "react";
import { Search } from "lucide-react-native";

export default function SearchBar() {
  return (
    <View className="flex-row items-center bg-gray-100 mx-4 px-4 my-3 py-3 rounded-full space-x-2">
      <Search size={20} color={"#666"} />
      <TextInput
        placeholder="Search"
        placeholderTextColor={"#666"}
        className="flex-1 text-base text-black py-1"
      />
    </View>
  );
}
