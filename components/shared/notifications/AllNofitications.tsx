import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationItem from "./NotificationItem";
const notifications = [
  {
    id: "1",
    message:
      "Gilbert, you placed an order. Check your order history for full details.",
    hasIndicator: true,
  },
  {
    id: "2",
    message:
      "Gilbert, Thank you for shopping with us. We have canceled order #24568.",
    hasIndicator: false,
  },
  {
    id: "3",
    message:
      "Gilbert, your Order #24568 has been confirmed. Check your order history for full details.",
    hasIndicator: false,
  },
];
const AllNofitications = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView>
        <View className="p-4 bg-white">
          <Text className="text-2xl font-rubik-semibold text-black text-center">
            Notifications
          </Text>
        </View>
        <ScrollView className="flex-1" contentContainerStyle={{ padding: 16 }}>
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              message={notification.message}
              hasIndicator={notification.hasIndicator}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllNofitications;
