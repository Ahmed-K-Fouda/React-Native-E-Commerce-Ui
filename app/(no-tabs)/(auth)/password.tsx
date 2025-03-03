import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import { Link, useRouter } from "expo-router";

export default function PasswordScreen() {
  const { push } = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  function handleSubmit() {
    if (!password) {
      setError("You should fill this field");
      return;
    }
    if (password.length < 6) {
      setError("password should at least have 6 charchter");
      return;
    }

    setError("");
    push("/(no-tabs)/onboarding");
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className={`flex-1 px-6 ${
          Platform.OS === "android" ? "pt-10" : "pt-5"
        }`}
      >
        <Text className="text-black text-3xl font-rubik-semiBold mb-8">
          Sign in
        </Text>
        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeHolder="Your Password"
          placeholderTextColor="#999"
        />
        {error && <Text className="mb-2 text-red-600 text-xl">{error}</Text>}
        <CustomButton
          buttonClassName={"bg-primary-100"}
          title="Continue"
          onPress={() => {
            handleSubmit();
          }}
        />
        <View className="mt-4 mb-8">
          <Text className="text-base text-black mx-3">
            Forget Password ? {""}
            <Link href={"./reset"}>
              <Text className="text-black font-bold">Reset &rarr;</Text>
            </Link>
          </Text>
        </View>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}
