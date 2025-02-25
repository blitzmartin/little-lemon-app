import { ReactNode } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { colorLight } from "../styles";
import { CustomAvatar } from "./CustomAvatar";

export const ScreenContainer = ({
  children,
  backgroundColor = colorLight,
  hasAccount = false,
  navigation,
}: {
  children: ReactNode;
  backgroundColor?: string;
  hasAccount?: boolean;
  navigation: any;
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View
        style={{
          width: "100%",
          height: 72,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../assets/little-lemon-logo.png")}
            style={styles.logo}
          />
        </View>

        {hasAccount && (
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <CustomAvatar size="small" />
          </TouchableOpacity>
        )}
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
