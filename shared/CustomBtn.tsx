import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import {
  colorDark,
  colorDisabled,
  colorGreen,
  colorLight,
  colorYellow,
} from "../styles";

type Variant = "default" | "dark" | "outline" | "disabled";

interface CustomBtnProps {
  title: string;
  onPress?: () => void;
  variant?: Variant;
  disabled?: boolean;
}

const colors = {
  colorYellow: colorYellow,
  colorDark: colorDark,
  colorGreen: colorGreen,
  colorLight: colorLight,
  colorDisabled: colorDisabled,
};

export const CustomBtn = ({
  title,
  onPress,
  variant = "default",
  disabled = false,
}: CustomBtnProps) => {
  const getButtonStyle = (): ViewStyle => {
    if (disabled) {
      return {
        backgroundColor: colors.colorDisabled,
        borderColor: colors.colorDisabled,
      };
    }

    switch (variant) {
      case "dark":
        return {
          backgroundColor: colors.colorGreen,
          borderColor: colors.colorGreen,
        };
      case "outline":
        return {
          backgroundColor: colors.colorLight,
          borderColor: colors.colorGreen,
        };
      case "disabled":
        return {
          backgroundColor: colors.colorDisabled,
          borderColor: colors.colorDisabled,
        };
      default:
        return {
          backgroundColor: colors.colorYellow,
          borderColor: colors.colorYellow,
        };
    }
  };

  // Determina il colore del testo in base alla variante e allo stato disabled
  const getTextStyle = (): TextStyle => {
    if (disabled) {
      return {
        color: colors.colorDark,
      };
    }

    switch (variant) {
      case "dark":
        return {
          color: colors.colorLight,
        };
      case "outline":
        return {
          color: colors.colorGreen,
        };
      case "disabled":
        return {
          color: colors.colorDark,
        };
      default:
        return {
          color: colors.colorDark,
        };
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle()]}
      onPress={onPress}
      disabled={disabled || variant === "disabled"}
    >
      <Text style={[styles.text, getTextStyle()]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
