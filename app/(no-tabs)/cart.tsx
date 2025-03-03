import { View, Text } from "react-native";
import React from "react";
import CartScreen from "@/components/shared/cart/Cart";
import EmptyCart from "@/components/shared/cart/EmptyCart";

export default function Cart() {
  const cartItems = true;
  return cartItems ? <CartScreen /> : <EmptyCart />;
}
