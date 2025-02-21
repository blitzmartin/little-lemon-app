import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";
import { CustomBtn, ScreenContainer, SpacedStack } from "../shared";
import { colorGreen } from "../styles";

interface OnboardingScreenProps {
  navigation: {
    navigate: (screen: string) => void;
  };
}

export const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handlePress = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    setName("");
    setEmail("");
    navigation.navigate("Home");
  };

  return (
    <ScreenContainer backgroundColor={colorGreen}>
      <Text style={styles.title}>Welcome To Little Lemon</Text>
      <SpacedStack gap={32}>
        <TextInput
          label="Name"
          mode="outlined"
          value={name}
          onChangeText={setName}
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
          disabled={name == "" || email === ""}
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
  input: {
    width: "80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
  },
});
