import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
const Tab = createMaterialTopTabNavigator();

const OrderItem = ({
  orderNumber,
  itemCount,
}: {
  orderNumber: string;
  itemCount: number;
}) => (
  <TouchableOpacity
    onPress={() => {
      router.push("/(no-tabs)/orders/[id]");
    }}
  >
    <View className="flex-row items-center justify-between p-4 bg-gray-100 mx-4 my-2 rounded-lg">
      <View className="flex-row items-center">
        <Ionicons
          name="document-text-outline"
          size={24}
          color={"#000"}
          className="mr-3"
        />
        <View>
          <Text className="text-lg font-semibold text-black">
            Oreder #{orderNumber}
          </Text>
          <Text className="text-sm text-gray-500">{itemCount} Items</Text>
        </View>
      </View>
      <Ionicons name="arrow-forward-circle-outline" size={26} color={"#000"} />
    </View>
  </TouchableOpacity>
);

function OrdersList() {
  const orders = [
    { id: "159357", item: 4 },
    { id: "107852", item: 2 },
    { id: "357063", item: 6 },
  ];
  return (
    <ScrollView className="flex-1 bg-white">
      {orders.map((order) => (
        <OrderItem
          key={order.id}
          orderNumber={order.id}
          itemCount={order.item}
        />
      ))}
    </ScrollView>
  );
}

const TabScreen = () => <OrdersList />;

export default function AllOrders() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 bg-white">
        <Text className="text-2xl font-rubik-semiBold text-black">Orders</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarStyle: {
            backgroundColor: "#fff",
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          tabBarItemStyle: {
            width: "auto",
            paddingHorizontal: 16,
          },
          tabBarLabelStyle: {
            textTransform: "none",
            fontSize: 16,
            fontWeight: 500,
          },
          tabBarIndicatorStyle: {
            backgroundColor: "#8e6cef",
            height: "100%",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen name="Processing" component={TabScreen} />
        <Tab.Screen name="Shipped" component={TabScreen} />
        <Tab.Screen name="Delivered" component={TabScreen} />
        <Tab.Screen name="Returned" component={TabScreen} />
        <Tab.Screen name="Cancelled" component={TabScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
