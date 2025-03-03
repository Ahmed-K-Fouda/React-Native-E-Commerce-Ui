import { View, Text } from "react-native";
import React from "react";
import { Bell } from "lucide-react-native";

interface NotificationItemProps {
  message: string;
  hasIndicator?: boolean;
}
const NotificationItem = ({ message, hasIndicator }: NotificationItemProps) => {
  return (
    <View className="flex-row items-start p-4 bg-gray-100 rounded-xl mb-2">
      <View className="relative mr-3 flex items-center justify-center">
        <Bell size={20} color={"#000"} />
        {hasIndicator && (
          <View className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
        )}
      </View>
      <Text className="flex-1 text-base text-black font-rubik leading-6">
        {message}
      </Text>
    </View>
  );
};

export default NotificationItem;
