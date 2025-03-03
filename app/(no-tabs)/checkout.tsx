import { useRouter } from "expo-router";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CheckoutScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className={`flex-1 px-4 ${
          Platform.OS === "android" ? `pt-${insets.top}` : ""
        }`}
      >
        <View className="flex-row items-center py-5">
          <TouchableOpacity className="w-10 h-10 rounded-full bg-gray items-center justify-center mr-4">
            <ChevronLeft
              onPress={() => router.back()}
              stroke="#000"
              width={24}
              height={24}
            />
          </TouchableOpacity>
          <Text className="text-xl font-rubik-bold text-black">Checkout</Text>
        </View>

        <View className="bg-gray-100 rounded-xl p-4 mb-4">
          <Text className="text-base text-black-100 font-rubik mb-2">
            Shipping Address
          </Text>
          <TouchableOpacity className="flex-row items-center justify-between">
            <Text className="text-lg font-rubik-medium text-black">
              Add Shipping Address
            </Text>
            <ChevronRight stroke="#000" width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View className="bg-gray-100 rounded-xl p-4 mb-4">
          <Text className="text-base text-black-100 font-rubik mb-2">
            Payment Method
          </Text>
          <TouchableOpacity className="flex-row items-center justify-between">
            <Text className="text-lg font-rubik-medium text-black">
              Add Payment Method
            </Text>
            <ChevronRight stroke="#000" width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View className="mt-auto pt-6">
          <View className="flex-row justify-between mb-4">
            <Text className="text-lg text-gray">Subtotal</Text>
            <Text className="text-lg text-gray">$200</Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <Text className="text-lg text-gray">Shipping Cost</Text>
            <Text className="text-lg text-gray">$8.00</Text>
          </View>
          <View className="flex-row justify-between mb-4">
            <Text className="text-lg text-gray">Tax</Text>
            <Text className="text-lg text-gray">$0.00</Text>
          </View>
          <View className="flex-row justify-between mt-2 pt-4 border-t border-gray">
            <Text className="text-xl text-black">Total</Text>
            <Text className="text-xl font-rubik-bold text-black">$208</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            router.push("/(no-tabs)/order-success");
          }}
          className={`flex-row bg-primary-100 rounded-full p-4 items-center justify-between mt-6 mb-${
            insets.bottom + 4
          }`}
        >
          <Text className="text-lg font-rubik-bold text-white">$208</Text>
          <Text className="text-lg font-rubik-bold text-white">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
