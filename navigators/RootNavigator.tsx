import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";
import { AccountScreen, HomeScreen, OnboardingScreen } from "../screens";

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  const { isLoggedIn, user, loading, login, logout } = useAuth();

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
