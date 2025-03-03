import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
} from "lucide-react-native";
interface WishlistItemProps {
  title: string;
  count: number;
  onPress: () => void;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  title,
  count,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    className="flex-row items-center justify-between bg-gray-100 rounded-lg p-4 mb-[10px]"
  >
    <View className="flex-row items-center gap-4">
      <Heart width={24} height={24} stroke="#000" strokeWidth={1.5} />
      <View className="gap-1">
        <Text className="text-base font-rubik-semibold text-black">
          {title}
        </Text>
        <Text className="text-sm text-black-100">{count} Products</Text>
      </View>
    </View>
    <ChevronRight width={24} height={24} stroke="#000" strokeWidth={1.5} />
  </TouchableOpacity>
);
const WishListScreen = () => {
  const router = useRouter();
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
        <Text className="text-xl font-rubik-bold text-black">WishList</Text>
      </View>
      <View className="px-4 space-y-3">
        <WishlistItem
          title="My Favourite"
          count={12}
          onPress={() => {
            router.push("/(no-tabs)/favourites");
          }}
        />
        <WishlistItem title="T-shirts" count={4} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

export default WishListScreen;
