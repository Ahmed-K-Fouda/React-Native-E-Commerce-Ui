import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AllOrders from "@/components/shared/orders/AllOrders";
import NoOrders from "@/components/shared/orders/NoOrders";

export default function Orders() {
  const showOrder = true;
  return showOrder ? <AllOrders /> : <NoOrders />;
}
