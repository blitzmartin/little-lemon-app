import { ReactNode } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { colorLight } from "../styles";
import { CustomAvatar } from "./CustomAvatar";

export const ScreenContainer = ({
  children,
  backgroundColor = colorLight,
  hasAccount = false,
}: {
  children: ReactNode;
  backgroundColor?: string;
  hasAccount?: boolean;
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
        />
        {hasAccount && <CustomAvatar size="small" />}
      </View>
      <View style={styles.innerContainer}>{children}</View>
    </View>
  );
};

export const ScrollContainer = ({
  children,
  backgroundColor = colorLight,
}: {
  children: ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView style={styles.innerContainer}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    padding: 16,
    flex: 1,
  },
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
    margin: 16,
    width: "100%",
    height: 40,
  },
  logoContainer: {
    width: "100%",
    height: 68,
    alignSelf: "center",
    marginBottom: 8,
    backgroundColor: "#fff",
  },
});
