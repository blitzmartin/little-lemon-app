import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export const ScreenContainer = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ecf",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
