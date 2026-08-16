import { Injectable, Logger } from '@nestjs/common';

interface MemoryItem {
  value: number | string;
  expiresAt?: number;
}

@Injectable()
export class RedisService {
  private readonly logger = new Logger(RedisService.name);
  private readonly storage = new Map<string, MemoryItem>();

  private isExpired(item: MemoryItem): boolean {
    if (!item.expiresAt) return false;
    return Date.now() > item.expiresAt;
  }

  async incr(key: string): Promise<number> {
    const item = this.storage.get(key);
    if (!item || this.isExpired(item)) {
      const newValue = 1;
      this.storage.set(key, { value: newValue });
      return newValue;
    }

    const currentVal = typeof item.value === 'number' ? item.value : parseInt(item.value, 10) || 0;
    const newValue = currentVal + 1;
    item.value = newValue;
    this.storage.set(key, item);
    return newValue;
  }

  async expire(key: string, seconds: number): Promise<boolean> {
    const item = this.storage.get(key);
    if (!item || this.isExpired(item)) {
      return false;
    }
    item.expiresAt = Date.now() + seconds * 1000;
    this.storage.set(key, item);
    return true;
  }

  async ttl(key: string): Promise<number> {
    const item = this.storage.get(key);
    if (!item || this.isExpired(item)) {
      if (item) this.storage.delete(key);
      return -2;
    }

    if (!item.expiresAt) {
      return -1;
    }

    const remainingMs = item.expiresAt - Date.now();
    return Math.max(0, Math.ceil(remainingMs / 1000));
  }

  async get(key: string): Promise<string | null> {
    const item = this.storage.get(key);
    if (!item || this.isExpired(item)) {
      if (item) this.storage.delete(key);
      return null;
    }
    return String(item.value);
  }

  async set(key: string, value: string | number, ttlSeconds?: number): Promise<void> {
    const expiresAt = ttlSeconds ? Date.now() + ttlSeconds * 1000 : undefined;
    this.storage.set(key, { value, expiresAt });
  }

  async del(key: string): Promise<number> {
    const existed = this.storage.has(key);
    if (existed) {
      this.storage.delete(key);
      return 1;
    }
    return 0;
  }

  reset(): void {
    this.storage.clear();
  }
}
