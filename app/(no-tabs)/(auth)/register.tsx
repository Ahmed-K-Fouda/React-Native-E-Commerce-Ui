import { View, Text, Platform, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "@/components/shared/CustomInput";
import { StatusBar } from "expo-status-bar";
import CustomButton from "@/components/shared/CustomButton";
import { Link, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import LottieView from "lottie-react-native"

export default function CreateAccountScreen() {
  const { back, push } = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleSubmit() {
    let newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (!firstName.trim()) newErrors.firstName = "First Name is required";
    if (!lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() && !emailRegex.test(email.trim())) {
      newErrors.email = "Invalid email format";
    }

    if (password.trim() && password.trim().length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (!Object.values(newErrors).some((err) => err)) {
      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 3000);
    }
    setTimeout(() => {
      push("/(no-tabs)/onboarding");
    }, 2000);
  }

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
          Create Account
        </Text>
        <View className="space-y-4">
          <CustomInput
            placeHolder="First Name"
            value={firstName}
            onChangeText={(e) => {
              setFirstName(e);
              setErrors({ ...errors, firstName: "" });
            }}
            placeholderTextColor="#999"
          />
          {errors.firstName ? (
            <Text className="text-red-500">{errors.firstName}</Text>
          ) : null}

          <CustomInput
            placeHolder="Last Name"
            value={lastName}
            onChangeText={(e) => {
              setLastName(e);
              setErrors({ ...errors, lastName: "" });
            }}
            placeholderTextColor="#999"
          />
          {errors.lastName ? (
            <Text className="text-red-500">{errors.lastName}</Text>
          ) : null}

          <CustomInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeHolder="Email Address"
            value={email}
            onChangeText={(e) => {
              setEmail(e);
              setErrors({ ...errors, email: "" });
            }}
            placeholderTextColor="#999"
          />
          {errors.email ? (
            <Text className="text-red-500">{errors.email}</Text>
          ) : null}

          <CustomInput
            placeHolder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(e) => {
              setPassword(e);
              setErrors({ ...errors, password: "" });
            }}
            placeholderTextColor="#999"
          />
          {errors.password ? (
            <Text className="text-red-500">{errors.password}</Text>
          ) : null}

          <CustomButton
            buttonClassName={"bg-primary-100"}
            title="Continue"
            onPress={handleSubmit}
          />
        </View>

        <View className="mt-6 items-start">
          <Text className="text-base text-black mx-3">
            Forget Password ? {""}
            <Link href={"/(no-tabs)/(auth)/reset"}>
              <Text className="text-black font-bold">Reset &rarr;</Text>
            </Link>
          </Text>
        </View>
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
