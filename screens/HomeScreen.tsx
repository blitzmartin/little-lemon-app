import { Text } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { CustomBtn } from "../shared";
import { ScreenContainer } from "../shared/ScreenContainer";
import { styles } from "../styles";
import { NavigationProps } from "../types";

export const HomeScreen = ({ navigation }: NavigationProps) => {
  const { logout } = useAuth();

  return (
    <ScreenContainer>
      <Text style={styles.title}>Home</Text>
      <CustomBtn
        title="My Account"
        onPress={() => navigation.navigate("Account")}
      />
      <CustomBtn title="Logout" onPress={() => logout()} />
    </ScreenContainer>
  );
};
