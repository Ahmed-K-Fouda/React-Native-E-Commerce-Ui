import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FilterDrawer from "./FileteredDrawer";

const { width } = Dimensions.get("window");
const COLUMN_GAP = 16;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - 32 - COLUMN_GAP) / NUM_COLUMNS;

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  isFavorite?: boolean;
}

export default function SearchResults() {
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false);
  const [filterType, setFilterType] = useState<
    "sort" | "price" | "gender" | "deals"
  >("sort");
  const [selectedSort, setSelectedSort] = useState("recommended");
  const [selectedGender, setSelectedGender] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedDeals, setSelectedDeals] = useState<string[]>([]);
  const [products] = useState<Product[]>([
    {
      id: "1",
      name: "Skate Jacket",
      price: 150.97,
      image: require("@/assets/images/search&filter/4.png"),
    },
    {
      id: "2",
      name: "Skate Jacket",
      price: 150.97,
      image: require("@/assets/images/search&filter/4.png"),
    },
    {
      id: "3",
      name: "Therma Fit Puffer Jacket",
      price: 280.97,
      image: require("@/assets/images/search&filter/3.png"),
    },
    {
      id: "4",
      name: "Men's Workwear Jacket",
      price: 128.97,
      image: require("@/assets/images/search&filter/4.png"),
    },
  ]);
  const handleFilterPress = (type: "sort" | "price" | "gender" | "deals") => {
    setFilterType(type);
    setFilterDrawerVisible(true);
  };

  const handleFilterSelect = (value: any) => {
    switch (filterType) {
      case "sort":
        setSelectedSort(value);
        break;
      case "price":
        setPriceRange(value);
        break;
      case "gender":
        setSelectedGender(value);
        break;
      case "deals":
        setSelectedDeals(value);
        break;
    }
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View style={styles.productCard}>
      <Image source={item.image} />
      <TouchableOpacity style={styles.favoriteButton}>
        <Ionicons name="heart-outline" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white px-4">
      <View className="flex-row items-center gap-2 mb-4">
        <TouchableOpacity className="flex-row items-center bg-primary-100 rounded-full px-2 py-2 pr-3">
          <Ionicons name="options" size={20} color="#FFF" />
          <Text className="text-white ml-1 text-sm">2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-gray-200 rounded-full px-3 py-2"
          onPress={() => handleFilterPress("deals")}
        >
          <Text className="text-sm text-black">On Sale</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center bg-primary-100 rounded-full px-3 py-2 gap-1"
          onPress={() => handleFilterPress("price")}
        >
          <Text className="text-sm text-white">Price</Text>
          <Ionicons name="chevron-down" size={20} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center bg-primary-100 rounded-full px-3 py-2 gap-1"
          onPress={() => handleFilterPress("sort")}
        >
          <Text className="text-sm text-white">Sort by</Text>
          <Ionicons name="chevron-down" size={20} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center bg-primary-100 rounded-full px-3 py-2 gap-1"
          onPress={() => handleFilterPress("gender")}
        >
          <Text className="text-sm text-white">Men</Text>
          <Ionicons name="chevron-down" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>

      <Text className="text-base font-semibold mb-4">53 Results Found</Text>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 16,
        }}
        showsVerticalScrollIndicator={false}
      />
      <FilterDrawer
        isVisible={filterDrawerVisible}
        onClose={() => setFilterDrawerVisible(false)}
        type={filterType}
        onClear={() => {
          switch (filterType) {
            case "sort":
              setSelectedSort("recommended");
              break;
            case "price":
              setPriceRange({ min: "", max: "" });
              break;
            case "gender":
              setSelectedGender("");
              break;
            case "deals":
              setSelectedDeals([]);
              break;
          }
        }}
        onSelect={handleFilterSelect}
        selectedValue={
          filterType === "sort"
            ? selectedSort
            : filterType === "price"
            ? priceRange
            : filterType === "gender"
            ? selectedGender
            : selectedDeals
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  filterSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8560F7",
    borderRadius: 20,
    padding: 8,
    paddingRight: 12,
  },
  filterCount: {
    color: "#FFF",
    marginLeft: 4,
    fontSize: 14,
  },
  chipButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  chipText: {
    fontSize: 14,
    color: "#000",
  },
  dropdownButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8560F7",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
  },
  dropdownText: {
    fontSize: 14,
    color: "#FFF",
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 16,
  },
  productRow: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  productCard: {
    width: CARD_WIDTH,
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    overflow: "hidden",
  },
  productImage: {
    width: "100%",
    aspectRatio: 1,
  },
  favoriteButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
});
