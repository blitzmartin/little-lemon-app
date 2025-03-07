import { useState } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";
import { CustomBtn, ScreenContainer } from "../shared";
import {
  colorDark,
  colorGray,
  colorGreen,
  colorLight,
  styles,
} from "../styles";
import { NavigationProps } from "../types";
import { generateFakeToken } from "../utils/utils";

export const OnboardingScreen = ({ navigation }: NavigationProps) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const { login } = useAuth();
  const token = generateFakeToken();
  const isBtnDisabled = firstName == "" || lastName == "" || email === "";

  const handlePress = () => {
    login({ firstName, lastName, email }, token);
    setFirstName("");
    setLastName("");
    setEmail("");
    navigation.navigate("Home");
  };

  return (
    <ScreenContainer backgroundColor={colorGreen}>
      <Text
        style={[
          styles.title,
          { color: colorLight, marginTop: 12, fontSize: 36 },
        ]}
      >
        Welcome To Little Lemon!
      </Text>
      <View
        style={{
          flexGrow: 1,
          flexDirection: "column",
          gap: 32,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          mode="outlined"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor={colorGray}
          placeholder="First Name"
          theme={{
            colors: { primary: colorDark },
          }}
        />
        <TextInput
          mode="outlined"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor={colorGray}
          placeholder="Last Name"
          theme={{
            colors: { primary: colorDark },
          }}
        />
        <TextInput
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor={colorGray}
          placeholder="Email"
          autoCapitalize="none"
          theme={{
            colors: { primary: colorDark },
          }}
        />
        <CustomBtn
          title="Next"
          onPress={handlePress}
          disabled={isBtnDisabled}
        />
        {isBtnDisabled && (
          <Text
            style={{
              alignSelf: "center",
              marginTop: -20,
              color: colorLight,
            }}
          >
            Values cannot be empty, please fill all form fields.
          </Text>
        )}
      </View>
    </ScreenContainer>
  );
};
