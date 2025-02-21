import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export const SpacedStack = ({
  children,
  gap = 16,
}: {
  children: ReactNode;
  gap?: number;
}) => {
  return <View style={[styles.stackedContainer, { gap }]}>{children}</View>;
};
const styles = StyleSheet.create({
  stackedContainer: {
    flexGrow: 1,
    flexDirection: "column",
  },
});
