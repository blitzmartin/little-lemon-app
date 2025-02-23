import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles";
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
            padding: 16,
            backgroundColor: selections[index] ? "#f2cf31" : "#495E57",
            borderWidth: 1,
            borderColor: "white",
            marginTop: -8,
          }}
          activeOpacity={1} // Prevent opacity change on press
        >
          <View>
            <Text style={{ color: selections[index] ? "black" : "white" }}>
              {section}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
