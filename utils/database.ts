import * as SQLite from "expo-sqlite";
import { MenuItem } from '../types';

const db = SQLite.openDatabaseSync("little_lemon.db");


export const createTable = async (): Promise<void> => {
  const statement = await db.prepareAsync(
    "CREATE TABLE IF NOT EXISTS menuitems (id integer primary key not null, title text, price text, category text);"
  );
  try {
    await statement.executeAsync();
    await statement.finalizeAsync();
    console.log("Table created or already exists.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

export const getMenuItems = async () => {
  const statement = await db.prepareAsync("SELECT * FROM menuitems;");
  try {
    const result = await statement.executeAsync();
    const allRows = await result.getAllAsync();
    return allRows as MenuItem[];
  } catch (error) {
    console.error("Error getting menu items:", error);
    return []
  }
  finally {
   await statement.finalizeAsync();
  }
}

export const saveMenuItems = async (menuItems: MenuItem[]): Promise<void> => {
  try {
    for (const item of menuItems) {
      const statement = await db.prepareAsync(
        "INSERT INTO menuitems (id, title, price, category) VALUES (?, ?, ?, ?);"
      );
      try {
        await statement.executeAsync([item.id, item.title ?? '', item.price ?? '', item.category ?? '']);
      } finally {
        await statement.finalizeAsync();
      }
    }
    console.log("Menu items saved successfully");
  } catch (error) {
    console.error("Error saving menu items:", error);
    throw error; // Rethrow the error to be handled by the caller if needed
  }
};
