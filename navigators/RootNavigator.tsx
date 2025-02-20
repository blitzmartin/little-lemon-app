import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from "react";
import { OnboardingScreen } from '../screens';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};
