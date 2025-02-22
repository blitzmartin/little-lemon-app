import { StyleSheet } from 'react-native';

export const colorDark = "#333333";
export const colorLight = "#fff";
export const colorDisabled = "#b1930b";
export const colorGray = "#999999";
export const colorGreen = "#495f59";
export const colorYellow = "#f2cf31";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
   title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    alignSelf: "center",
  },
     filtersContainer: {
    backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
    sectionHeader: {
    fontSize: 24,
    color: "#333",
    backgroundColor: "#FBDABB",
    padding: 8,
    marginTop: 8,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
    sectionList: {
    paddingHorizontal: 16,
  },
  searchBar: {
    marginBottom: 24,
    backgroundColor: "#495E57",
    shadowRadius: 0,
    shadowOpacity: 0,
  },
});
