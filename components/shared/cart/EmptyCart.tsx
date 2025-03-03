import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import CustomButton from "../CustomButton";
import { ArrowLeft } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function EmptyCart() {
  const { back } = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white p-5">
      <TouchableOpacity
        onPress={() => {
          back();
        }}
        className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-6 bg-gray"
      >
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
      <View className="flex-1 bg-white justify-center items-center px-6">
        <View className="items-center w-full max-w-md">
          <Image
            source={require("@/assets/images/cart/cart.png")}
            className="w-20 h-20 mb-6"
            resizeMode="contain"
          />
          <Text className="text-2xl font-semibold text-center text-gray-900 mb-8 leading-10 w-full">
            Your Cart is Empty.
          </Text>
          <CustomButton
            title="Explore Categories"
            buttonClassName="bg-primary-100"
            textClassName="font-rubik-semibold"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
