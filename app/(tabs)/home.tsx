import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/shared/home/Header";
import SearchBar from "@/components/shared/home/SearchBar";
import Categories from "@/components/shared/home/Categories";
import ProductList from "@/components/shared/home/ProductList";
import { StatusBar } from "expo-status-bar";
import { newInProducts, topSellingProducts } from "@/constants/homeProducts";

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <Header />
        <SearchBar />
        <Categories />
        <ProductList title="Top Selling" products={topSellingProducts} />
        <ProductList title="New In" products={newInProducts} />
      </ScrollView>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}
