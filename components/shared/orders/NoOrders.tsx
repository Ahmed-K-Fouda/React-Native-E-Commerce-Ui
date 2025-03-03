import { View, Text, Image } from "react-native";
import React from "react";
import CustomButton from "../CustomButton";
import { useRouter } from "expo-router";

const NoOrders = () => {
  const { push } = useRouter();
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <View className="items-center w-full max-w-lg">
        <Image
          source={require("@/assets/images/orders/orders.png")}
          className="w-20 h-20 mb-6"
          resizeMode="contain"
        />
        <Text className="text-3xl font-rubik-medium text-center text-gray-800 mb-8 leading-10">
          No Orders yet.
        </Text>
        <CustomButton
          title="Explore Categories"
          onPress={() => {
            push("/(no-tabs)/categories");
          }}
          buttonClassName="bg-primary-100 py-5"
          textClassName="text-lg font-rubik-semibold"
        />
      </View>
    </View>
  );
};

export default NoOrders;
