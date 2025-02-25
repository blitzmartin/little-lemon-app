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
    marginBottom: 20,
    alignSelf: "center",
  },
   text: {
    fontSize: 16,
  },
  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    backgroundColor: colorYellow,
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
    backgroundColor: colorGreen,
    shadowRadius: 0,
    shadowOpacity: 0,
    borderRadius: 0,
    padding: 0,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
