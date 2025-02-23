import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { colorDark } from "../styles";

export const LogoutBtn = ({ onPress }: { onPress: () => void }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <MaterialIcons name="logout" size={32} color={colorDark} />
      </View>
    </TouchableOpacity>
  );
};
