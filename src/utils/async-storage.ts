import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Key of AsyncStorage
 */
export enum StorageKey {
  TOKEN = 'TOKEN',
  USER = 'USER',
}

export class AsyncStorageUtils {
  /**
   * Save Value AsyncStorage
   * @param key
   * @param value
   */
  static save(key: StorageKey, value: string): void {
    AsyncStorage.setItem(key, value);
  }

  /**
   * Get Value AsyncStorage
   * @param key
   */
  static async get(key: StorageKey): Promise<string | null> {
    return AsyncStorage.getItem(key);
  }

  /**
   * Remove Value trong AsyncStorage
   * @param key
   */
  static async remove(key: StorageKey): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  /**
   * Get Object AsyncStorage
   * @param key
   */
  static async getObject<T>(key: StorageKey): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);
    if (!value) return null;

    return JSON.parse(value);
  }

  /**
   * Save array or object AsyncStorage
   * @param key
   * @param value
   */
  static saveObject<T>(key: StorageKey, value: T): void {
    AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async clear(callback?: (error?: any) => void): Promise<void> {
    await AsyncStorage.clear(callback);
  }
}
