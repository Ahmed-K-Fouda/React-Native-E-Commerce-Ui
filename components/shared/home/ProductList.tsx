import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Heart } from "lucide-react-native";

interface Product {
  id: number;
  price: number;
  title: string;
  image: string;
  originalPrice?: number;
}

interface ProductListProps {
  title: string;
  products: Product[];
}

export default function ProductList({ title, products }: ProductListProps) {
  const { push } = useRouter();
  return (
    <View className="py-4">
      <View className="flex-row justify-between items-center px-4 mb-4">
        <Text
          className={`text-2xl font-bold ${
            title === "New In" ? "text-primary-100" : ""
          }`}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text className="text-base text-gray-800">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="pl-4"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {products.map((item) => (
          <TouchableOpacity
            className="w-48 mr-4"
            onPress={() => {
              push("/(no-tabs)/products/[id]");
            }}
            key={item.id}
          >
            <View className="relative bg-gray-200 rounded-lg mb-2">
              <Image
                source={require("@/assets/images/home/products/jacket.png")}
                className="w-full h-72 rounded-lg"
              />
              <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-2">
                <Heart size={20} color={"#666"} />
              </TouchableOpacity>
            </View>
            <View className="px-1">
              <Text className="text-base mb-2" numberOfLines={2}>
                {item.title}
              </Text>
              <View className="flex-row items-center gap-2">
                <Text className="text-lg font-bold">
                  $ {item.price.toFixed(2)}
                </Text>
                {item.originalPrice && (
                  <Text className="text-sm text-gray-500 line-through">
                    ${item.originalPrice.toFixed(2)}
                  </Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
