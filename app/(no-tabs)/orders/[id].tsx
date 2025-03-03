import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { orderSteps } from "@/constants/ordersTrack";
import { useRouter } from "expo-router";

export interface OrderStep {
  status: string;
  date: string;
  isCompleted: boolean;
  isActive: boolean;
}

export default function OrderTrackingScreen() {
  const { back } = useRouter();
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-row items-center px-5 pt-16 pb-4">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center">
          <Ionicons
            onPress={() => back()}
            name="chevron-back"
            size={24}
            color={"#000"}
          />
        </TouchableOpacity>
        <Text className="ml-4 text-lg font-rubik-medium text-black">
          Order # 159357
        </Text>
      </View>
      <View className="px-5 mt-5">
        {orderSteps.map((step, index) => (
          <View key={index} className="mb-2">
            <View className="flex-row items-center mb-2">
              <View
                className={`w-6 h-6 rounded-full items-center justify-center ${
                  step.isActive ? "bg-primary-100" : "bg-gray-200"
                }`}
              >
                {step.isCompleted && (
                  <Ionicons name="checkmark" size={10} color={"#fff"} />
                )}
              </View>
              <View className="flex-1 ml-3">
                <Text
                  className={`text-sm font-rubik-medium ${
                    step.isActive ? "text-black" : "text-gray-100"
                  }`}
                >
                  {step.status}
                </Text>
              </View>
              <Text className="text-sm font-rubik-medium text-gray-400">
                {step.date}
              </Text>
            </View>
            {index < orderSteps.length - 1 && (
              <View
                className={`w-0.5 h-10 ml-3 ${
                  step.isActive ? "bg-primary-100" : "bg-gray-200"
                }`}
              ></View>
            )}
          </View>
        ))}
      </View>
      <View className="px-5 mt-8">
        <Text className="text-lg font-rubik-medium mb-4">Order Items</Text>
        <TouchableOpacity className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg">
          <View className="flex-row items-center">
            <Ionicons name="receipt-outline" size={24} color={"#000"} />
            <Text className="ml-3 text-base font-rubik-medium">4 Items</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-base text-primary-100 font-rubik-medium mr-1">
              View All
            </Text>
            <Ionicons name="chevron-forward" size={20} color={"#8e6cef"} />
          </View>
        </TouchableOpacity>
      </View>

      <View className="px-5 mt-8">
        <Text className="text-lg font-rubik-medium mb-4">Shipping Details</Text>
        <View className="p-4 bg-gray-100 rounded-lg">
          <Text className="text-base font-rubik mb-2">
            2715 Al-Amana Street, Shibin 2205
          </Text>
          <Text className="text-base font-rubik text-gray-400">
            121-224-7890
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
