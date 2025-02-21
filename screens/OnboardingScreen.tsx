import { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";
import { CustomBtn, ScreenContainer, SpacedStack } from "../shared";
import { colorGreen, colorLight, styles } from "../styles";
import { NavigationProps } from "../types";
import { generateFakeToken } from "../utils/utils";

export const OnboardingScreen = ({ navigation }: NavigationProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { login } = useAuth();
  const token = generateFakeToken();

  const handlePress = () => {
    login({ firstName, lastName, email }, token);
    setFirstName("");
    setLastName("");
    setEmail("");
    navigation.navigate("Home");
  };

  return (
    <ScreenContainer backgroundColor={colorGreen}>
      <Text style={[styles.title, { color: colorLight }]}>
        Welcome To Little Lemon
      </Text>
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
