import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, reviews } from "@/constants/products";
import CustomButton from "@/components/shared/CustomButton";
import { SizeBottomSheet } from "@/components/shared/product/SizeBottomSheet";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ProductScreen() {
  const { back, push } = useRouter();
  const [qty, setQty] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [isSizeSheetVisibale, setSizeSheetVisible] = useState(false);
  const ReviewCard = ({ review }: any) => (
    <View className="gap-3 mb-[10px]">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-3">
          <Image source={review.avatar} className="w-12 h-12 rounded-full" />
          <Text className="text-lg font-rubik-bold">{review.name}</Text>
        </View>
        <View className="flex-row gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Ionicons
              size={16}
              color={"#8e6cef"}
              key={star}
              name={star <= review.rating ? "star" : "star-outline"}
            />
          ))}
        </View>
      </View>
      <Text className="text-base font-rubik-light leading-6 text-[#ccc]">
        {review.text}
      </Text>
      <Text className="text-sm font-rubik-medium text-black">
        {review.date}
      </Text>
    </View>
  );

  const renderCarouselItem = ({ item }: any) => (
    <Image source={item} style={styles.carouselImage} resizeMode="contain" />
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row justify-between px-5 py-2">
        <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <Ionicons
            name="chevron-back"
            size={24}
            onPress={() => {
              back();
            }}
            color={"#000"}
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <Ionicons size={24} color={"#000"} name="heart-outline" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <FlatList
          data={images}
          renderItem={renderCarouselItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          className="h-[100%]"
        />

        <View className="px-5">
          <Text className="text-lg mb-2 font-semibold">
            Men's Harringiton Jacket
          </Text>
          <Text className="text-xl text-primary-100 font-semibold">$148</Text>
        </View>

        <View className="px-5 py-5 space-y-5">
          <View className="bg-gray-100 mt-4 flex-row items-center justify-between px-4 py-2 rounded-full">
            <Text className="text-lg font-medium">Size</Text>
            <TouchableOpacity
              onPress={() => setSizeSheetVisible(true)}
              className="flex-row items-center bg-gray-400 px-4 py-3 rounded-lg"
            >
              <Text className="text-base mr-2">S</Text>
              <Ionicons name="chevron-down" size={20} color={"#000"} />
            </TouchableOpacity>

            <SizeBottomSheet
              visible={isSizeSheetVisibale}
              onClose={() => setSizeSheetVisible(false)}
              selectedSize={selectedSize}
              onSelectSize={setSelectedSize}
            />
          </View>

          <View className="bg-gray-100 mt-4 flex-row items-center justify-between px-4 py-2 rounded-full">
            <Text className="text-lg font-medium">Color</Text>
            <TouchableOpacity className="flex-row items-center bg-gray px-4 py-3 rounded-lg">
              <View className="w-6 h-6 rounded-full bg-[#c9d572] mr-2" />
              <Ionicons name="chevron-down" size={20} color={"#000"} />
            </TouchableOpacity>
          </View>

          <View className="bg-gray-100 mt-4 flex-row items-center justify-between px-4 py-2 rounded-full">
            <Text className="text-lg font-medium">Quantity</Text>
            <View className="flex-row items-center">
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
                onPress={() => setQty(Math.max(1, qty - 1))}
              >
                <Text className="text-white text-xl font-semibold">-</Text>
              </TouchableOpacity>
              <Text className="text-lg mx-5">{qty}</Text>
              <TouchableOpacity
                className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center"
                onPress={() => setQty(qty + 1)}
              >
                <Text className="text-white text-xl font-semibold">+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text className="px-5 text-base leading-6 text-black">
          Built for life and made to last, this full-zip corduroy jacket is part
          of our Nike Life collection. The spacious fit gives you plenty of room
          to layer underneath, while the soft corduroy keeps it casual and
          timeless.
        </Text>

        <View className="px-5 py-5">
          <Text className="text-lg font-rubik-semibold mb-3">
            Shipping & Returns
          </Text>

          <Text className="text-base leading-6 text-black ">
            Free standard shipping and free 60-day returns
          </Text>
        </View>

        <View className="px-5 py-5 space-y-4">
          <Text className="text-lg font-rubik-medium mb-[10px]">Reviews</Text>
          <View>
            <Text className="text-2xl font-rubik-semiBold mb-[10px]">
              4.5 reting
            </Text>
            <Text className="text-base text-black mb-[10px]">217 reviews</Text>
          </View>

          <View className="space-y-5">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </View>
        </View>
      </ScrollView>

      <View className="flex-row item-center px-5 py-2 bg-white">
        <CustomButton
          onPress={() => push("/(no-tabs)/cart")}
          title="$148 - Add to Bag"
          textClassName="font-rubik-medium"
          buttonClassName="bg-primary-100"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carouselImage: {
    width: 200,
    height: 300,
  },
});
