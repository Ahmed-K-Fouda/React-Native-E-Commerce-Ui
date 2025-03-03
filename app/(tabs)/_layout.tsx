import { Image, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { tabs } from "@/constants/tabsBtn";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#fff",
          position: "absolute",
          minHeight: 70,
        },
      }}
    >
      {tabs.map(({ name, title, icon, activeIcon }) => (
        <Tabs.Screen
          name={name}
          key={name}
          options={{
            headerShown: false,
            title,
            tabBarLabel: ({ focused }) => (
              <Text
                className={`${
                  focused
                    ? "text-primary-100 font-rubik-medium"
                    : "text-black font-rubik"
                } text-xs mt-1 w-full text-center`}
              >
                {title}
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Image
                source={focused ? activeIcon : icon}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
