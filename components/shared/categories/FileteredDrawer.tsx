import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  TextInput,
  ScrollView,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomInput from "../CustomInput";

const { height } = Dimensions.get("window");
const DRAWER_HEIGHT = height * 0.5;

type FilterOption = {
  id: string;
  label: string;
};

type PriceRange = {
  min: string;
  max: string;
};

interface FilterDrawerProps {
  isVisible: boolean;
  onClose: () => void;
  type: "sort" | "price" | "gender" | "deals";
  onClear: () => void;
  onSelect: (value: any) => void;
  selectedValue?: string | string[] | PriceRange;
}

const sortOptions: FilterOption[] = [
  { id: "recommended", label: "Recommended" },
  { id: "newest", label: "Newest" },
  { id: "lowToHigh", label: "Lowest - Highest Price" },
  { id: "highToLow", label: "Highest - Lowest Price" },
];

const genderOptions: FilterOption[] = [
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "kids", label: "Kids" },
];

const dealsOptions: FilterOption[] = [
  { id: "onSale", label: "On Sale" },
  { id: "freeShipping", label: "Free Shipping Eligible" },
];

export default function FilterDrawer({
  isVisible,
  onClose,
  type,
  onClear,
  onSelect,
  selectedValue,
}: FilterDrawerProps) {
  const translateY = useRef(new Animated.Value(DRAWER_HEIGHT)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    } else {
      Animated.spring(translateY, {
        toValue: DRAWER_HEIGHT,
        useNativeDriver: true,
        tension: 65,
        friction: 11,
      }).start();
    }
  }, [isVisible]);

  const renderHeader = () => {
    const titles = {
      sort: "Sort by",
      price: "Price",
      gender: "Gender",
      deals: "Deals",
    };

    return (
      <View className={"flex-row justify-between items-center px-4 py-3 "}>
        <TouchableOpacity onPress={onClear}>
          <Text className={"font-rubik text-base"}>Clear</Text>
        </TouchableOpacity>
        <Text className={"text-xl font-rubik-bold"}>{titles[type]}</Text>
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderOption = (option: FilterOption) => {
    const isSelected = selectedValue === option.id;
    return (
      <TouchableOpacity
        key={option.id}
        className={`flex-row justify-between items-center px-5 py-4 rounded-full mb-2 ${
          isSelected ? "bg-primary-100" : "bg-gray-100"
        }`}
        onPress={() => onSelect(option.id)}
      >
        <Text
          className={`text-base font-rubik-medium ${
            isSelected ? "text-white" : "text-black"
          }`}
        >
          {option.label}
        </Text>
        {isSelected && <Ionicons name="checkmark" size={24} color="white" />}
      </TouchableOpacity>
    );
  };

  const renderPriceFilter = () => (
    <View className={"w-full"}>
      <CustomInput
        placeHolder="Min"
        placeholderTextColor="#999"
        className="w-full rounded-full"
        keyboardType="numeric"
      />
      <CustomInput
        placeHolder="Max"
        placeholderTextColor="#999"
        className="w-full rounded-full"
        keyboardType="numeric"
      />
    </View>
  );

  const renderContent = () => {
    switch (type) {
      case "sort":
        return sortOptions.map(renderOption);
      case "price":
        return renderPriceFilter();
      case "gender":
        return genderOptions.map(renderOption);
      case "deals":
        return dealsOptions.map(renderOption);
      default:
        return null;
    }
  };

  if (!isVisible) return null;

  return (
    <View className={"absolute inset-0 flex justify-end"}>
      <TouchableOpacity
        className={"absolute inset-0 bg-black opacity-50"}
        onPress={onClose}
      />
      <Animated.View
        style={{ height: DRAWER_HEIGHT, transform: [{ translateY }] }}
        className={"bg-white rounded-t-3xl"}
      >
        {renderHeader()}
        <ScrollView className={"flex-1 px-4 py-3"}>
          {renderContent()}
        </ScrollView>
      </Animated.View>
    </View>
  );
}
