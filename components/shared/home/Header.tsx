import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ChevronDown, ShoppingBasket } from "lucide-react-native";

export default function Header() {
  const { push } = useRouter();
  return (
    <View className="flex-row items-center justify-between px-4">
      <Image
        className="w-10 h-10 rounded-full"
        source={require("@/assets/images/home/Header/me.jpeg")}
      />
      <TouchableOpacity className="flex-row items-center bg-gray-200 px-4 py-2 space-x-2 rounded-full">
        <Text className="text-base font-rubik">Men</Text>
        <ChevronDown size={20} color={"#000"} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          push("/(no-tabs)/cart");
        }}
        className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
      >
        <ShoppingBasket size={15} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
}
