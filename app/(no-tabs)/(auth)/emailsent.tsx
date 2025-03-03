import { View, Text, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/shared/CustomButton";

export default function PasswordResetConfirmationScreen() {
  const { push } = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white items-center justify-center px-6">
      <View className="items-center max-w-lg w-full">
        <Image
          source={require("@/assets/images/theme/email-sent.png")}
          className="w-[100px] h-[100px] mb-6"
          resizeMode="contain"
        />
        <Text className="text-[25px] font-rubik-semiBold text-center text-gray-800 mb-8 leading-10">
          We sent you an email to reset your password
        </Text>
        <CustomButton
          title="return to login"
          buttonClassName={"bg-primary-100"}
          textClassName={"text-lg font-rubik-semibold"}
          onPress={() => {
            push("/");
          }}
        />
      </View>
    </SafeAreaView>
  );
}
