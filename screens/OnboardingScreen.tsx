import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { CustomBtn, ScreenContainer, SpacedStack } from "../shared";
import { colorGreen } from "../styles";
import { NavigationProps } from "../types";

export const OnboardingScreen = ({ navigation }: NavigationProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlePress = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    setFirstName("");
    setLastName("");
    setEmail("");
    navigation.navigate("Home");
  };

  return (
    <ScreenContainer backgroundColor={colorGreen}>
      <Text style={styles.title}>Welcome To Little Lemon</Text>
      <SpacedStack gap={32}>
        <TextInput
          label="First Name"
          mode="outlined"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          label="Last Name"
          mode="outlined"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
        />
        <CustomBtn
          title="Next"
          onPress={handlePress}
          disabled={firstName == "" || lastName == "" || email === ""}
        />
      </SpacedStack>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
    color: "#fff",
  },
});
