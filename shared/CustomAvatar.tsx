import { Avatar } from "react-native-elements";
import { useAuth } from "../hooks/useAuth";
import { getUserInitials } from "../utils/utils";

export const CustomAvatar = ({
  size = "large",
}: {
  size?: number | "large" | "small" | "medium" | "xlarge" | undefined;
}) => {
  const { user } = useAuth();
  const initials = getUserInitials(user);

  return (
    <Avatar
      rounded
      size={size}
      title={initials}
      source={require("../assets/images/Profile.png")}
    />
  );
};
