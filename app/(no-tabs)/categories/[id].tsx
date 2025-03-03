import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { HOODIES_DATA } from "@/constants/hoodies";
import { Ionicons } from "@expo/vector-icons";
import { ChevronLeft } from "lucide-react-native";

const { width } = Dimensions.get("window");
const CART_WIDTH = (width - 48) / 2;

const ProductCard = ({ onToggleFav, product }: any) => {
  const { id, title, image, price, isFavorite } = product;
  return (
    <View
      className="bg-gray-100 rounded-xl mb-4 overflow-hidden"
      style={{ width: CART_WIDTH }}
    >
      <Image source={image} className="w-full h-64 object-cover" />
      <TouchableOpacity
        className="absolute top-3 right-3 bg-white rounded-full p-2"
        onPress={() => {
          onToggleFav(id);
        }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={24}
          color={isFavorite ? "darkred" : "black"}
        />
      </TouchableOpacity>
      <View className="p-3">
        <Text className="text-sm font-medium mb-2 line-clamp-2">{title}</Text>
        <Text className="text-lg font-semibold">$ {price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

export default function CategoryProductScreen() {
  const [product, setProduct] = useState(HOODIES_DATA);
  function toggleFavourite(productId: any) {
    setProduct(
      product.map((item) =>
        item.id === productId ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  }
  const { back } = useRouter();
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-2 space-x-3">
        <TouchableOpacity
          onPress={() => {
            back();
          }}
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center "
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
      </View>
      <Text className="p-2 mr-2 px-4 pb-5 text-2xl font-rubik-medium">
        Hoodies
      </Text>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row flex-wrap justify-between">
          {product.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              onToggleFav={toggleFavourite}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
