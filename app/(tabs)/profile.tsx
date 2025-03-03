import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronRight } from "lucide-react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const menuItems = [
    {
      title: "Address",
      icon: ChevronRight,
      href: "/(no-tabs)/addresses",
    },
    {
      title: "Wishlist",
      icon: ChevronRight,
      href: "/(no-tabs)/wishlist",
    },
    { title: "Payment", icon: ChevronRight, href: "/payment" },
    { title: "Help", icon: ChevronRight, href: "/help" },
    { title: "Support", icon: ChevronRight, href: "/support" },
  ];
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="pb-20">
        <View className="items-center p-5 relative">
          <Image
            source={require("@/assets/images/home/Header/me.jpeg")}
            className="w-20 h-20 rounded-full mb-4"
          />
          <View className="items-center">
            <Text className="text-2xl font-rubik-bold mb-2">Ahmed .Fouda</Text>
            <Text className="text-base text-gray-500">111</Text>
          </View>
          <TouchableOpacity className="absolute right-5 top-5">
            <Text className="text-primary-100 text-base font-rubik-bold">
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View className="px-4 pt-5">
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                router.push(item?.href);
              }}
              className="flex-row items-center justify-between py-4 px-5 bg-gray-100 rouded-xl mb-3"
            >
              <Text className="text-lg font-rubik-bold">{item.title}</Text>
              <item.icon size={24} color={"#000"} />
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity className="mt-5 mx-4 py-4 items-center">
          <Text className="text-red-500 text-lg font-rubik-bold">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
