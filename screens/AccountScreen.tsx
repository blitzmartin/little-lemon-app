import { Text } from "react-native";
import { ScreenContainer } from "../shared/ScreenContainer";
import { styles } from "../styles";

export const AccountScreen = () => {
  return (
    <ScreenContainer>
      <Text style={styles.title}>Personal Information</Text>
    </ScreenContainer>
  );
};
