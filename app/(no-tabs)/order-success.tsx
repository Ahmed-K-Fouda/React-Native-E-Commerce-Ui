import CustomButton from "@/components/shared/CustomButton";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

export default function OrderSuccess() {
  const { push, back } = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row items-center py-5">
        <TouchableOpacity className="w-10 h-10 rounded-full bg-gray items-center justify-center mr-4">
          <ChevronLeft
            onPress={() => back()}
            stroke="#000"
            style={{ backgroundColor: "white", borderRadius: "50%" }}
            width={24}
            height={24}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.purpleBackground}>
        <Image
          source={require("@/assets/images/orders/success.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.whiteCard}>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Order Placed{"\n"}Successfully</Text>
            <Text style={styles.subtitle}>
              You will recieve an email confirmation
            </Text>
          </View>

          <CustomButton
            onPress={() => push("/(no-tabs)/cart")}
            title="See Order details"
            buttonClassName="bg-primary-100"
            textClassName="font-rubik-medium"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8e6cef",
  },
  purpleBackground: {
    flex: 1,
    backgroundColor: "#8e6cef",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: height * 0.05,
  },
  whiteCard: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    height: height * 0.4,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 34,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: -height * 0.05, // Slightly overlap with white card
  },
  textContainer: {
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1A1A1A",
    textAlign: "center",
    lineHeight: 40,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#8e6cef",
    width: "100%",
    height: 56,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#8e6cef",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
