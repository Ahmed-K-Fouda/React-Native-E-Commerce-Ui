import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const CartItem = ({
  image,
  title,
  size,
  color,
  price,
  onIncrement,
  onDecrement,
}: any) => (
  <View className="flex-row p-4 bg-gray-100 mx-4 my-2 rounded-xl">
    <Image source={image} className="w-20 h-20 rounded-md" />
    <View className="flex-1 ml-3">
      <Text className="text-base font-rubik-medium mb-2">{title}</Text>
      <View className="flex-row space-x-3">
        <Text className="text-sm font-rubik-medium font-bold">
          Size - {size}{" "}
        </Text>
        <Text className="text-sm font-rubik-medium font-bold">
          Color - {color}
        </Text>
      </View>
    </View>
    <View className="items-end justify-between">
      <Text className="text-base font-rubik-medium">${price}</Text>
      <View className="flex-row space-x-2 ">
        <TouchableOpacity
          className="bg-primary-100 w-8 h-8 rounded-full items-center justify-center mr-3"
          onPress={onIncrement}
        >
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primary-100 w-8 h-8 rounded-full items-center justify-center"
          onPress={onDecrement}
        >
          <Ionicons name="remove" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const CartScreen = () => {
  const { push, back } = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between px-5 py-3">
        <TouchableOpacity className="p-2 rounded-full bg-gray">
          <Ionicons
            name="arrow-back"
            onPress={() => back()}
            size={24}
            color="#000"
          />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">Cart</Text>
        <TouchableOpacity>
          <Text className="text-base text-black">Remove All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        <CartItem
          image={require("@/assets/images/home/category-products/1.png")}
          title="Men's Harrington Jacket"
          size="M"
          color="Lemon"
          price="148"
          onIncrement={() => {}}
          onDecrement={() => {}}
        />
        <CartItem
          image={require("@/assets/images/home/category-products/4.png")}
          title="Men's Coaches Jacket"
          size="M"
          color="Black"
          price="52.00"
          onIncrement={() => {}}
          onDecrement={() => {}}
        />

        <View className="px-4 pt-[100px] space-y-9">
          <View className="flex-row justify-between pt-[8px]">
            <Text className="text-black-100 text-base">Subtotal</Text>
            <Text className="text-base font-rubik-medium">$200</Text>
          </View>
          <View className="flex-row justify-between pt-[8px]">
            <Text className="text-black-100 text-base">Shipping Cost</Text>
            <Text className="text-base font-rubik-medium">$8.00</Text>
          </View>
          <View className="flex-row justify-between pt-[8px]">
            <Text className="text-black-100 text-base">Tax</Text>
            <Text className="text-base font-rubik-medium">$0.00</Text>
          </View>
          <View className="flex-row justify-between pt-[8px]">
            <Text className="text-black-100 text-base">Total</Text>
            <Text className="text-lg font-rubik-bold">$208</Text>
          </View>
        </View>

        <View className="flex-row items-center bg-gray-100 mx-4 my-[20px] p-4 rounded-xl">
          <Ionicons name="gift" size={24} color="#4CAF50" />
          <TextInput
            className="flex-1 ml-3 text-black-100 text-base"
            placeholder="Enter Coupon Code"
          />
          <TouchableOpacity className="bg-primary-100 w-10 h-10 rounded-full items-center justify-center">
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <TouchableOpacity
        className="bg-primary-100 m-4 p-4 rounded-full items-center"
        onPress={() => {
          push("/(no-tabs)/checkout");
        }}
      >
        <Text className="text-white text-lg font-rubik-semibold">Checkout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;
