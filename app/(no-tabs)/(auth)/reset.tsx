import { View, Text, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import CustomInput from "@/components/shared/CustomInput";
import CustomButton from "@/components/shared/CustomButton";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();
  function handleSubmit() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const trimmedEmail = email.trim();
    if (!emailRegex.test(trimmedEmail)) {
      setError("Invalid email format");
      return;
    }
    if (!trimmedEmail) {
      setError('Input can"t be empty ');
      return;
    }
    setError("");
    push("/(no-tabs)/(auth)/emailsent");
  }
  const { back } = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mt-8 ms-5 pt-5">
        <TouchableOpacity
          onPress={() => {
            back();
          }}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-6"
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
      </View>
      <View
        className={`flex-1 px-6 ${Platform.OS === "android" ? "pt-2" : "pt-5"}`}
      >
        <Text className="text-black text-3xl font-rubik-semiBold mb-8">
          Forget Password
        </Text>
        <View className="space-y-4">
          <CustomInput
            placeHolder="Your Email Address"
            placeholderTextColor="#999"
            value={email}
            onChangeText={(e) => {
              setEmail(e);
              setError("");
            }}
          />
          {error ? (
            <Text className="text-red-500 text-xl my-2">{error}</Text>
          ) : null}

          <CustomButton
            buttonClassName={"bg-primary-100"}
            title="Continue"
            onPress={() => handleSubmit()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
