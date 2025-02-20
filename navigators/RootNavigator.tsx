import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import { OnboardingScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};
