class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // Store to the maximum capacity
        this.cache = new Map(); // Store key-value pairs
    }

    get(key) {
        if (this.cache.has(key)) {
            // If the key exists, move it to the "most recently used" position
            const value = this.cache.get(key);
            this.cache.delete(key); 
            this.cache.set(key, value); 
            return value;
        }

        return null;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            // If the key already exists, remove it to update its position
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            // If the cache is at capacity, remove the least recently used item
            const leastRecentlyUsedKey = this.cache.keys().next().value;
            this.cache.delete(leastRecentlyUsedKey);
        }

        this.cache.set(key, value);
    }
}

const cache = new LRUCache(2);
cache.put(1, 1); 
cache.put(2, 2); 
console.log(cache.get(1)); 
cache.put(3, 3); 
console.log(cache.get(2)); 
console.log(cache.get(1)); 
