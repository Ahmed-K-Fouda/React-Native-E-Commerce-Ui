import {
  View,
  Text,
  Dimensions,
  TextInputProps,
  KeyboardTypeOptions,
  TextInput,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");

interface CustomInputProps extends TextInputProps {
  placeHolder: string;
  inputClassName?: string;
  keyboardType?: KeyboardTypeOptions;
  placeholderTextColor: string;
  value?: string;
  onChangeText?: any;
}

export default function CustomInput({
  placeHolder,
  inputClassName,
  keyboardType,
  placeholderTextColor,
  value,
  onChangeText,
}: CustomInputProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      className={`h-[60px] placeholder:font-rubik-medium bg-[#f3f3f3] rounded-[8px] px-4 text-[16px] mb-[16px] w-full ${inputClassName}`}
      style={{ width: width > 400 ? 400 : width - 48 }}
      placeholderTextColor={placeholderTextColor}
      keyboardType={keyboardType}
      autoCapitalize="none"
    />
  );
}
