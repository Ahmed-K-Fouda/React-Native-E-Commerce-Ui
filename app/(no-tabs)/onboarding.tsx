import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowDown } from "lucide-react-native";
import CustomButton from "@/components/shared/CustomButton";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";

export default function OnBoardnigScreen() {
  const [selectedGender, setSelectedGender] = useState("men");
  const [showAnimation, setShowAnimation] = useState(false);
  function handleFinish() {
    setShowAnimation(true);
    setTimeout(() => setShowAnimation(false), 3000);
    setTimeout(() => {
      push("/(tabs)/home");
    }, 2500);
  }
  const { push } = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 pt-10">
        <Text className="text-3xl font-rubik-semiBold text-gray-800 mb-10">
          Tell us about yourself
        </Text>
        <View className="mb-8">
          <Text className="font-rubik-medium text-gray-800 mb-4 text-lg">
            Who do you shop for
          </Text>
          <View className="flex-row space-x-3">
            <TouchableOpacity
              className={`flex-1 h-14 rounded-full justify-center items-center ${
                selectedGender === "men" ? "bg-primary-100" : "bg-gray-200"
              }`}
              onPress={() => {
                setSelectedGender("men");
              }}
            >
              <Text
                className={`text-base font-rubik-medium ${
                  selectedGender === "men" ? "text-white" : "text-black"
                }`}
              >
                Men
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 h-14 rounded-full justify-center items-center ${
                selectedGender === "women" ? "bg-primary-100" : "bg-gray-200"
              }`}
              onPress={() => {
                setSelectedGender("women");
              }}
            >
              <Text
                className={`text-base font-rubik-medium ${
                  selectedGender === "women" ? "text-white" : "text-black"
                }`}
              >
                women
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mb-8">
          <Text className="text-lg font-rubik-medium text-gray-800 mb-4">
            How old are you ?
          </Text>
          <TouchableOpacity className="h-14 bg-gray-200 rounded-full px-5 flex-row items-center justify-between">
            <Text className="text-base text-gray-800">Age Range</Text>
            <Text className="text-xl text-gray-800">
              <ArrowDown color={"#000"} />
            </Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Finish"
          buttonClassName="bg-primary-100 absolute bottom-6 left-6 right-6"
          textClassName="text-lg font-rubik-semibold"
          onPress={() => {
            handleFinish();
          }}
        />
      </View>
      {showAnimation && (
        <LottieView
          source={require("@/assets/animation/Animation - 1740661904001.json")}
          autoPlay
          loop={false}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      )}
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}
