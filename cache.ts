import * as cache from "memory-cache";

/**
 * gets the value from the cache if exists or puts it if it doesn't
 *
 * note: we store values forever due to the short-lived nature of this project
 *
 * @param key self-evident
 * @param valueGetter the function to invoke to get the value to be stored
 */
export const getPut = async (key: string, valueGetter: () => any) =>
    cache.get(key) || cache.put(key, await valueGetter());
