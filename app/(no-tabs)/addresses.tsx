import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, ChevronLeft } from "lucide-react-native";
import { router } from "expo-router";

const AddressesScreen = () => {
  const addresses = [
    "2715 Ash Dr. San Jose, South...",
    "2715 Ash Dr. San Jose, South...",
  ];

  return (
    <SafeAreaView className={`flex-1 bg-white`}>
      <View className="flex-row items-center px-5 py-4">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="p-2 bg-gray-100 rounded-full"
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
        <Text className="text-xl font-rubik-bold text-black">Address</Text>
      </View>
      <View className="px-5">
        {addresses.map((address, index) => (
          <View
            key={index}
            className="flex-row justify-between items-center bg-gray-100 rounded-lg px-4 py-4 mb-3"
          >
            <Text className="text-base text-black flex-1">{address}</Text>
            <TouchableOpacity className="ml-4">
              <Text className="text-primary-100 text-base font-rubik-bold">
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default AddressesScreen;
