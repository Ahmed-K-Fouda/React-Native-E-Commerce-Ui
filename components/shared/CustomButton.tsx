import {
  View,
  Text,
  ButtonProps,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
const { width } = Dimensions.get("window");

interface CustomButtonProps extends ButtonProps {
  title: string;
  buttonClassName: string;
  //   onPress: () => void;
  icon?: React.ReactNode;
  buttonWidth?: number;
  textClassName?: string;
}

export default function CustomButton({
  title,
  onPress,
  buttonClassName,
  icon,
  textClassName,
  buttonWidth,
}: CustomButtonProps) {
  return icon ? (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: buttonWidth }}
      className={`h-[56px] rounded-full flex items-center gap-[12px] px-5 flex-row ${buttonClassName}`}
    >
      {icon}
      <Text
        className={`${textClassName} flex-1 text-center mr-[24px] font-rubik-medium text-[16px]`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      className={`py-3 px-8 rounded-full items-center ${buttonClassName}`}
      onPress={onPress}
      style={{
        width: buttonWidth ? buttonWidth : width > 400 ? 400 : width - 48,
      }}
    >
      <Text
        className={` text-white text-[18px] font-rubik-extraBold ${textClassName}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
