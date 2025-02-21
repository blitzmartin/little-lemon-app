import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useContext } from "react";
import { Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { AccountScreen, HomeScreen, OnboardingScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <Text>Auth context not found</Text>;
  }

  const { isLoggedIn, user, loading, login, logout } = authContext;

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Onboarding"}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </>
      ) : (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
    </Stack.Navigator>
  );
};
