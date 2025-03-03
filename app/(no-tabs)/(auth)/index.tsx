import { View, Text, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/shared/CustomInput";
import CustomButton from "@/components/shared/CustomButton";
import { Link, useRouter } from "expo-router";
import { SvgUri } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();

  function handleSubmit() {
    const emailTrimmed = email.trim();

    if (!emailTrimmed) {
      setError("Please Fill This Field");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      setError("Please enter a valid email address");
      return;
    }
    setError("");
    push("/(no-tabs)/(auth)/password");
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className={`flex-1 px-6 ${
          Platform.OS === "android" ? "pt-10" : "pt-5"
        }`}
      >
        <Text className="text-3xl text-black mb-8 font-rubik-semiBold">
          Sign in
        </Text>
        <CustomInput
          placeHolder="Email Address"
          value={email}
          onChangeText={(e) => {
            setError("");
            setEmail(e);
          }}
          placeholderTextColor="#999"
        />
        {error ? (
          <Text className="text-red-500 text-xl my-2">{error}</Text>
        ) : null}
        <CustomButton
          buttonClassName={"bg-primary-100"}
          title="Continue"
          onPress={() => {
            handleSubmit();
          }}
        />
        <View className="mb-8 mt-4">
          <Text className="text-base text-black mx-3">
            Dont't Have An Account? {""}
            <Link href={"/(no-tabs)/(auth)/register"}>
              <Text className="text-black font-bold ">Create One&rarr;</Text>
            </Link>
          </Text>
        </View>
        <View className="gap-3">
          <CustomButton
            title="Continue with Apple"
            buttonClassName="bg-gray-100"
            icon={
              <SvgUri
                width={24}
                height={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                }
              />
            }
          />
          <CustomButton
            title="Continue with Google"
            buttonClassName="bg-gray-100"
            icon={
              <SvgUri
                width={24}
                height={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                }
              />
            }
          />
          <CustomButton
            title="Continue with Facebook"
            buttonClassName="bg-gray-100"
            icon={
              <SvgUri
                width={24}
                height={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                }
              />
            }
          />
        </View>
      </View>
      <StatusBar style="auto" hidden={true} />
    </SafeAreaView>
  );
}
