import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useRef } from "react";

const { height } = Dimensions.get("window");

interface SizeBottomSheetProps {
  visible: boolean;
  onClose: () => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

const SIZES = ["S", "M", "L", "XL", "2XL"];

export const SizeBottomSheet: React.FC<SizeBottomSheetProps> = ({
  visible,
  onClose,
  selectedSize,
  onSelectSize,
}) => {
  const translateY = useRef(new Animated.Value(height)).current;

  useEffect(() => {
    if (visible) {
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        bounciness: 0,
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: height,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View className="flex-1 bg-black/50 justify-end">
          <TouchableWithoutFeedback>
            <Animated.View
              style={{
                transform: [{ translateY }],
              }}
              className="bg-white rounded-t-3xl pt-5 px-5 pb-10"
            >
              <View className="flex-row justify-between items-center mb-5">
                <Text className="text-2xl font-semibold">Size</Text>
                <TouchableOpacity onPress={onClose} className="p-1">
                  <Ionicons name="close" size={24} color="#000" />
                </TouchableOpacity>
              </View>
              <View className="space-y-3">
                {SIZES.map((size) => (
                  <TouchableOpacity
                    key={size}
                    className={`flex-row items-center justify-between px-4 mt-2 py-4 rounded-full ${
                      selectedSize === size ? "bg-primary-100" : "bg-gray-100"
                    }`}
                    onPress={() => {
                      onSelectSize(size);
                      // onClose();
                    }}
                  >
                    <Text
                      className={`text-lg font-medium ${
                        selectedSize === size ? "text-white" : "text-black"
                      }`}
                    >
                      {size}
                    </Text>
                    {selectedSize === size && (
                      <Ionicons name="checkmark" size={24} color="#fff" />
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
