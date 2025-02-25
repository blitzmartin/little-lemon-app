import { Text, TouchableOpacity, View } from "react-native";
import { colorGreen, colorLight, styles } from "../styles";
import { FiltersProps } from "../types";

export const Filters: React.FC<FiltersProps> = ({
  onChange,
  selections,
  sections,
}) => {
  return (
    <View style={styles.filtersContainer}>
      {sections.map((section: string, index: number) => (
        <TouchableOpacity
          key={index.toString()} // Add a unique key
          onPress={() => {
            onChange(index);
          }}
          style={{
            flex: 1 / sections.length,
            justifyContent: "center",
            alignItems: "center",
            padding: 8,
            backgroundColor: selections[index] ? "#f2cf31" : colorLight,
            borderWidth: 2,
            borderRadius: 16,
            borderColor: colorGreen,
            marginHorizontal: 4,
          }}
          activeOpacity={1} // Prevent opacity change on press
        >
          <View>
            {/*   <Text style={{ color: selections[index] ? "black" : "white" }}> */}
            <Text>{section}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
