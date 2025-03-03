import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/shared/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ChevronLeft, Search } from "lucide-react-native";
import SearchResults from "@/components/shared/categories/SearchResultsProducts";

const categories = [
  {
    id: 1,
    name: "Hoodies",
    image: require("@/assets/images/home/categories/hoodies.png"),
  },
  {
    id: 2,
    name: "Accessories",
    image: require("@/assets/images/home/categories/accessories.png"),
  },
  {
    id: 3,
    name: "Shorts",
    image: require("@/assets/images/home/categories/shorts.png"),
  },
  {
    id: 4,
    name: "Shoes",
    image: require("@/assets/images/home/categories/shoes.png"),
  },
  {
    id: 5,
    name: "Bags",
    image: require("@/assets/images/home/categories/bag.png"),
  },
];
const AllCategoriesScreen = () => {
  const router = useRouter();
  const [searchTextName, setSearchtextName] = useState("");

  const showCategories = searchTextName.toLowerCase() == "jacket";
  const showNoResults = searchTextName.trim() !== "" && !showCategories;
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 py-2 space-x-3">
        <TouchableOpacity
          className="w-10 h-10 rounded-full bg-gray-200 items-center justify-center "
          onPress={() => {
            router.back();
          }}
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
        <View className="flex-1 h-10 flex-row items-center bg-gray-200 rounded-full px-3">
          <Search size={24} color="#000" />

          <TextInput
            placeholder="Search"
            className="flex-1 h-[50px] text-base text-black pl-2"
            placeholderTextColor={"#666"}
            onChangeText={setSearchtextName}
          />
        </View>
      </View>
      {showCategories ? (
        <SearchResults />
      ) : showNoResults ? (
        <View className="flex-1 items-center justify-center px-6">
          <Image
            source={require("@/assets/images/search/search.png")}
            className="w-20 h-20 mb-6"
            resizeMode="contain"
          />
          <Text className="text-center text-2xl font-rubik-medium text-black mb-8 leading-10">
            Sorry,we coudn't find any matching result for your search
          </Text>
          <CustomButton
            title="Explore Categories"
            buttonClassName="bg-primary-100"
            textClassName="text-white"
          />
        </View>
      ) : (
        <View>
          <Text className="text-2xl font-rubik-medium text-black px-4 mt-6 mb-4">
            Shop By Categories
          </Text>
          <View className="px-4">
            {categories.map((category) => (
              <TouchableOpacity
                onPress={() => {
                  router.push("/(no-tabs)/categories/1");
                }}
                key={category.id}
                className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-4"
              >
                <Image
                  source={category.image}
                  className="w-12 h-12 rounded-lg mr-3"
                />
                <Text className="text-lg text-black">{category.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AllCategoriesScreen;
