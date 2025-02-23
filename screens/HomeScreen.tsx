import debounce from "lodash.debounce";
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Alert, SectionList, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { useAuth } from "../hooks/useAuth";
import { CustomBtn } from "../shared";
import { Filters } from "../shared/Filters";
import { ScreenContainer } from "../shared/ScreenContainer";
import { styles } from "../styles";
import { MenuItem, NavigationProps, SectionListData } from "../types";
import {
  createTable,
  filterByQueryAndCategories,
  getMenuItems,
  saveMenuItems,
} from "../utils/database";
import { getSectionListData, useUpdateEffect } from "../utils/utils";

const API_URL =
  "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json";
const sections = ["Appetizers", "Salads", "Beverages"];

export const HomeScreen = ({ navigation }: NavigationProps) => {
  const { logout } = useAuth();
  const [data, setData] = useState<SectionListData[]>([]);
  const [searchBarText, setSearchBarText] = useState("");
  const [query, setQuery] = useState("");
  const [filterSelections, setFilterSelections] = useState(
    sections.map(() => false)
  );

  const getData = async () => {
    try {
      const request = await fetch(API_URL);
      const fetchedData = await request.json();
      const menuItems = fetchedData.menu || [];
      const mappedData: MenuItem[] = menuItems.map(
        ({
          id,
          title,
          price,
          category,
        }: {
          id: number;
          title: string;
          price: string;
          category: { title: string };
        }) => ({
          id,
          title,
          price,
          category: category?.title,
        })
      );
      return mappedData;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        await createTable();
        let menuItems = await getMenuItems();
        if (!menuItems.length) {
          const items = await getData();
          if (items && Array.isArray(items) && items.length) {
            saveMenuItems(items);
            menuItems = items;
          } else {
            console.warn(
              "No menu items fetched or data is in incorrect format:",
              items
            );
            menuItems = [];
          }
        }
        const sectionListData = getSectionListData(menuItems);
        setData(sectionListData);
      } catch (err) {
        if (err instanceof Error) {
          Alert.alert(err.message);
        } else {
          Alert.alert("An unknown error occurred");
        }
      }
    })();
  }, []);

  useUpdateEffect(() => {
    (async () => {
      const activeCategories = sections.filter((s, i) => {
        if (filterSelections.every((item) => item === false)) {
          return true;
        }
        return filterSelections[i];
      });
      try {
        const menuItems = await filterByQueryAndCategories(
          query,
          activeCategories
        );
        const sectionListData = getSectionListData(menuItems);
        setData(sectionListData);
      } catch (err) {
        if (err instanceof Error) {
          Alert.alert(err.message);
        } else {
          Alert.alert("An unknown error occurred");
        }
      }
    })();
  }, [filterSelections, query]);

  const lookup = useCallback((q: SetStateAction<string>) => {
    setQuery(q);
  }, []);

  const debouncedLookup = useMemo(() => debounce(lookup, 500), [lookup]);

  const handleSearchChange = (text: string) => {
    setSearchBarText(text);
    debouncedLookup(text);
  };

  const handleFiltersChange = async (index: number) => {
    const arrayCopy = [...filterSelections];
    arrayCopy[index] = !filterSelections[index];
    setFilterSelections(arrayCopy);
  };

  return (
    <ScreenContainer>
      <Searchbar
        placeholder="Search"
        placeholderTextColor="white"
        onChangeText={handleSearchChange}
        value={searchBarText}
        style={styles.searchBar}
        iconColor="white"
        inputStyle={{ color: "white" }}
        elevation={0}
      />
      <Filters
        selections={filterSelections}
        onChange={handleFiltersChange}
        sections={sections}
      />
      <Text style={styles.title}>Home</Text>
      <CustomBtn
        title="My Account"
        onPress={() => navigation.navigate("Account")}
      />
      <CustomBtn title="Logout" onPress={() => logout()} />
      <SectionList
        sections={data}
        keyExtractor={(item) =>
          item?.id?.toString() ?? Math.random().toString()
        }
        renderItem={({ item }) =>
          item ? <Item title={item.title} price={item.price} /> : null
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </ScreenContainer>
  );
};

const Item = ({ title, price }: { title: string; price: string }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>${price}</Text>
  </View>
);
