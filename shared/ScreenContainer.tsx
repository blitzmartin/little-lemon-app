import { ReactNode } from "react";
import { Image, StyleSheet, View } from "react-native";
import { colorLight } from "../styles";

export const ScreenContainer = ({
  children,
  backgroundColor = colorLight,
}: {
  children: ReactNode;
  backgroundColor?: string;
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/little-lemon-logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.innerContainer}>{children}</View>
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
    height: 60,
  },
  logoContainer: {
    width: "100%",
    height: 92,
    alignSelf: "center",
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});
