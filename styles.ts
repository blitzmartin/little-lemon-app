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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    fontFamily: "MarkaziText_500Medium",
  },
   text: {
     fontSize: 16,
     fontFamily: "Karla_400Regular"
  },
  filtersContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 28,
    fontFamily: "MarkaziText_500Medium",
    color: "#333",
    backgroundColor: colorYellow,
    padding: 8,
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
  searchBarInput: {
    color: "white",
    fontFamily: "Karla_400Regular"
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  customButton: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  checkBoxText: {
    fontFamily: "Karla_400Regular",
    fontSize: 16,
  }
});
