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
    const result = await statement.executeAsync<MenuItem[]>();
    const allRows = await result.getAllAsync();
    return allRows;
  } catch (error) {
    console.error("Error getting menu items:", error);
    return []
  }
  finally {
   await statement.finalizeAsync();
  }
}
